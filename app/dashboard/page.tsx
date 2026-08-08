"use client";

import Link from "next/link";
import {
  Layers,
  Package,
  Briefcase,
  FileUser,
  MessageSquare,
  FileText,
  ArrowRight,
  Calendar,
  Building2,
  Phone,
  Mail,
  Clock,
  Plus,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const kpis = [
  {
    title: "Solutions",
    value: "12",
    description: "Total Solutions",
    icon: Layers,
    color: "text-[#D71920]",
    bg: "bg-red-50",
    href: "/dashboard/solutions",
  },
  {
    title: "Products",
    value: "28",
    description: "Total Products",
    icon: Package,
    color: "text-green-600",
    bg: "bg-green-50",
    href: "/dashboard/products",
  },
  {
    title: "Job Offers",
    value: "8",
    description: "Active Job Offers",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
    href: "/dashboard/jobs",
  },
  {
    title: "Applications (CVs)",
    value: "36",
    description: "Total Applications",
    icon: FileUser,
    color: "text-purple-600",
    bg: "bg-purple-50",
    href: "/dashboard/applications",
  },
  {
    title: "Messages",
    value: "15",
    description: "Unread Messages",
    icon: MessageSquare,
    color: "text-orange-600",
    bg: "bg-orange-50",
    href: "/dashboard/messages",
  },
  {
    title: "Quote Requests",
    value: "9",
    description: "Pending Requests",
    icon: FileText,
    color: "text-teal-600",
    bg: "bg-teal-50",
    href: "/dashboard/quotes",
  },
];

const chartData = [
  { day: "May 24", applications: 4, quotes: 2, messages: 3 },
  { day: "May 25", applications: 6, quotes: 3, messages: 5 },
  { day: "May 26", applications: 8, quotes: 4, messages: 4 },
  { day: "May 27", applications: 5, quotes: 2, messages: 6 },
  { day: "May 28", applications: 7, quotes: 5, messages: 3 },
  { day: "May 29", applications: 9, quotes: 3, messages: 7 },
  { day: "May 30", applications: 6, quotes: 4, messages: 5 },
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+213 XXX XX XX XX" },
  { icon: Mail, label: "Email", value: "contact@sti-dz.com" },
  { icon: Building2, label: "Address", value: "Sétif, Algeria" },
  { icon: Clock, label: "Working Hours", value: "Sunday - Thursday, 08:00 AM - 05:00 PM" },
];

const quickActions = [
  { label: "Add Solution", description: "Create a new solution", icon: Layers, href: "/dashboard/solutions/create" },
  { label: "Add Product", description: "Create a new product", icon: Package, href: "/dashboard/products/create" },
  { label: "Add Job Offer", description: "Post a new job", icon: Briefcase, href: "/dashboard/jobs/create" },
  { label: "View Applications", description: "Browse received CVs", icon: FileUser, href: "/dashboard/applications" },
  { label: "View Messages", description: "Check contact messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "View Quotes", description: "Check quote requests", icon: FileText, href: "/dashboard/quotes" },
];

const recentActivity = [
  { title: "New application received", subtitle: "Frontend Developer", time: "2 min ago", color: "bg-purple-500" },
  { title: "New quote request", subtitle: "Website Development", time: "15 min ago", color: "bg-teal-500" },
  { title: "New message received", subtitle: "From: Business Partner", time: "1 hour ago", color: "bg-orange-500" },
  { title: "New product added", subtitle: "Ooredoo Prepaid SIM", time: "2 hours ago", color: "bg-green-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
            Welcome back, Admin! 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here&apos;s what&apos;s happening with STI today.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700">
          <Calendar size={16} className="text-gray-400" />
          May 24, 2025 - May 30, 2025
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <Link
            key={kpi.title}
            href={kpi.href}
            className="group bg-white rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${kpi.bg} rounded-lg flex items-center justify-center`}>
                <kpi.icon size={20} className={kpi.color} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-0.5">{kpi.value}</div>
            <div className="text-xs text-gray-500 mb-3">{kpi.description}</div>
            <div className="text-xs font-medium text-[#D71920] group-hover:underline">
              Manage {kpi.title} →
            </div>
          </Link>
        ))}
      </div>

      {/* Chart + Contact Info */}
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Overview Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-gray-900">Overview</h2>
            <select className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#D71920]/20">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9CA3AF" }} />
                <YAxis tick={{ fontSize: 12, fill: "#9CA3AF" }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                />
                <Line type="monotone" dataKey="applications" stroke="#8B5CF6" strokeWidth={2} dot={false} name="Applications" />
                <Line type="monotone" dataKey="quotes" stroke="#14B8A6" strokeWidth={2} dot={false} name="Quote Requests" />
                <Line type="monotone" dataKey="messages" stroke="#F97316" strokeWidth={2} dot={false} name="Messages" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Company Contact Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-gray-900">Company Contact Info</h2>
            <button className="text-xs font-medium text-[#D71920] hover:underline">Edit</button>
          </div>
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-gray-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                  <div className="text-sm text-gray-900 font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 transition-all duration-200 hover:border-[#D71920]/30 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <action.icon size={18} className="text-gray-500 group-hover:text-[#D71920] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">{action.label}</div>
                  <div className="text-xs text-gray-400 truncate">{action.description}</div>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[#D71920] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-xs font-medium text-[#D71920] hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full ${activity.color} mt-2 shrink-0`} />
                <div>
                  <div className="text-sm text-gray-900 font-medium">{activity.title}</div>
                  <div className="text-xs text-gray-500">{activity.subtitle}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}