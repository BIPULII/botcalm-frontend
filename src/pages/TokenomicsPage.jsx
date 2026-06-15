import tokenomics from "../assets/tokenomics.png";
import tokenomicsDetails from "../assets/tokenomics-details.png";
import tokenBand1 from "../assets/token-band-1.png";
import tokenBand2 from "../assets/token-band-2.png";

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

      {/* Upper band on black background */}
      <div className="token-band token-band-black">
        <div className="token-band-track move-left">
          <img src={tokenBand1} alt="" />
          <img src={tokenBand1} alt="" />
        </div>
      </div>

      <div className="tokenomics-details-wrap">
        <img
          src={tokenomicsDetails}
          alt="Tokenomics Details"
          className="tokenomics-details-img"
        />

        {/* Lower band on yellow details image */}
        <div className="token-band token-band-bottom">
          <div className="token-band-track move-right">
            <img src={tokenBand2} alt="" />
            <img src={tokenBand2} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TokenomicsPage;