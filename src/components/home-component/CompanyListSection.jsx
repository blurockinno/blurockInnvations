import blruock from "/assets/clientscompany_logo/blurock wealth.png";
import aaf from "/assets/clientscompany_logo/aquaagrofarmtech_logo.png";
const CompanyListSection = () => {
  const companies = [
    { name: "Blurock Wealth", image: blruock },
    { name: "Aqua Agro Farmtech", image: aaf },
  ];

  return (
    <div className="bg-[#141415] plus-jakarta-sans">
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-10 p-6 md:p-12">
        {companies.map((company, index) => (
          <li
            key={index}
            className="text-gray-400 hover:text-white text-xl md:text-3xl font-bold"
          >
            <img
              src={company.image}
              alt={company.name}
              className="h-10 md:h-20 opacity-40 hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyListSection;
