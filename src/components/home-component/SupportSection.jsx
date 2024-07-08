const SupportSection = () => {
  return (
    <section className="bg-gray-900 text-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="p-6 rounded-lg  text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Need Support?</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">
              <a href="tel:+1234567890">+91-6200932331</a>
            </p>
            <p className="text-lg text-gray-100">Available Mon-Fri, 9am-5pm.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
