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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap ">
          {/* Services Section */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Website Designing & Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Digital Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Android Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  IOS Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Software Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Graphic Designing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  SPN Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Website Maintenance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Consulting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Cybersecurity
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Domain
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Web Security
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Networking
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Industries</h3>
            <ul>
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
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">More Information</h3>
            <ul>
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
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Knowledge Base</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Articles
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Tutorials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Guides
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
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
