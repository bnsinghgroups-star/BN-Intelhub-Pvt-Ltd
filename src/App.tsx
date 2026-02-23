/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import InternshipPage from './pages/InternshipPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<About />} />
             <Route path="/services" element={<ServicesPage />} />
              <Route path="/internships" element={<InternshipPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
