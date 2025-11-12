import React from "react";
import { Link } from "react-router";
import fIcon from "../assets/facebook.png";
import xIcon from "../assets/x.png";
import inIcon from "../assets/in.png";
import eIcon from "../assets/mail.png"



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8ed6a1] to-[#356a59] text-white pt-10 mt-16">
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-8  text-center md:text-left">


        <div className="w-full md:w-1/3">
          <div>
            <div className="navbar-start flex items-center relative text-white">
              <img src="https://i.ibb.co.com/JRT4DXCK/Adobe-Express-file.png" alt="FinEase Logo" className="w-12 h-12 rounded-full" />
              <Link to="/" className="text-2xl font-bold text-[#1C352D] absolute left-7">
                <span className="text-[#61839B]">Fin</span>Ease
              </Link>
            </div>
            <p className="text-sm opacity-80">
              Simplify your personal finance management. Track income, expenses,
              and plan your financial goals smartly.
            </p>
          </div>



        </div>
        <div className=" grid grid-cols-3 ml-4  gap-5 w-full md:w-2/3">
          <div>
            <h3 className="text-lg font-bold mb-3 text-[#1C352D]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#5C7AEA]">Home</Link></li>
              <li><Link to="/terms" className="hover:text-[#5C7AEA]">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#5C7AEA]">Privacy policy</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="text-lg  mb-3 text-[#1C352D] font-bold">Contact Us</h3>
            <p className="text-sm">Email: support@finease.com</p>
            <p className="text-sm">Phone: +880 1234 567 890</p>
            <p className="text-sm">Address: Dhaka, Bangladesh</p>
          </div>

          
          <div>
            <h3 className="text-lg  mb-3 text-[#1C352D] font-bold">Connect With Us </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-gray-200 ml-2"><img src={fIcon} alt="" /></a>
              <a href="#" className="hover:text-gray-200"><img src={xIcon} alt="" className="bg-white rounded-[50%] w-5 h-5 p-0.5" /></a>
              <a href="#" className="hover:text-gray-200"><img src={inIcon} alt="" /></a>
              <a href="mailto:info@finease.com" className="hover:text-gray-200"><img src={eIcon} alt="" /></a>
            </div>
          </div>
          

        </div>

      </div>

      
      <div className="border-t border-white/20 mt-8 pt-5 text-center text-sm opacity-70 bg-[#1C352D] py-5">
        © {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
