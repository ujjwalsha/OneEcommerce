const ProductList = ({ products }) => {
  return (
    <div className="grid text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-md hover:shadow-xl transition dark:bg-gray-800 flex flex-col"
        >
          {/* Product Image */}
          <img
            className="rounded-t-xl w-full h-48 object-cover"
            src={product.imageUrl || "https://placehold.co/600x400"}
            alt={product.name}
          />

          {/* Product Info */}
          <div className="p-4 flex-1">
            <h5 className="text-lg font-semibold">{product.name}</h5>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between p-4 border-t">
            <p className="text-lg font-bold text-green-600">${product.price}</p>
            <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;