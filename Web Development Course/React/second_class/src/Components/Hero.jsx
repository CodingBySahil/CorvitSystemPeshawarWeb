import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Apni <span>Website</span> Ko Next Level Par Le Jao
          </h1>
          <p>
            Modern design, fast performance aur responsive layout —
            sab kuch React aur simple CSS ke sath.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
