import React from "react";

function Card() {
  const data = [
    {
      id: 1,
      title: "Mechanical Keyboard",
      description: "RGB Backlit Mechanical Keyboard",
      imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      price: 99,
      discount: 79,
      rating: 4.5,
      category: "Accessories",
    },
    {
      id: 2,
      title: "Wireless Mouse",
      description: "Ergonomic Wireless Mouse",
      imgUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      price: 49,
      discount: 39,
      rating: 4.2,
      category: "Accessories",
    },
    {
      id: 3,
      title: "4K Monitor",
      description: "27 inch Ultra HD Monitor",
      imgUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      price: 399,
      discount: 349,
      rating: 4.8,
      category: "Display",
    },
    {
      id: 4,
      title: "Gaming Headset",
      description: "Surround Sound Gaming Headset",
      imgUrl: "https://images.unsplash.com/photo-1599669454699-248893623440",
      price: 89,
      discount: 69,
      rating: 4.4,
      category: "Audio",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛒 Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={product.imgUrl}
              alt={product.title}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <span className="text-sm text-blue-600 font-semibold">
                {product.category}
              </span>

              <h2 className="text-xl font-bold mt-1">
                {product.title}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  ⭐ {product.rating}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-lg font-bold text-green-600">
                  ${product.discount}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${product.price}
                </span>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Buy Now
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
