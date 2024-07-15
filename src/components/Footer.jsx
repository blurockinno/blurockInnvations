import {
  Facebook,
  Instagram,
  LinkedinIcon,
  Twitter,
  Youtube,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-auto bg-[#141415] text-white plus-jakarta-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-20 ">
          {/* Services Section */}
          <div className="mb-4 flex flex-col ">
            <h3 className="text-lg font-bold mb-2">Blurock Innovation</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className=" text-justify">
                  Blurock innovation always open door to a realm of limitless
                  possibilities, where imagination knows no bounds.
                </a>
              </li>
            </ul>
          </div>

          {/* More Information Section */}
          <div className="mb-4 flex flex-col md:pl-10">
            <h3 className="text-lg font-bold mb-2">More Information</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Knowledge Base Section */}
          <div className="mb-4 flex flex-col md:pl-10">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="mb-4 flex flex-col ">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Joshi Nagar, Ludhiana, Punjab, India
                </a>
              </li>
              <li className="mb-2">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "0",
                    paddingBottom: "30%",
                  }}
                >
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.906230091628!2d75.81029097465446!3d30.91724507669361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a810423f72b61%3A0x6dc83aeace8a2e30!2sBluRock%20Wealth!5e0!3m2!1sen!2sin!4v1720685912215!5m2!1sen!2sin"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex mb-4 md:mb-0 space-x-4">
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              <YoutubeIcon />
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              <Twitter />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2024 Blurock Infinity Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
