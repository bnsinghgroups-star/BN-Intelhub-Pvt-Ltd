import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container } from "./ui/Layout";

export default function Hero() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    alert("Application Submitted Successfully ✅");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#00256C] pt-24 pb-12 overflow-hidden">
      
      {/* Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-left text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              Full Stack Developer Course by BN Intelhub
            </motion.h1>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Upskill in <strong className="text-white">DSA & System Design</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Build real-world projects using <strong className="text-white">MERN Stack</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Learn Full Stack from <strong className="text-white">scratch to advanced</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto w-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Free Career Counselling
              </h3>
              <p className="text-slate-500 text-sm">
                Get guidance and clear your doubts.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Email ID"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              {/* Graduation */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Graduation Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Year of Graduation"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none appearance-none bg-white"
                  >
                    <option value="">Select Job title</option>
                    <option value="student">Student</option>
                    <option value="working">Working Professional</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

          

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold py-4 rounded-lg transition-colors shadow-lg text-lg"
              >
                Continue
              </button>

              <p className="text-xs text-slate-400 text-center">
                By continuing, you agree to our Terms & Privacy Policy.
              </p>

            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}