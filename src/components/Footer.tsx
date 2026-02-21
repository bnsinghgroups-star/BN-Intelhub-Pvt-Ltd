import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { InputField } from './ui/InputField';
import { PrimaryButton } from './ui/Buttons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
           <img
  src="/logoWhite.png"
  alt="BN IntelHub Pvt Ltd Logo"
  className="h-12.5 w-auto object-contain"
/>  
            </div>
           
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              A premier EdTech and Software Development company committed to bridging the gap between academia and industry through world-class training and innovative software solutions.
            </p>
           <div className="flex gap-4 mb-8">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/bn_intel_hub"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500"
  >
    <Instagram size={20} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61575484154751"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-blue-600"
  >
    <Facebook size={20} />
  </a>

  {/* Twitter (Future) */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-sky-500"
  >
    <Twitter size={20} />
  </a>

  {/* LinkedIn (Future) */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-blue-700"
  >
    <Linkedin size={20} />
  </a>

</div>
            
            <div className="max-w-md">
              <h5 className="text-white font-bold mb-3">Subscribe to our newsletter</h5>
              <div className="flex gap-2">
                <InputField placeholder="Enter your email" className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
                <PrimaryButton className="px-6 py-2 text-sm bg-blue-600 hover:bg-blue-700 border-none" icon={<ArrowRight size={16} />}>
                  Subscribe
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Development Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

       <div>
  <h4 className="text-white font-bold mb-6">Contact Us</h4>

  <ul className="space-y-4 text-slate-400">

    {/* Address - Opens Google Maps */}
    <li className="flex items-start gap-3">
      <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
      <a
        href="https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Namkum+Ranchi+834010"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        STPI- Plot -8 Part, Namkum <br />
        Industrial Area, Namkum Ranchi - 834010
      </a>
    </li>

    {/* Phone - Direct Call */}
    <li className="flex items-center gap-3">
      <Phone size={20} className="text-blue-500 flex-shrink-0" />
      <a
        href="tel:+918936078905"
        className="hover:text-white transition"
      >
        +91 8936078905
      </a>
    </li>

    {/* Email - Opens Mail App */}
    <li className="flex items-center gap-3">
      <Mail size={20} className="text-blue-500 flex-shrink-0" />
      <a
        href="mailto:bnintelhub@gmail.com"
        className="hover:text-white transition"
      >
        bnintelhub@gmail.com
      </a>
    </li>
     <li className="flex items-center gap-3">
      <Mail size={20} className="text-blue-500 flex-shrink-0" />
      <a
        href="mailto:bnintelhub.services@gmail.com"
        className="hover:text-white transition"
      >
        bnintelhub.services@gmail.com
      </a>
    </li>

  </ul>
</div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BN Intelhub Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
           <a
  href="https://www.google.com/maps?q=23.355697200518126,85.35947142846608"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  View on Map
</a>  <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
