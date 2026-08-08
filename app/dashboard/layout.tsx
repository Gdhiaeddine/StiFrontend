"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  Package,
  Briefcase,
  FileUser,
  MessageSquare,
  FileText,
  Building2,
  Phone,
  Users,
  ShieldCheck,
  Settings,
  Headset,
  Menu,
  X,
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

const navSections = [
  {
    label: "Main",
    items: [
      { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    ],
  },
  {
    label: "Management",
    items: [
      { href: "/dashboard/solutions", icon: Layers, label: "Solutions" },
      { href: "/dashboard/products", icon: Package, label: "Products" },
    ],
  },
  {
    label: "Careers",
    items: [
      { href: "/dashboard/jobs", icon: Briefcase, label: "Job Offers" },
      { href: "/dashboard/applications", icon: FileUser, label: "Applications (CVs)" },
    ],
  },
  {
    label: "Communication",
    items: [
      { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
      { href: "/dashboard/quotes", icon: FileText, label: "Quote Requests" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/dashboard/company", icon: Building2, label: "Company Info" },
      { href: "/dashboard/company/contact-hours", icon: Phone, label: "Contact & Hours" },
    ],
  },
  {
    label: "Users & Roles",
    items: [
      { href: "/dashboard/users", icon: Users, label: "Users" },
      { href: "/dashboard/roles", icon: ShieldCheck, label: "Roles" },
    ],
  },
  {
    label: "Settings",
    items: [
      { href: "/dashboard/settings", icon: Settings, label: "General Settings" },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[240px] bg-white border-r border-gray-200 z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D71920] rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-bold">STI</span>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">STI</div>
              <div className="text-[10px] text-gray-400 leading-tight">Smart Technologie Innovation</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-gray-400">Official Ooredoo Distributor</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navSections.map((section) => (
            <div key={section.label} className="mb-4">
              <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {section.label}
              </div>
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 mb-0.5 ${
                      isActive
                        ? "bg-red-50 text-[#D71920]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon size={18} className={isActive ? "text-[#D71920]" : "text-gray-400"} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Help */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-2">
            <Headset size={16} className="text-gray-400" />
            <div>
              <div className="text-xs font-medium text-gray-700">Need Help?</div>
              <div className="text-[10px] text-gray-400">Contact our support team</div>
            </div>
          </div>
        </div>

        {/* Mobile close */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 lg:hidden p-1 rounded-lg hover:bg-gray-100"
        >
          <X size={18} className="text-gray-500" />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 lg:px-6 h-16 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={20} className="text-gray-600" />
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#D71920] rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-8 h-8 bg-[#D71920] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-gray-900">Admin</div>
                <div className="text-[10px] text-gray-400">Administrator</div>
              </div>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}