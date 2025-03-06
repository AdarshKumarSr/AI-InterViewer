import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-24">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Ninja Interviewer</h2>
          <p className="text-base">Empowering careers with AI-driven solutions.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-base">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-white transition-colors">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://github.com/AdarshKumarSr/AI-InterViewer" className="hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section (Aligned to Right) */}
      <div className="container mx-auto px-8 mt-6 flex justify-end">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
