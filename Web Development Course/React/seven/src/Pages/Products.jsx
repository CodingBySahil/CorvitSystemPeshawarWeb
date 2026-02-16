import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-10">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
        Explore Our Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden hover:-translate-y-2"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl"></div>

            {/* Image */}
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="relative p-6 space-y-3">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                {product.title}
              </h3>

              {/* Brand & Category */}
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                  {product.brand}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                  {product.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {product.description}
              </p>

              {/* Price + Discount */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  ${product.price}
                </p>
                <span className="text-sm px-2 py-1 rounded-full bg-red-100 text-red-500 font-semibold">
                  -{product.discountPercentage}%
                </span>
              </div>

              {/* Rating + Stock */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-yellow-500 font-semibold flex items-center gap-1">
                  ⭐ {product.rating}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    product.stock > 0
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3"></div>

              {/* Extra Info */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                <p>
                  <span className="font-semibold">SKU:</span> {product.sku}
                </p>
                <p>
                  <span className="font-semibold">Weight:</span>{" "}
                  {product.weight}g
                </p>
                <p>
                  <span className="font-semibold">Size:</span>{" "}
                  {product.dimensions?.width} x {product.dimensions?.height}
                </p>
                <p>
                  <span className="font-semibold">Min:</span>{" "}
                  {product.minimumOrderQuantity}
                </p>
              </div>

              {/* Reviews */}
              <div className="pt-3 flex justify-between items-center">
                <p className="text-xs text-blue-600 font-semibold">
                  {product.reviews?.length} Reviews
                </p>

                <button className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500 transition shadow-md">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
