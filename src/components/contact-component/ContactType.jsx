const ContactType = ({ icon, title, description }) => {
  return (
    <div className="plus-jakarta-sans max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 group">
      <div className="flex items-center p-4">
        <div className="bg-gray-200 group-hover:bg-[#146ef5] group-hover:text-white rounded-md p-4 h-12 w-12 flex items-center justify-center">
          {icon}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-[#141415] group-hover:text-[#146ef5]">{title}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactType;
