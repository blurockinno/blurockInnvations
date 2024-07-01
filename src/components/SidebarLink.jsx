import { Link } from 'react-router-dom';

const SidebarLink = ({ to, icon, text,  handleOnOpenTab}) => {
  return (
    <button
      to={to}
      onClick={handleOnOpenTab}
      className="flex items-center p-2 my-2 text-black hover:bg-blue-700 hover:text-white rounded transition duration-200"
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SidebarLink;
