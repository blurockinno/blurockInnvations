const SoftwareProductCard = ({ product }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl"></span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Open now
          </button>
        </div>
      </div>
    </>
  );
};

export default SoftwareProductCard;
