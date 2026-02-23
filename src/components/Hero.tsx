import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { Container } from './ui/Layout';
import { useState, useEffect } from 'react';

const courses = [
  "Full Stack Developer",
  "Data Science",
  "Cyber Security",
  "Robotics",
  "Big Data",
  "IoT",
  "AI & ML",
  "Digital Marketing"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // ✅ Correct Google Form Entry IDs
    formData.append("entry.1345355600", name); // TODO: Add correct Name ID
    formData.append("entry.335730671", email);
    formData.append("entry.994511878", gradYear);
    formData.append("entry.11620289", jobTitle); // ✅ Correct Job Title
    formData.append("entry.1963209061", mobile);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfbERB8_CBmQ_2PrZUxgWJXD-Yf4YU9ZIydWLuhsOynL8dRVg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      alert("Form Submitted Successfully!");

      // Reset form
      setName("");
      setEmail("");
      setGradYear("");
      setJobTitle("");
      setMobile("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#00256C] pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="text-left text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-blue-200 text-sm font-medium mb-6"
            >
              <span>Home</span>
              <span>/</span>
              <span>Academy</span>
              <span>/</span>
              <span className="text-white">Courses</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
              <div className="flex flex-col">
                <div className="h-[1.2em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={courses[index]}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="block text-blue-400"
                    >
                      {courses[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span>Course by BN Intelhub</span>
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Upskill in <strong className="text-white">Industry-Relevant Skills</strong> with our comprehensive curriculum
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Build <strong className="text-white">real-world projects</strong> by mastering in-demand technologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-50">
                  Learn essential <strong className="text-white">concepts from scratch</strong> to advanced level
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto w-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Free Career Counselling is just a call away
              </h3>
              <p className="text-slate-500 text-sm">
                Get guidance and clear your doubts.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email ID"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Graduation Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value)}
                  placeholder="Year of Graduation"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Job Title - Single Select */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>

                <div className="space-y-2">
                  {["Student", "Working Professional", "Other"].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-slate-700">
                      <input
                        type="radio"
                        name="jobTitle"
                        value={item}
                        checked={jobTitle === item}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                      />
                      {item}
                    </label>
                  ))}
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <button className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-900/20 text-lg">
                Continue
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By creating an account I have read and agree to BN Intelhub's <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
