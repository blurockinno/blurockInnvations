const CompanyListSection = () => {
  const companies = ["Blurock Wealth", "Blurock"];
  return (
    <div className="bg-[#141415] plus-jakarta-sans">
      <ul className="flex items-center justify-center gap-10 p-12">
        {companies.map((company, index) => (
          <>
            <li key={index} className="text-gray-400 hover:text-white text-3xl font-bold">{company}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CompanyListSection;
