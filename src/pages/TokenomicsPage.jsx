import tokenomics from "../assets/tokenomics.png";

function TokenomicsPage({ onBack }) {
  return (
    <main className="tokenomics-page">
      <button className="tokenomics-back-btn" onClick={onBack}>
        ←
      </button>

      <img
        src={tokenomics}
        alt="Tokenomics"
        className="tokenomics-title-img"
      />

      <section className="tokenomics-content">
        {/* Add Tokenomics content here later */}
      </section>
    </main>
  );
}

export default TokenomicsPage;