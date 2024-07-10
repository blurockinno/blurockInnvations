import { motion } from 'framer-motion';
import { Facebook, Twitter,  Instagram, Linkedin } from 'lucide-react';

const ProfileCard = ({ image, name, designation, social }) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: 1 }}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out"
    >
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-full h-68 rounded-md mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500 mb-4">{designation}</p>
      <div className="flex space-x-3">
        {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer"><Facebook className="text-blue-600 hover:text-blue-800" /></a>}
        {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer"><Twitter className="text-blue-400 hover:text-blue-600" /></a>}
        {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="text-blue-700 hover:text-blue-900" /></a>}
        {social.instagram && <a href={social.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="text-pink-500 hover:text-pink-700" /></a>}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
