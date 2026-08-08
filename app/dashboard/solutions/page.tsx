"use client";

import Link from "next/link";
import { Plus, Search, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";

const solutions = [
  { id: 1, title: "Mobile Recharge Credit", slug: "mobile-recharge-credit", status: "Published", updatedAt: "May 18, 2026" },
  { id: 2, title: "Prepaid SIM Cards", slug: "prepaid-sim-cards", status: "Published", updatedAt: "May 15, 2026" },
  { id: 3, title: "Wholesale Recharge", slug: "wholesale-recharge", status: "Published", updatedAt: "May 12, 2026" },
  { id: 4, title: "Enterprise Solutions", slug: "enterprise-solutions", status: "Draft", updatedAt: "May 10, 2026" },
  { id: 5, title: "Partner Services", slug: "partner-services", status: "Published", updatedAt: "May 8, 2026" },
];

export default function SolutionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Solutions</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your website solutions and pages.</p>
        </div>
        <Link
          href="/dashboard/solutions/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors"
        >
          <Plus size={16} />
          Add Solution
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search solutions..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Slug</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Updated</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map((solution) => (
                <tr key={solution.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{solution.title}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{solution.slug}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      solution.status === "Published"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {solution.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{solution.updatedAt}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/dashboard/solutions/${solution.id}/edit`} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
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