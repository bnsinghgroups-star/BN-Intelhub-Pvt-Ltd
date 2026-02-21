import { motion } from 'motion/react';
import { Target, Lightbulb, Globe, Code, Smartphone, BarChart, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionWrapper, Container } from '../components/ui/Layout';
import { Badge } from '../components/ui/Badge';
import { PrimaryButton } from '../components/ui/Buttons';
import { Card } from '../components/ui/Cards';

export default function About() {
  const services = [
    { icon: <Globe />, title: "Website Development", description: "Custom, responsive, and SEO-friendly websites tailored to your brand." },
    { icon: <Code />, title: "Web Application Development", description: "Scalable and robust web applications built with modern technologies." },
    { icon: <BarChart />, title: "Digital Marketing", description: "Strategic marketing solutions to boost your online presence and growth." },
    { icon: <Lightbulb />, title: "IT Consulting", description: "Expert guidance to help you navigate the complex digital landscape." },
    { icon: <Shield />, title: "Technical Support", description: "Reliable support and maintenance to ensure your systems run smoothly." },
  ];

  const directors = [
    {
      name: "	ADARSH SINGH",
      role: "Director",
      bio: "A visionary leader with extensive experience in technology and business strategy, driving innovation and excellence at BN IntelHub.",
      image: "https://picsum.photos/seed/director1/400/400"
    },
    {
      name: "GULSHAN KUMAR",
      role: "Director",
      bio: "Dedicated to delivering quality and value, ensuring client satisfaction through strategic planning and execution.",
      image: "https://picsum.photos/seed/director2/400/400"
    },
    {
      name: "	MOHAN PRAKASH",
      role: "Director",
      bio: "Driven by strategy, powered by execution, and committed to delivering real value with complete client satisfaction.",
      image: "/direct3.png"
    }
  ];

  const whyChooseUs = [
    "Unmatched Professionalism",
    "Timely Project Delivery",
    "Client-Centric Approach",
    "Affordable & Transparent Pricing",
    "Dedicated Technical Support"
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
      <SectionWrapper background="light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8 hover:border-blue-200 transition-colors">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>


    {/* Leadership Team */}
<SectionWrapper background="white">
  <Container>
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">
        Leadership Team
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Meet the visionaries guiding BN IntelHub towards excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {directors.map((director, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
        >
          <div className="w-44 h-44 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-6 scale-105" />
            <img
              src={director.image}
              alt={director.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {director.name}
          </h3>

          <p className="text-blue-600 font-medium mb-4">
            {director.role}
          </p>

          <p className="text-slate-600 italic leading-relaxed">
            "{director.bio}"
          </p>
        </motion.div>
      ))}
    </div>
  </Container>
</SectionWrapper>

      {/* Why Choose Us & CTA */}
      <SectionWrapper background="default" className="bg-slate-900 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Why Choose Us?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <CheckCircle size={18} />
                    </div>
                    <span className="text-lg font-medium text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Let's collaborate to build digital solutions that drive growth and innovation. 
                Contact us today to start your journey.
              </p>
              <PrimaryButton 
                className="w-full justify-center bg-white text-blue-700 hover:bg-blue-50 border-none text-lg py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch <ArrowRight className="ml-2" />
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
