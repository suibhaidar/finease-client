import React from "react";
import { Link } from "react-router";
import fIcon from "../assets/facebook.png";
import xIcon from "../assets/x.png";
import inIcon from "../assets/in.png";
import eIcon from "../assets/mail.png";
import logoImg from "../assets/Adobe Express - file (1).png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0d193e] to-[#578dab] text-white pt-10 mt-16">
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-8 text-center md:text-left">

        {/* Logo & Description */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start ">
          <div className="flex items-center mr-16  relative">
            <img
              src={logoImg}
              alt="FinEase Logo"
              className="w-18 h-18 rounded-full"
            />
            <Link to="/" className="text-2xl font-bold text-[#0F1D46] absolute left-12">
              <span className="text-secondary">Fin</span>Ease
            </Link>
          </div>
          <p className="text-sm opacity-80 max-w-xs md:max-w-full ml-5">
            Simplify your personal finance management. Track income, expenses,
            and plan your financial goals smartly.
          </p>
        </div>

        
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-5 md:ml-4">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-[#0F1D46]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#5C7AEA]">Home</Link></li>
              <li><Link to="/terms" className="hover:text-[#5C7AEA]">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#5C7AEA]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-[#0F1D46]">Contact Us</h3>
            <p className="text-sm">Email: support@finease.com</p>
            <p className="text-sm">Phone: +880 1234 567 890</p>
            <p className="text-sm">Address: Dhaka, Bangladesh</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-[#0F1D46]">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:opacity-80 transition duration-200 ml-2">
                <img src={fIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition duration-200">
                <img src={xIcon} alt="X" className="bg-white rounded-full w-5 h-5 p-0.5" />
              </a>
              <a href="#" className="hover:opacity-80 transition duration-200">
                <img src={inIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="mailto:info@finease.com" className="hover:opacity-80 transition duration-200">
                <img src={eIcon} alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      
      <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm text-opacity-70 bg-[#0c1739] py-5">
        © {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
