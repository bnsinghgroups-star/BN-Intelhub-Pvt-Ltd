import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { Badge } from './ui/Badge';

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // ✅ Correct Entry IDs
    formData.append("entry.1404571374", fullName);
    formData.append("entry.1855901574", email);
    formData.append("entry.471054464", phone);
    formData.append("entry.1645794894", interest);
    formData.append("entry.899394948", message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfmELFPb5ieG-EdmNil6i_vo_soSvjBtyFf0Q_RmvesEm9xgw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      alert("Application Submitted Successfully!");

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact" background="light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-slate-900 leading-tight">
              Start Your Journey with <span className="text-blue-600">BN Intelhub</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have questions about our courses or internships? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">

  {/* Email */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
      <Mail size={24} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>

      <a
        href="mailto:bnintelhub@gmail.com"
        className="text-slate-600 hover:text-blue-600 transition"
      >
        bnintelhub@gmail.com
      </a>
      <br />

      <a
        href="mailto:bnintelhub.services@gmail.com"
        className="text-slate-600 hover:text-blue-600 transition"
      >
        bnintelhub.services@gmail.com
      </a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
      <Phone size={24} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>

      <a
        href="tel:+918936078905"
        className="text-slate-600 hover:text-blue-600 transition"
      >
        +91 8936078905
      </a>
    </div>
  </div>

  {/* Address */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
      <MapPin size={24} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>

      <a
        href="https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Ranchi+834010"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-blue-600 transition"
      >
        STPI- Plot -8 Part, Namkum <br />
        Industrial Area, Namkum Ranchi - 834010
      </a>
    </div>
  </div>

</div>
          </motion.div>

          {/* Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              BN Intelhub – Enrollment Application Form
            </h3>

            <p className="text-slate-500 mb-6 text-sm">
              Please complete this form to apply for our programs. Our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />

              <select
                required
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              >
                <option value="">Select Interest</option>
                <option value="Software Development Services">
                  Software Development Services
                </option>
                <option value="Professional Training Courses">
                  Professional Training Courses
                </option>
                <option value="Internship Programs">
                  Internship Programs
                </option>
              </select>

              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your background and goals..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all"
              >
                Submit Application
              </button>

            </form>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
