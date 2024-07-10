import {
  Facebook,
  Instagram,
  LinkedinIcon,
  X,
  Youtube,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#141415] text-white plus-jakarta-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="flex px-40 gap-10">
          {/* Services Section */}
          <div className="w-full md:w-1/4 mb-4  flex items-start flex-col">
            <h3 className="text-lg font-bold mb-2">Blurock Innovation</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Blurock innovation always open door to a realm of limitless
                  posibilities, where imagination knows no bounds.
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="w-full md:w-1/4 mb-4  flex items-start flex-col">
            <h3 className="text-lg font-bold mb-2">Industries</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Consumer Goods and Distribution
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Media, and Information Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* More Information Section */}
          <div className="w-full md:w-1/4 mb-4  flex items-start flex-col">
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
          <div className="w-full md:w-1/4 mb-4 flex items-start flex-col">
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
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
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
              <X />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2024 Blurock Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
