import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface InternshipEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternshipEnquiryModal({ isOpen, onClose }: InternshipEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    coursePursuing: '',
    semesterYear: '',
    internshipProgram: '',
    skills: [] as string[],
    skillLevel: 'Beginner',
    mobile: '',
    email: ''
  });

  const internshipPrograms = [
    "Web Development",
    "Android Development",
    "Data Science",
    "Cyber Security",
    "Robotics",
    "Big Data",
    "IOT",
    "Full-Stack AI",
    "Basic IT & Computer Skills",
    "Digital Marketing",
    "Business Tools",
    "Data & Analytics",
    "Sales & Business Development",
    "Corporate Skills"
  ];

  const availableSkills = [
    "HTML/CSS", "JavaScript", "React", "Node.js", "Python", "Java", 
    "C++", "SQL", "NoSQL", "Machine Learning", "Data Analysis", 
    "Communication", "Management", "Marketing"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => {
      const newSkills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: newSkills };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfFU9ELToIDCTEchFcl70CsfuecshMKe2dTR6quilIAYzoxiQ/formResponse';
    const data = new FormData();
    
    data.append('entry.93460687', formData.name);
    data.append('entry.785676091', formData.mobile);
    data.append('entry.1103193996', formData.email);
    data.append('entry.1218686871', formData.collegeName);
    data.append('entry.1169183239', formData.coursePursuing);
    data.append('entry.1577804395', formData.semesterYear);
    // Google Form: Internship Program
    data.append('entry.598370382', formData.internshipProgram);
    
    // Google Form: Skills (checkboxes)
    formData.skills.forEach(skill => {
        data.append('entry.508063717', skill);
    });
    
    // Google Form: Skill Level
    data.append('entry.1964319436', formData.skillLevel);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      
      alert('Application submitted successfully!');
      onClose();
      setFormData({
        name: '',
        collegeName: '',
        coursePursuing: '',
        semesterYear: '',
        internshipProgram: '',
        skills: [],
        skillLevel: 'Beginner',
        mobile: '',
        email: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-slate-900">Internship Application</h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} className="text-slate-500" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Academic Details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  required
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="University/College Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Course Pursuing</label>
                  <input
                    type="text"
                    name="coursePursuing"
                    required
                    value={formData.coursePursuing}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="B.Tech, BCA, MBA..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Semester / Year</label>
                  <input
                    type="text"
                    name="semesterYear"
                    required
                    value={formData.semesterYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="e.g. 6th Sem / 3rd Year"
                  />
                </div>
              </div>

              {/* Internship Details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Internship Program</label>
                <select
                  name="internshipProgram"
                  required
                  value={formData.internshipProgram}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option value="">Select Program</option>
                  {internshipPrograms.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Skills (Select multiple)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-3 border border-slate-200 rounded-xl max-h-40 overflow-y-auto">
                  {availableSkills.map(skill => (
                    <label key={skill} className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-slate-50 rounded">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.skills.includes(skill) ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
                        {formData.skills.includes(skill) && <Check size={12} className="text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                      />
                      <span className="text-sm text-slate-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Skill Level</label>
                <select
                  name="skillLevel"
                  required
                  value={formData.skillLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
