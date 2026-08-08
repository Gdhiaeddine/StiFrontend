"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, FileText, CheckCircle, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Globe, DollarSign, Calendar } from "lucide-react";

const positions = [
  "Sales Representative",
  "Distribution Coordinator",
  "Warehouse Assistant",
  "Customer Support Agent",
  "Marketing Executive",
  "Administrative Assistant",
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    nationality: "",
    position: "",
    experience: "",
    education: "",
    linkedin: "",
    portfolio: "",
    salary: "",
    availability: "",
    message: "",
    agree: false,
  });

  const [cvName, setCvName] = useState<string | null>(null);
  const [coverName, setCoverName] = useState<string | null>(null);
  const [certName, setCertName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/50 p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3
              className="text-2xl font-extrabold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Application Submitted!
            </h3>
            <p className="text-gray-500">
              Your application has been submitted successfully. Our team will review your application and contact you soon.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-28 lg:py-36 bg-gray-50">
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
            Apply Now
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Submit Your Application
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Fill out the form below to apply for an open position at SARL STI.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <User size={20} className="text-red-primary" />
                  Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality</label>
                    <input
                      type="text"
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Briefcase size={20} className="text-[red-primary]" />
                  Professional Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applying For *</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    >
                      <option value="">Select position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Experience *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 3 years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Education</label>
                    <input
                      type="text"
                      placeholder="e.g., Bachelor's Degree"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary</label>
                    <input
                      type="text"
                      placeholder="e.g., 80,000 DA"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                    <input
                      type="text"
                      placeholder="e.g., Immediate"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[red-primary]/20 focus:border-[red-primary]"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <FileText size={20} className="text-[red-primary]" />
                  Documents
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload CV *</label>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[red-primary]/50 hover:bg-[red-primary]/5 transition-all duration-300">
                      <Upload size={24} className="text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 text-center px-2">
                        {cvName || "Drop CV here"}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-1">PDF, DOC, DOCX</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setCvName(e.target.files?.[0]?.name || null)}
                      />
                    </label>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter (Optional)</label>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[red-primary]/50 hover:bg-[red-primary]/5 transition-all duration-300">
                      <Upload size={24} className="text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 text-center px-2">
                        {coverName || "Drop file here"}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-1">PDF, DOC, DOCX</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setCoverName(e.target.files?.[0]?.name || null)}
                      />
                    </label>
                  </div>

                  {/* Certificates */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Certificates (Optional)</label>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[red-primary]/50 hover:bg-[red-primary]/5 transition-all duration-300">
                      <Upload size={24} className="text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 text-center px-2">
                        {certName || "Drop files here"}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-1">PDF, DOC, DOCX</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setCertName(e.target.files?.[0]?.name || null)}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about yourself...</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-primary/20 focus:border-red-primary resize-none"
                  placeholder="Share anything else you'd like us to know..."
                />
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-red-primary focus:ring-red-primary/20 mt-0.5"
                />
                <span className="text-sm text-gray-500">
                  I agree to the processing of my personal information for recruitment purposes.
                </span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-red-primary text-white font-semibold text-sm rounded-full transition-all duration-300 hover:bg-red-primary/95 hover:shadow-xl hover:shadow-red-primary/25 disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Application...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Application</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}