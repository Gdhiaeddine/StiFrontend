"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const departments = ["All Departments", "Sales", "Distribution", "Warehouse", "Customer Support", "Marketing", "Administration"];
const locations = ["All Locations", "Algiers", "Oran", "Constantine", "Annaba", "Blida"];
const types = ["All Types", "Full-time", "Part-time", "Contract"];

const jobs = [
  {
    id: 1,
    title: "Sales Representative",
    department: "Sales",
    location: "Algiers",
    type: "Full-time",
    experience: "2-4 years",
    description: "Drive sales growth by building relationships with retailers and business partners across your assigned territory.",
    salary: "Competitive",
  },
  {
    id: 2,
    title: "Distribution Coordinator",
    department: "Distribution",
    location: "Oran",
    type: "Full-time",
    experience: "3-5 years",
    description: "Coordinate product distribution operations ensuring timely delivery to partners across multiple provinces.",
    salary: "Competitive",
  },
  {
    id: 3,
    title: "Warehouse Assistant",
    department: "Warehouse",
    location: "Algiers",
    type: "Full-time",
    experience: "1-2 years",
    description: "Support warehouse operations including inventory management, order processing, and product organization.",
    salary: "Competitive",
  },
  {
    id: 4,
    title: "Customer Support Agent",
    department: "Customer Support",
    location: "Constantine",
    type: "Full-time",
    experience: "1-3 years",
    description: "Provide excellent support to retail partners, handling inquiries and resolving issues professionally.",
    salary: "Competitive",
  },
  {
    id: 5,
    title: "Marketing Executive",
    department: "Marketing",
    location: "Algiers",
    type: "Full-time",
    experience: "2-4 years",
    description: "Develop and execute marketing strategies to promote Ooredoo products and strengthen brand presence.",
    salary: "Competitive",
  },
  {
    id: 6,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Blida",
    type: "Full-time",
    experience: "1-2 years",
    description: "Provide administrative support including document management, scheduling, and office coordination.",
    salary: "Competitive",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function JobSearch() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === "All Departments" || job.department === department;
    const matchesLoc = location === "All Locations" || job.location === location;
    const matchesType = type === "All Types" || job.type === type;
    return matchesSearch && matchesDept && matchesLoc && matchesType;
  });

  return (
    <section id="positions" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Open Positions
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Current Opportunities
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Explore exciting career opportunities across our departments and build your future with STI.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search positions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-primary/20 focus:border-red-primary shadow-sm"
            />
          </div>

          {/* Filters */}
          <div className="grid sm:grid-cols-3 gap-4">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="px-4 py-3 rounded-full border border-gray-200 text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-primary/20 focus:border-red-primary"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 rounded-full border border-gray-200 text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-primary/20 focus:border-red-primary"
            >
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-4 py-3 rounded-full border border-gray-200 text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-primary/20 focus:border-red-primary"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={`${search}-${department}-${location}-${type}`}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] flex flex-col justify-between"
            >
              {/* Red top accent line on hover */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

              <div>
                {/* Department Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-primary/10 text-xs font-semibold text-red-primary mb-4">
                  <Briefcase size={12} />
                  {job.department}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={12} />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              {/* Salary & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="text-xs font-bold text-green-600">{job.salary}</span>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-primary transition-colors hover:text-red-accent"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}