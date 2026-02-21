import { motion } from 'motion/react';
import { Target, Lightbulb, Globe, Code, Smartphone, BarChart, Shield, Users, CheckCircle, ArrowRight, Cpu, PenTool, Video, Cloud, GraduationCap, Terminal, UserCheck, FileText, Clock, Sparkles, Briefcase } from 'lucide-react';
import { SectionWrapper, Container } from '../components/ui/Layout';
import { Badge } from '../components/ui/Badge';
import { PrimaryButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Cards';

export default function About() {
  const services = [
    { icon: <Globe />, title: "Web Development", description: "Custom, responsive, and SEO-friendly websites." },
    { icon: <Smartphone />, title: "Mobile App Dev", description: "Native and cross-platform mobile applications." },
    { icon: <Terminal />, title: "Software Dev", description: "Scalable and robust enterprise software solutions." },
    { icon: <Cpu />, title: "AI & Automation", description: "Intelligent automation and predictive analytics." },
    { icon: <PenTool />, title: "Graphic Design", description: "Creative visual designs and branding." },
    { icon: <Video />, title: "Video Production", description: "High-quality video content and editing." },
    { icon: <BarChart />, title: "Digital Marketing", description: "Strategic marketing to boost online presence." },
    { icon: <Cloud />, title: "Cloud & IT Support", description: "Reliable cloud infrastructure and support." },
    { icon: <GraduationCap />, title: "Training", description: "Corporate training and skill development." },
  ];

  const teamMembers = [
    {
      name: "ADARSH SINGH",
      role: "Director & Strategic Marketing Manager",
      bio: "Visionary leader with expertise in strategic marketing and business growth. Drives brand positioning, partnerships, and long-term expansion strategy.",
      image: "https://picsum.photos/seed/adarsh/400/400"
    },
    {
      name: "MOHAN PRAKASH",
      role: "Research & Training Head",
      bio: "Specialist in research-driven insights and professional training programs. Ensures knowledge development and industry-aligned skill enhancement.",
      image: "https://picsum.photos/seed/mohan/400/400"
    },
    {
      name: "GULSHAN KUMAR",
      role: "Technical Lead – AI & Full Stack Developer",
      bio: "Leads AI solutions and full-stack development projects. Expert in scalable architectures, modern web technologies, and intelligent systems.",
      image: "https://picsum.photos/seed/gulshan/400/400"
    },
    {
      name: "PRITI KUMARI",
      role: "Full Stack Developer",
      bio: "Passionate developer focused on creating seamless front-end and back-end experiences with modern frameworks and clean code practices.",
      image: "https://picsum.photos/seed/priti/400/400"
    },
    
    {
      name: "MD AWESH",
      role: "Full Stack Developer",
      bio: "Dedicated developer specializing in responsive UI design and robust backend integration. Focused on performance-driven applications.",
      image: "https://picsum.photos/seed/awesh/400/400"
    },

    {
      name: "ROHIT SINGH",
      role: "Database Administrator",
      bio: "Responsible for database architecture, performance optimization, and secure data management ensuring high system reliability.",
      image: "https://picsum.photos/seed/rohit/400/400"
    },
   
    {
      name: "SURRENDER RAVI DAS",
      role: "Counsellor",
      bio: "Provides career guidance and professional mentorship, helping individuals make informed decisions and achieve growth.",
      image: "https://picsum.photos/seed/surrender/400/400"
    },
    {
      name: "VIJAY KUMAR",
      role: "Business Development Manager",
      bio: "Drives client acquisition, partnerships, and revenue growth strategies to expand business opportunities and market presence.",
      image: "https://picsum.photos/seed/vijay/400/400"
    }
  ];

  const whyChooseUs = [
    {
      title: "Mentorship",
      description: "Personalized guidance from experienced mentors to help students stay on the right career path.",
      icon: <UserCheck size={24} />
    },
    {
      title: "CRT",
      description: "Structured training programs to prepare students for aptitude tests, interviews, and placement drives.",
      icon: <GraduationCap size={24} />
    },
    {
      title: "Resume Building",
      description: "Professional, ATS-friendly resume creation that highlights skills and achievements effectively.",
      icon: <FileText size={24} />
    },
    {
      title: "Discipline",
      description: "Encouraging punctuality and professional behavior to prepare students for corporate environments.",
      icon: <Clock size={24} />
    },
    {
      title: "Personality Development",
      description: "Sessions focused on communication skills, confidence building, body language, and interview presentation.",
      icon: <Sparkles size={24} />
    },
    {
      title: "100% Placement Assistance",
      description: "Complete placement support including mock interviews, job referrals, and company connections.",
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-blue-200 bg-white text-blue-700">
              About BN IntelHub Pvt Ltd
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Empowering Innovation. <br />
              <span className="text-blue-600">Building Digital Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              BN IntelHub Pvt Ltd is a technology-driven company dedicated to providing cutting-edge digital solutions. 
              From website development and web applications to IT services and digital consulting, we empower businesses 
              to thrive in the digital age.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Who We Are */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3" />
                <img 
                  src="https://picsum.photos/seed/office-meeting/800/600" 
                  alt="Team Meeting" 
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-10"
            >
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Who We Are</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We are a team of passionate technologists and creative thinkers committed to delivering excellence. 
                As a reliable and client-focused partner, we pride ourselves on our innovative approach and 
                unwavering commitment to quality. We don't just build software; we build lasting relationships 
                and digital experiences that drive real business results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600 text-sm">
                    To simplify technology and provide impactful digital solutions that solve real-world problems.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600 text-sm">
                    To become a trusted digital partner across India, known for innovation and integrity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Core Services */}
      <SectionWrapper background="light" className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business with modern technology and strategic innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="group h-full bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 relative overflow-hidden text-center md:text-left">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center md:items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-0">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper background="white">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the passionate professionals driving innovation, strategy, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative bg-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-3">{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Why Choose Us & CTA */}
      <SectionWrapper background="default" className="bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900">
              Why Choose <span className="text-indigo-600">BN IntelHub?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are committed to providing the best learning experience and career opportunities for our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full p-8 text-center transition-all duration-300 border-slate-100 shadow-sm hover:shadow-xl group">
                  <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Ready to Kickstart Your Career?</h3>
            <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
              Join our programs and get the edge you need to succeed in the tech industry. 
              Let's build your future together.
            </p>
            <PrimaryButton 
              className="px-8 py-4 text-lg bg-indigo-600 text-white hover:bg-indigo-700 border-none shadow-lg shadow-indigo-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch <ArrowRight className="ml-2" />
            </PrimaryButton>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
