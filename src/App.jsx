import { useState } from "react";
import "./App.css";

import firstPage from "./assets/first-page.svg";
import snekkyBg from "./assets/snekky-bg.png";
import mascot from "./assets/mascot.png";
import snekkyLogo from "./assets/snekky-logo.png";
import aboutUs from "./assets/aboutus.png";
import JoinPage from "./pages/JoinPage";
import TokenomicsPage from "./pages/TokenomicsPage";

function App() {
  const [showSnekky, setShowSnekky] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [page, setPage] = useState("home");
  const [logoExpand, setLogoExpand] = useState(false);

  const handleFirstPageClick = () => {
    setIsLeaving(true);

    setTimeout(() => {
      setShowSnekky(true);
    }, 900);
  };

  const handleLogoClick = () => {
    setLogoExpand(true);

    setTimeout(() => {
      setPage("about");
      setLogoExpand(false);
    }, 850);
  };

  return (
    <main className="app">
      {!showSnekky && (
        <section
          className={`first-page ${isLeaving ? "first-page-exit" : ""}`}
          onClick={handleFirstPageClick}
        >
          <img src={firstPage} alt="Snekky First Page" />
        </section>
      )}

      {showSnekky && page === "home" && (
        <section className="snekky-scene">
          <button
            className={`corner-logo ${logoExpand ? "logo-expand" : ""}`}
            onClick={handleLogoClick}
          >
            <img src={snekkyLogo} alt="Snekky Logo" />
          </button>

          <img src={snekkyBg} alt="Snekky Background" className="scene-bg" />

          <button
            type="button"
            className="mascot-wrapper mascot-clickable"
            onClick={() => setPage("join")}
          >
  <img src={mascot} alt="Snekky Mascot" className="mascot" />
  <span className="click-label">Click Here</span>
</button>

          <h1 className="main-text">REACH FOR THE SNEKKY !</h1>
        </section>
      )}

      {showSnekky && page === "about" && (
  <section className="about-image-page">
    <img src={aboutUs} alt="About Us" className="about-us-image" />

    <button
      className="about-image-back-btn"
      onClick={() => setPage("home")}
      aria-label="Back to home"
    ></button>
  </section>
)}
{showSnekky && page === "join" && (
  <JoinPage
    onBack={() => setPage("home")}
    onTokenomicsClick={() => setPage("tokenomics")}
  />
)}
{showSnekky && page === "tokenomics" && (
  <TokenomicsPage onBack={() => setPage("join")} />
)}
    </main>
  );
}

export default App;