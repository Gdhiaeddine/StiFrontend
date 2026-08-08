"use client";

import { Save, Building2, Globe, Users, Award } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Info</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your company information displayed on the website.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Company Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 size={18} className="text-[#D71920]" />
            Company Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
              <input
                type="text"
                defaultValue="SARL Smart Technologie Innovation"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Trade Name</label>
              <input
                type="text"
                defaultValue="STI"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Tagline</label>
              <input
                type="text"
                defaultValue="Official Ooredoo Distributor"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">About Description</label>
              <textarea
                rows={4}
                defaultValue="SARL Smart Technologie Innovation is an official Ooredoo distributor specializing in the distribution of mobile recharge credit and prepaid SIM cards across Algeria."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] resize-none"
              />
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Globe size={18} className="text-[#D71920]" />
            SEO Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">SEO Title</label>
              <input
                type="text"
                defaultValue="STI - Official Ooredoo Distributor Algeria"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">SEO Description</label>
              <textarea
                rows={3}
                defaultValue="Official Ooredoo distributor providing mobile recharge credit and prepaid SIM card distribution across Algeria."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Keywords</label>
              <input
                type="text"
                defaultValue="Ooredoo, Algeria, Mobile Recharge, SIM Cards, Wholesale"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Award size={18} className="text-[#D71920]" />
            Statistics (Displayed on Website)
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Provinces Covered</label>
                <input
                  type="text"
                  defaultValue="58"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Partners</label>
                <input
                  type="text"
                  defaultValue="5000+"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Response Time</label>
                <input
                  type="text"
                  defaultValue="24h"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Products</label>
                <input
                  type="text"
                  defaultValue="100%"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}