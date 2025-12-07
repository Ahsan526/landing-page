import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const PRODUCTS = [
  "Single Residential Property",
  "Block of Flats",
  "HMO Property",
  "Mixed-Use / Commercial & Residential",
  "Property Portfolio",
  "Other",
];

export default function ContactSection() {
  // Form State (your original logic)
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    if (!form.name || !form.email || !form.product) {
      setErrorMsg("Please fill in your name, email and property type.");
      return;
    }

    setLoading(true);

    try {
      // 🔥 IMPORTANT: You will import supabase once your setup works
      const { supabase } = await import("../lib/supabaseClient");

      const { error } = await supabase.from("leads").insert([
        {
          name: form.name,
          email: form.email,
          product: form.product,
          message: form.message,
        },
      ]);

      if (error) {
        console.error(error);
        setErrorMsg("Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        setForm({ name: "", email: "", product: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-focusNavy">
            Speak to Our Property Insurance Team
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Our specialists can help you explore suitable Property Owners Insurance
            options for your residential, commercial, or mixed-use properties.
            Quotes are free, without obligation, and include all terms, conditions
            and exclusions before you proceed.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-slate-700">

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-focusAccent" />
              <p className="leading-tight">
                <span className="font-semibold">Call Us:</span><br />
                01733 000000
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-focusAccent" />
              <p className="leading-tight">
                <span className="font-semibold">Email:</span><br />
                enquiries@focusinsurance.uk
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-focusAccent" />
              <p className="leading-tight">
                <span className="font-semibold">Office:</span><br />
                Focus Insurance Services Ltd<br />
                Peterborough, United Kingdom
              </p>
            </div>

          </div>

          {/* FCA Wording */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 leading-relaxed">
              Focus Insurance Services Ltd is authorised and regulated by the
              Financial Conduct Authority (FCA). Client money is held in segregated
              trust accounts and may be protected by the Financial Services Compensation
              Scheme (FSCS), subject to eligibility.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — YOUR FORM EXACTLY AS PROVIDED */}
        <div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 p-5 md:p-6">

            <h3 className="text-lg font-semibold text-focusNavy dark:text-white mb-1">
              Get your quote
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Complete the form below and one of our advisors will be in touch to
              discuss your options.
            </p>

            {success && (
              <div className="mb-3 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 px-3 py-2 text-xs">
                Thank you — your enquiry has been received. We&apos;ll contact you shortly.
              </div>
            )}

            {errorMsg && (
              <div className="mb-3 rounded-lg border border-red-300 bg-red-50 text-red-700 px-3 py-2 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-focusAccent"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-focusAccent"
                  placeholder="you@example.com"
                />
              </div>

              {/* Product */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Property type / product *
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-focusAccent"
                >
                  <option value="">Select an option</option>
                  {PRODUCTS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Additional details (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-focusAccent resize-none"
                  placeholder="Number of properties, location, current insurer, renewal date..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                {loading ? "Sending..." : "Submit enquiry"}
              </button>

              <p className="text-[10px] text-slate-500 mt-1">
                By submitting this form you agree that we may contact you about your
                enquiry. Your details will be handled in line with our privacy policy.
              </p>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
