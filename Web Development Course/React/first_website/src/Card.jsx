import MyButton from "./MyButton";


const Card = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Smart Watch Pro",
      description: "Track fitness, heart rate, and notifications in style.",
      price: "$129.99",
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Wireless Headphones",
      description: "Noise-cancelling headphones with premium sound quality.",
      price: "$89.99",
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      title: "Camera Lens",
      description: "Professional lens for stunning photography.",
      price: "$249.99",
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      title: "Running Shoes",
      description: "Lightweight shoes designed for comfort and performance.",
      price: "$69.99",
    },
    {
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "DSLR Camera",
      description: "Capture moments with high-quality imaging.",
      price: "$599.99",
    },
    {
      image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa",
      title: "Sunglasses",
      description: "Stylish sunglasses with full UV protection.",
      price: "$29.99",
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Sneakers",
      description: "Everyday sneakers with a modern look.",
      price: "$54.99",
    },
    {
      image: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0",
      title: "Backpack",
      description: "Minimal backpack for work and travel.",
      price: "$44.99",
    },
    {
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      title: "Laptop Stand",
      description: "Improve posture with this ergonomic stand.",
      price: "$34.99",
    },
    {
      image: "https://images.unsplash.com/photo-1518441902113-c1d33cd53f11",
      title: "Mechanical Keyboard",
      description: "Tactile keys with premium build quality.",
      price: "$99.99",
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      title: "Gaming Mouse",
      description: "High precision mouse for gamers and creators.",
      price: "$39.99",
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      title: "Desk Lamp",
      description: "Modern LED lamp with adjustable brightness.",
      price: "$24.99",
    },
  ];

  return (
    <div className="card-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img
            className="card-image"
            src={product.image}
            alt={product.title}
          />

          <div className="card-content">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-description">{product.description}</p>

            <div className="card-footer">
              <h2 className="card-price">{product.price}</h2>
              <MyButton text="Buy Now"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
