import tokenomics from "../assets/tokenomics.png";
import tokenomicsDetails from "../assets/tokenomics-details.png";
import tokenBand1 from "../assets/token-band-1.png";
import tokenBand2 from "../assets/token-band-2.png";
import tokenomicsCards from "../assets/tokenomics-cards.png";

import aiCreator from "../assets/ai-creator.png";
import ethStaking from "../assets/eth-staking.png";
import missionSolana from "../assets/mission-solana.png";
import metaverseVideo from "../assets/metaverse-video.mp4";
import rufusImage from "../assets/rufus-l2.png";
import CommunitySection from "./CommunitySection";

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

      <div className="tokenomics-details-wrap">
        <img
          src={tokenomicsDetails}
          alt="Tokenomics Details"
          className="tokenomics-details-img"
        />

        <div className="token-band token-band-under-cards">
          <div className="token-band-track move-left">
            <img src={tokenBand1} alt="" />
            <img src={tokenBand1} alt="" />
          </div>
        </div>

        <div className="token-band token-band-bottom">
          <div className="token-band-track move-right">
            <img src={tokenBand2} alt="" />
            <img src={tokenBand2} alt="" />
          </div>
        </div>

        <img
          src={tokenomicsCards}
          alt="Tokenomics Cards"
          className="tokenomics-cards-img"
        />
      </div>

      <section className="token-tools-section">
        <div className="token-tool-card">
          <div className="token-tool-img-box">
            <img src={aiCreator} alt="AI Creator" />
            <span className="tool-badge">AI<br />CREATOR</span>
          </div>

          <div className="token-tool-info">
            <p>
              Imagine any scene of Snekky Mars to help him explore the vast univers...
            </p>
            <button>TRY IT OUT</button>
          </div>
        </div>

        <div className="token-tool-card">
          <div className="token-tool-img-box">
            <img src={ethStaking} alt="ETH Staking" />
          </div>

          <div className="token-tool-info">
            <p>Stake your ETH to earn more</p>
            <button>GET STARTED</button>
          </div>
        </div>

        <div className="token-tool-card">
          <div className="token-tool-img-box">
            <img src={missionSolana} alt="Mission Solana" />
          </div>

          <div className="token-tool-info">
            <p>
              Bridge your $ELON tokens to and from the Solana blockchain
            </p>
            <button>GET STARTED</button>
          </div>
        </div>
      </section>
      <section className="metaverse-section">
  <div className="metaverse-row">
    <div className="metaverse-media-box">
      <video
        src={metaverseVideo}
        className="metaverse-video"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <span className="status-badge coming-soon">COMING SOON</span>
    </div>

    <div className="metaverse-info-box">
      <h2>SNEKKY METAVERSE</h2>

      <p>
        Stake your $ELON tokens to get land on Mars. Build and earn while
        playing the online multiplayer mission with friends.
      </p>

      <button>LEARN MORE</button>
    </div>
  </div>

  <div className="metaverse-row">
    <div className="metaverse-media-box">
      <img src={rufusImage} alt="Rufus L2" />

      <span className="status-badge now-live">NOW LIVE</span>
    </div>

    <div className="metaverse-info-box">
      <h2>RUFUS L2</h2>

      <p>
        Rufus Testnet, an Arbitrum Nitro L2 blockchain, is in beta.
      </p>

      <button>LEARN MORE</button>
    </div>
  </div>
</section>
<CommunitySection />
    </main>
  );
}

export default TokenomicsPage;