const CompanyListSection = () => {
  const companies = ["Blurock Wealth", "Blurock"];
  return (
    <div className="bg-[#141415] plus-jakarta-sans">
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-10 p-6 md:p-12">
        {companies.map((company, index) => (
          <li key={index} className="text-gray-400 hover:text-white text-xl md:text-3xl font-bold">
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyListSection;
