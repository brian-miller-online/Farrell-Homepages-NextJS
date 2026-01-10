"use client";

import { useState } from "react";
import { X } from "lucide-react";

// ============================================
// GOHIGHLEVEL WEBHOOK CONFIGURATION
// ============================================
// Replace this URL with your GoHighLevel webhook URL
// You can find this in GHL under: Automation > Workflows > Webhook Trigger
// Or under: Settings > Integrations > Webhooks
const GHL_WEBHOOK_URL = "https://hooks.gohighlevel.com/YOUR_WEBHOOK_ID_HERE";
// ============================================

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  projectDetails: string;
  preferredContact: string;
  timeframe: string;
}

export default function QuoteForm({ isOpen, onClose, preselectedService = "" }: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: preselectedService,
    projectDetails: "",
    preferredContact: "phone",
    timeframe: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Prepare data for GoHighLevel
    // GHL typically expects these field names, but adjust based on your GHL setup
    const ghlPayload = {
      // Standard GHL contact fields
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address1: formData.address,
      
      // Custom fields - these will need to match your GHL custom fields
      customField: {
        service_type: formData.serviceType,
        project_details: formData.projectDetails,
        preferred_contact: formData.preferredContact,
        timeframe: formData.timeframe,
      },
      
      // Source tracking
      source: "Website Quote Form",
      tags: ["Website Lead", formData.serviceType].filter(Boolean),
    };

    try {
      // Check if webhook URL is configured
      if (GHL_WEBHOOK_URL.includes("YOUR_WEBHOOK_ID_HERE")) {
        // Development mode - just log and show success
        console.log("Quote Form Submission (webhook not configured):", ghlPayload);
        console.log("To enable submissions, update GHL_WEBHOOK_URL in QuoteForm.tsx");
        
        // Simulate success for testing
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus("success");
      } else {
        // Production mode - send to GoHighLevel
        const response = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ghlPayload),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setSubmitStatus("success");
      }
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        serviceType: "",
        projectDetails: "",
        preferredContact: "phone",
        timeframe: "",
      });
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage("There was a problem submitting your request. Please call us directly at (260) 909-0717.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-navy text-white p-6 rounded-t-lg">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            aria-label="Close form"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-gold">Get Your Free Quote</h2>
          <p className="text-white/90 mt-2">
            Fill out the form below and Joe will get back to you within 24 hours.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === "success" ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-4">
              Your quote request has been received. Joe will be in touch within 24 hours.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Need to talk sooner? Call Joe directly at{" "}
              <a href="tel:2609090717" className="text-navy font-semibold hover:text-gold">
                (260) 909-0717
              </a>
            </p>
            <button
              onClick={onClose}
              className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                {errorMessage}
              </div>
            )}

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                  placeholder="(260) 909-0717"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-navy mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                placeholder="123 Lake Shore Dr, Fort Wayne, IN"
              />
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-semibold text-navy mb-2">
                Service Needed *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white"
              >
                <option value="">Select a service...</option>
                <option value="Lake House Painting">Lake House Painting</option>
                <option value="Deck Refinishing">Deck Refinishing & Staining</option>
                <option value="Exterior Painting">Exterior Painting</option>
                <option value="Interior Painting">Interior Painting</option>
                <option value="Multiple Services">Multiple Services</option>
                <option value="Not Sure">Not Sure - Need Consultation</option>
              </select>
            </div>

            {/* Timeframe */}
            <div>
              <label htmlFor="timeframe" className="block text-sm font-semibold text-navy mb-2">
                When do you need this done?
              </label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white"
              >
                <option value="">Select timeframe...</option>
                <option value="ASAP">As soon as possible</option>
                <option value="1-2 weeks">Within 1-2 weeks</option>
                <option value="1 month">Within a month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="Just planning">Just planning ahead</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Preferred Contact Method
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleChange}
                    className="w-4 h-4 text-gold focus:ring-gold"
                  />
                  <span className="text-gray-700">Phone Call</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="text"
                    checked={formData.preferredContact === "text"}
                    onChange={handleChange}
                    className="w-4 h-4 text-gold focus:ring-gold"
                  />
                  <span className="text-gray-700">Text Message</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleChange}
                    className="w-4 h-4 text-gold focus:ring-gold"
                  />
                  <span className="text-gray-700">Email</span>
                </label>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="projectDetails" className="block text-sm font-semibold text-navy mb-2">
                Tell us about your project
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all resize-none"
                placeholder="Describe your project, any specific concerns, or questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Request My Free Quote"
                )}
              </button>
            </div>

            {/* Alternative Contact */}
            <p className="text-center text-gray-600 text-sm">
              Prefer to talk? Call Joe directly at{" "}
              <a href="tel:2609090717" className="text-navy font-semibold hover:text-gold">
                (260) 909-0717
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
