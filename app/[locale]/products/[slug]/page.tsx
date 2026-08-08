import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductHero from "../../../components/product-detail/ProductHero";
import ProductOverview from "../../../components/product-detail/ProductOverview";
import ProductSpecifications from "../../../components/product-detail/ProductSpecifications";
import ProductBenefits from "../../../components/product-detail/ProductBenefits";
import ProductOrderingProcess from "../../../components/product-detail/ProductOrderingProcess";
import RelatedProducts from "../../../components/product-detail/RelatedProducts";
import ProductFAQ from "../../../components/product-detail/ProductFAQ";
import FinalCTA from "../../../components/FinalCTA";
import { getProductBySlug, getRelatedProducts, getAllProductSlugs } from "../../../data/products";

interface PageParams {
  slug: string;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | STI Official Ooredoo Distributor`,
    description: product.description,
    keywords: [
      product.name,
      "Ooredoo Products Algeria",
      "Official Ooredoo Distributor",
      "Mobile Recharge Credit",
      "Wholesale Telecom",
      "STI Algeria",
    ],
    openGraph: {
      title: `${product.name} | STI Official Ooredoo Distributor`,
      description: product.description,
      images: ["/assets/hero.png"],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SARL Smart Technologie Innovation",
    alternateName: "STI",
    url: "https://sti-dz.com",
    logo: "https://sti-dz.com/logo.png",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "DZD",
      seller: {
        "@type": "Organization",
        name: "SARL Smart Technologie Innovation",
      },
    },
    manufacturer: {
      "@type": "Organization",
      name: "Ooredoo",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sti-dz.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://sti-dz.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://sti-dz.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />
      <main>
        <ProductHero product={product} />
        <ProductOverview product={product} />
        <ProductSpecifications product={product} />
        <ProductBenefits />
        <ProductOrderingProcess />
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
        <ProductFAQ product={product} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}