// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, MessageSquare, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name.trim()) {
//       toast({
//         title: "Name is required",
//         description: "Please enter your full name.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!formData.email.trim() || !formData.email.includes('@')) {
//       toast({
//         title: "Valid email is required",
//         description: "Please enter a valid email address.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (!formData.message.trim()) {
//       toast({
//         title: "Message is required",
//         description: "Please enter your message.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setFormData({ name: '', email: '', message: '' });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <section id="contact" className="py-20 px-4 lg:px-8">
//       <div className="container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Contact Info */}
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
//               <span className="text-sm font-medium text-primary">💬 Get In Touch</span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//               Ready to transform your
//               <span className="hero-gradient bg-clip-text text-transparent"> team's workflow?</span>
//             </h2>
            
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Have questions about our features, pricing, or need a custom solution? 
//               Our team is here to help you succeed.
//             </p>

//             {/* Contact Methods */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Email us directly</h4>
//                   <p className="text-muted-foreground">hello@mondillaconnect.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
//                   <MessageSquare className="w-6 h-6 text-accent" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Live chat support</h4>
//                   <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
//                 </div>
//               </div>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-12 pt-8 border-t border-card-border">
//               <p className="text-sm text-muted-foreground mb-4">Trusted by teams at:</p>
//               <div className="flex flex-wrap gap-6 opacity-60">
//                 {['TechCorp', 'InnovateLab', 'StartupHub', 'DesignStudio'].map((company) => (
//                   <div key={company} className="text-sm font-medium">{company}</div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="animate-fade-in animate-delay-200">
//             <div className="bg-surface rounded-2xl p-8 border border-card-border">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name Field */}
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-foreground font-medium">
//                     Full Name *
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="bg-background border-card-border focus:border-primary focus:ring-primary/20"
//                     required
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-foreground font-medium">
//                     Email Address *
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email address"
//                     className="bg-background border-card-border focus:border-primary focus:ring-primary/20"
//                     required
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <div className="space-y-2">
//                   <Label htmlFor="message" className="text-foreground font-medium">
//                     Message *
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about your project or ask any questions..."
//                     rows={5}
//                     className="bg-background border-card-border focus:border-primary focus:ring-primary/20 resize-none"
//                     required
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full hero-gradient text-primary-foreground hover:shadow-lg disabled:opacity-50 group"
//                   size="lg"
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center">
//                       Sending...
//                       <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin ml-2"></div>
//                     </span>
//                   ) : (
//                     <span className="flex items-center">
//                       Send Message
//                       <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                   )}
//                 </Button>

//                 {/* Privacy Note */}
//                 <p className="text-xs text-muted-foreground text-center">
//                   By submitting this form, you agree to our privacy policy. 
//                   We'll never share your information.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const PRODUCTS = [
  "Single Residential Property",
  "Block of Flats",
  "HMO Property",
  "Mixed-Use / Commercial & Residential",
  "Property Portfolio",
  "Other",
];

interface LeadFormState {
  name: string;
  email: string;
  product: string;
  message: string;
}

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    if (!form.name || !form.email || !form.product) {
      setErrorMsg("Please fill in your name, email and property type.");
      return;
    }

    setLoading(true);

    try {
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
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 p-5 md:p-6">
      
      {/* Heading */}
      <h3 className="text-lg font-semibold text-focusNavy dark:text-white mb-1">
        Get your quote
      </h3>
      <p className="text-xs text-slate-500 mb-4">
        Complete the form below and one of our advisors will be in touch to discuss your options.
      </p>

      {/* Success Message */}
      {success && (
        <div className="mb-3 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 px-3 py-2 text-xs">
          Thank you — your enquiry has been received. We&apos;ll contact you shortly.
        </div>
      )}

      {/* Error Message */}
      {errorMsg && (
        <div className="mb-3 rounded-lg border border-red-300 bg-red-50 text-red-700 px-3 py-2 text-xs">
          {errorMsg}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Name *</label>
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
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-focusAccent"
            placeholder="you@example.com"
          />
        </div>

        {/* Product Select */}
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
              <option key={p} value={p}>
                {p}
              </option>
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
          className="bg-accent hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          {loading ? "Sending..." : "Submit enquiry"}
        </button>

        <p className="text-[10px] text-slate-500 mt-1">
          By submitting this form you agree that we may contact you about your enquiry. 
          Your details will be handled in line with our privacy policy.
        </p>
      </form>
    </div>
  );
}


