"use client";

import Link from "next/link";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

const products = [
  { id: 1, name: "Ooredoo Recharge 200 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 18, 2026" },
  { id: 2, name: "Ooredoo Recharge 500 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 18, 2026" },
  { id: 3, name: "Ooredoo Recharge 1000 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 18, 2026" },
  { id: 4, name: "Ooredoo Recharge 2000 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 15, 2026" },
  { id: 5, name: "Ooredoo Recharge 5000 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 15, 2026" },
  { id: 6, name: "Ooredoo Recharge 10000 DA", category: "Recharge Credit", status: "Published", updatedAt: "May 15, 2026" },
  { id: 7, name: "Ooredoo Prepaid SIM", category: "SIM Card", status: "Published", updatedAt: "May 12, 2026" },
  { id: 8, name: "Wholesale Starter Pack", category: "Business Pack", status: "Draft", updatedAt: "May 10, 2026" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your Ooredoo products catalog.</p>
        </div>
        <Link
          href="/dashboard/products/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors"
        >
          <Plus size={16} />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Updated</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{product.category}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      product.status === "Published"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{product.updatedAt}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/dashboard/products/${product.id}/edit`} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
                        <Edit size={16} />
                      </Link>
                      <button className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}