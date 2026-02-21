import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionWrapper, Container } from './ui/Layout';
import { PrimaryButton } from './ui/Buttons';
import { Badge } from './ui/Badge';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary redirect to Google Form
    // Replace with your actual Google Form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe8TkNJMPCqCWKUFWVt3XZqS-cgkJWj5i3qeYwMw_ZSSnrzmg/viewform', '_blank');
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
        href="https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Namkum+Ranchi+834010"
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Enrollment Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-2">
                  Course Interested In
                </label>
                <select
                  id="course"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                >
                  <option value="">Select a course</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="mern">MERN Stack Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="data-science">Data Science</option>
                  <option value="internship">Industry Internship Program</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Tell us about your background and goals..."
                ></textarea>
              </div>

              <PrimaryButton type="submit" className="w-full justify-center py-4 text-lg shadow-lg shadow-blue-500/20 group">
                Submit Application
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </PrimaryButton>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
