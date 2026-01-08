import Navbar from "./Navbar";
import cozystayHome from "../assets/cozystayHome.png";

function HeroSection() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cozystayHome})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"  // important for absolute navbar
      }}
    >
      <Navbar />

      <div className="hero-content">
        <h1 style={{fontSize: 64}}>Boutique Private Island Resort</h1>
        <p>The seaside haven of warmth, tranquility and restoration</p>
      </div>
    </div>
  );
}


export default HeroSection;
