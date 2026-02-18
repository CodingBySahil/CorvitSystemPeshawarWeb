import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const fetchSingleProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setActiveImage(data.thumbnail);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl mt-20">Loading Product...</div>;
  }

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* LEFT SIDE - IMAGE GALLERY */}
      <div>
        <img
          src={activeImage}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-xl shadow"
        />

        <div className="flex gap-3 mt-4">
          {[product.thumbnail, ...product.images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="preview"
              onClick={() => setActiveImage(img)}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - PRODUCT INFO */}
      <div className="space-y-4">

        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-500">{product.description}</p>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-green-600">
            ${discountedPrice}
          </span>
          <span className="line-through text-gray-400">
            ${product.price}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
            {product.discountPercentage}% OFF
          </span>
        </div>

        <div className="flex gap-5 text-sm">
          <span>⭐ Rating: {product.rating}</span>
          <span>📦 Stock: {product.stock}</span>
          <span>🏷 Brand: {product.brand}</span>
        </div>

        <div>
          <span className="font-semibold">Category:</span> {product.category}
        </div>

        <div>
          <span className="font-semibold">Availability:</span>{" "}
          <span className="text-green-600">{product.availabilityStatus}</span>
        </div>

        <div>
          <span className="font-semibold">Warranty:</span>{" "}
          {product.warrantyInformation}
        </div>

        <div>
          <span className="font-semibold">Shipping:</span>{" "}
          {product.shippingInformation}
        </div>

        <div>
          <span className="font-semibold">SKU:</span> {product.sku}
        </div>

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap">
          {product.tags.map((tag, i) => (
            <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* DIMENSIONS */}
        <div className="bg-gray-50 p-4 rounded-lg text-sm">
          <h3 className="font-semibold mb-2">Dimensions</h3>
          <p>Width: {product.dimensions.width} cm</p>
          <p>Height: {product.dimensions.height} cm</p>
          <p>Depth: {product.dimensions.depth} cm</p>
          <p>Weight: {product.weight} g</p>
        </div>

        {/* META */}
        <div className="bg-gray-50 p-4 rounded-lg text-sm">
          <h3 className="font-semibold mb-2">Product Meta</h3>
          <p>Barcode: {product.meta.barcode}</p>
          <img src={product.meta.qrCode} alt="QR" className="w-20 mt-2"/>
        </div>

      </div>

      {/* REVIEWS SECTION */}
      <div className="md:col-span-2 mt-10">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        {product.reviews.map((review, i) => (
          <div key={i} className="border p-4 rounded-lg mb-3">
            <div className="flex justify-between">
              <h4 className="font-semibold">{review.reviewerName}</h4>
              <span>⭐ {review.rating}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <small className="text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
