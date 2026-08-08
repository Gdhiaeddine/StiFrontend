"use client";

import Link from "next/link";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const jobs = [
  { id: 1, title: "Sales Representative", department: "Sales", location: "Algiers", type: "Full-time", status: "Published", applications: 12 },
  { id: 2, title: "Distribution Coordinator", department: "Distribution", location: "Oran", type: "Full-time", status: "Published", applications: 8 },
  { id: 3, title: "Warehouse Assistant", department: "Warehouse", location: "Algiers", type: "Full-time", status: "Published", applications: 15 },
  { id: 4, title: "Customer Support Agent", department: "Customer Support", location: "Constantine", type: "Full-time", status: "Published", applications: 6 },
  { id: 5, title: "Marketing Executive", department: "Marketing", location: "Algiers", type: "Full-time", status: "Draft", applications: 0 },
  { id: 6, title: "Administrative Assistant", department: "Administration", location: "Blida", type: "Full-time", status: "Published", applications: 4 },
];

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Offers</h1>
          <p className="text-sm text-gray-500 mt-1">Manage job postings and career opportunities.</p>
        </div>
        <Link
          href="/dashboard/jobs/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors"
        >
          <Plus size={16} />
          Add Job Offer
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Job Title</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Applications</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-900">{job.title}</td>
                  <td className="py-3 px-4 text-gray-500">{job.department}</td>
                  <td className="py-3 px-4 text-gray-500">{job.location}</td>
                  <td className="py-3 px-4 text-gray-500">{job.type}</td>
                  <td className="py-3 px-4">
                    <span className="text-[#D71920] font-semibold">{job.applications}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      job.status === "Published"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/dashboard/jobs/${job.id}/edit`} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
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