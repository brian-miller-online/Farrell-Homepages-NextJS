"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

// GoHighLevel Webhook URL - Replace with your actual webhook URL when ready
const GHL_WEBHOOK_URL = "https://hooks.gohighlevel.com/YOUR_WEBHOOK_ID_HERE";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    timeframe: "",
    contactMethod: "phone",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare data for GoHighLevel
      const webhookData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service_type: formData.serviceType,
        timeframe: formData.timeframe,
        preferred_contact: formData.contactMethod,
        project_details: formData.projectDetails,
        source: "Website Contact Page",
        submitted_at: new Date().toISOString(),
      };

      // Check if webhook URL is configured
      if (GHL_WEBHOOK_URL.includes("YOUR_WEBHOOK_ID_HERE")) {
        // Demo mode - simulate success
        console.log("Demo mode - Form data:", webhookData);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
      } else {
        // Send to GoHighLevel webhook
        const response = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        setIsSubmitted(true);
      }
    } catch (err) {
      setError(
        "There was an issue submitting your request. Please call Joe directly at (260) 909-0717."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-navy py-12 md:py-16 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4">
            Let's Talk About Your Project
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Get a free quote, ask a question, or just say hello. I personally respond to every inquiry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Left Side - Contact Info (2 columns) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Direct Contact */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:2609090717" 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Call or Text Joe</p>
                        <p className="text-xl text-gold font-bold">(260) 909-0717</p>
                        <p className="text-sm text-gray-600">I answer my phone - even evenings</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:joe@farrellspainting.com"
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Email</p>
                        <p className="text-gold font-semibold">joe@farrellspainting.com</p>
                        <p className="text-sm text-gray-600">I'll respond within 24 hours</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Availability</p>
                        <p className="text-gray-700">Mon - Sat: 7am - 7pm</p>
                        <p className="text-sm text-gray-600">Flexible for your schedule</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-navy mb-4">Service Area</h2>
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-navy">Northeast Indiana</p>
                      <p className="text-gray-600">Fort Wayne & Surrounding Lake Communities</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-navy">Lake Communities I Serve:</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Hamilton Lake
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Lake James
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Crooked Lake
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Jimerson Lake
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Fort Wayne
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Auburn
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Angola
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Columbia City
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Why Contact Joe */}
                <div className="bg-navy rounded-lg shadow-lg p-6 text-white">
                  <h2 className="text-xl font-bold text-gold mb-4">Why Contact Joe Directly?</h2>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>No call centers - you talk to the owner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Free quotes with no obligation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Honest advice - even if I'm not the right fit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>20+ years experience to answer any question</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Quote Form (3 columns) */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                      <p className="text-gray-700 mb-4">
                        Your request has been received. I'll get back to you within 24 hours.
                      </p>
                      <p className="text-gray-600">
                        Need a faster response? Call me directly at{" "}
                        <a href="tel:2609090717" className="text-gold font-semibold hover:underline">
                          (260) 909-0717
                        </a>
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-navy mb-2">Request Your Free Quote</h2>
                      <p className="text-gray-600 mb-6">
                        Fill out the form below and I'll get back to you within 24 hours.
                      </p>

                      {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                              placeholder="Smith"
                            />
                          </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                              placeholder="(260) 909-0717"
                            />
                          </div>
                        </div>

                        {/* Address */}
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                            placeholder="123 Lake Shore Dr, Fort Wayne, IN"
                          />
                        </div>

                        {/* Service & Timeframe Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                              Service Needed <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="serviceType"
                              name="serviceType"
                              required
                              value={formData.serviceType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white"
                            >
                              <option value="">Select a service...</option>
                              <option value="Lake House Painting">Lake House Painting</option>
                              <option value="Deck Refinishing">Deck Refinishing & Staining</option>
                              <option value="Exterior Painting">Exterior Painting</option>
                              <option value="Interior Painting">Interior Painting</option>
                              <option value="Other">Other / Not Sure</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                              When do you need this done?
                            </label>
                            <select
                              id="timeframe"
                              name="timeframe"
                              value={formData.timeframe}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-white"
                            >
                              <option value="">Select timeframe...</option>
                              <option value="ASAP">As soon as possible</option>
                              <option value="1-2 weeks">Within 1-2 weeks</option>
                              <option value="1 month">Within a month</option>
                              <option value="2-3 months">2-3 months</option>
                              <option value="Just planning">Just planning ahead</option>
                            </select>
                          </div>
                        </div>

                        {/* Contact Method */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Contact Method
                          </label>
                          <div className="flex flex-wrap gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value="phone"
                                checked={formData.contactMethod === "phone"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-gold focus:ring-gold"
                              />
                              <span className="text-gray-700">Phone Call</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value="text"
                                checked={formData.contactMethod === "text"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-gold focus:ring-gold"
                              />
                              <span className="text-gray-700">Text Message</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value="email"
                                checked={formData.contactMethod === "email"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-gold focus:ring-gold"
                              />
                              <span className="text-gray-700">Email</span>
                            </label>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div>
                          <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">
                            Tell us about your project
                          </label>
                          <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows={4}
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all resize-none"
                            placeholder="Describe your project, any specific concerns, or questions you have..."
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            "Request My Free Quote"
                          )}
                        </button>

                        <p className="text-center text-sm text-gray-500">
                          Or call Joe directly:{" "}
                          <a href="tel:2609090717" className="text-gold font-semibold hover:underline">
                            (260) 909-0717
                          </a>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}