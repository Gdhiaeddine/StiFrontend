"use client";

import { Save, Globe, Palette, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">General Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Configure your admin dashboard preferences.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Site Settings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Globe size={18} className="text-[#D71920]" />
            Site Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Site Title</label>
              <input
                type="text"
                defaultValue="STI - Official Ooredoo Distributor"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Meta Description</label>
              <textarea
                rows={3}
                defaultValue="SARL Smart Technologie Innovation (STI) - Official Ooredoo distributor specializing in mobile recharge credit and prepaid SIM card distribution across Algeria."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Canonical URL</label>
              <input
                type="url"
                defaultValue="https://sti-dz.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Palette size={18} className="text-[#D71920]" />
            Appearance
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Primary Color</label>
              <div className="flex items-center gap-3">
                <input type="color" defaultValue="#D71920" className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer" />
                <input
                  type="text"
                  defaultValue="#D71920"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Logo Upload</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D71920] rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">STI</span>
                </div>
                <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Change Logo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Bell size={18} className="text-[#D71920]" />
            Notifications
          </h2>
          <div className="space-y-4">
            {[
              { label: "New application received", default: true },
              { label: "New quote request", default: true },
              { label: "New contact message", default: true },
              { label: "Weekly summary report", default: false },
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700">{item.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={item.default}
                  className="w-4 h-4 rounded border-gray-300 text-[#D71920] focus:ring-[#D71920]/20"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Shield size={18} className="text-[#D71920]" />
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Session Timeout (minutes)</label>
              <input
                type="number"
                defaultValue={60}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <label className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-700">Two-factor authentication</span>
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-[#D71920] focus:ring-[#D71920]/20"
              />
            </label>
            <label className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-700">Login notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-[#D71920] focus:ring-[#D71920]/20"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}