"use client";

import { useState } from "react";
import { Save, Phone, Mail, MapPin, Clock, Globe, ExternalLink } from "lucide-react";

const defaultHours = [
  { day: "Sunday", open: "08:00", close: "17:00", closed: false },
  { day: "Monday", open: "08:00", close: "17:00", closed: false },
  { day: "Tuesday", open: "08:00", close: "17:00", closed: false },
  { day: "Wednesday", open: "08:00", close: "17:00", closed: false },
  { day: "Thursday", open: "08:00", close: "17:00", closed: false },
  { day: "Friday", open: "", close: "", closed: true },
  { day: "Saturday", open: "", close: "", closed: true },
];

export default function ContactHoursPage() {
  const [contact, setContact] = useState({
    phone: "+213 XXX XX XX XX",
    whatsapp: "+213 XXX XX XX XX",
    email: "contact@sti-dz.com",
    address: "Sétif, Algeria",
    mapsUrl: "",
    emergencyContact: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const [hours, setHours] = useState(defaultHours);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact & Working Hours</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your company contact information and business hours.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D71920] text-white text-sm font-semibold rounded-lg hover:bg-[#B81419] transition-colors">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Phone size={18} className="text-[#D71920]" />
            Contact Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp Number</label>
              <input
                type="tel"
                value={contact.whatsapp}
                onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
              <input
                type="text"
                value={contact.address}
                onChange={(e) => setContact({ ...contact, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Google Maps URL</label>
              <input
                type="url"
                value={contact.mapsUrl}
                onChange={(e) => setContact({ ...contact, mapsUrl: e.target.value })}
                placeholder="https://maps.google.com/..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Emergency Contact</label>
              <input
                type="tel"
                value={contact.emergencyContact}
                onChange={(e) => setContact({ ...contact, emergencyContact: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Social Media</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Facebook</label>
                <input
                  type="url"
                  value={contact.facebook}
                  onChange={(e) => setContact({ ...contact, facebook: e.target.value })}
                  placeholder="https://facebook.com/..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
                <input
                  type="url"
                  value={contact.linkedin}
                  onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/company/..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Instagram</label>
                <input
                  type="url"
                  value={contact.instagram}
                  onChange={(e) => setContact({ ...contact, instagram: e.target.value })}
                  placeholder="https://instagram.com/..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Clock size={18} className="text-[#D71920]" />
            Working Hours
          </h2>
          <div className="space-y-3">
            {hours.map((h, index) => (
              <div key={h.day} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                <div className="w-28 text-sm font-medium text-gray-700">{h.day}</div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!h.closed}
                    onChange={(e) => {
                      const newHours = [...hours];
                      newHours[index].closed = !e.target.checked;
                      setHours(newHours);
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-[#D71920] focus:ring-[#D71920]/20"
                  />
                  <span className="text-xs text-gray-500">{h.closed ? "Closed" : "Open"}</span>
                </label>
                {!h.closed && (
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      value={h.open}
                      onChange={(e) => {
                        const newHours = [...hours];
                        newHours[index].open = e.target.value;
                        setHours(newHours);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="time"
                      value={h.close}
                      onChange={(e) => {
                        const newHours = [...hours];
                        newHours[index].close = e.target.value;
                        setHours(newHours);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}