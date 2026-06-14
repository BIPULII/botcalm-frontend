import upperLeft from "../assets/upperleft.png";
import centerMascot from "../assets/center-mascot.png";
import follow1 from "../assets/follow1.png";
import follow2 from "../assets/follow2.png";
import frame0 from "../assets/fram0.png";
import frame1 from "../assets/fram1.png";
import frame2 from "../assets/fram2.png";
import snekkyText from "../assets/SNEKKY.png";
import mediaText from "../assets/MEDIA.png";
function JoinPage({ onBack }) {
  return (
    <section className="join-page">
      <section className="join-first-section">
        <img
          src={upperLeft}
          alt="Upper Left Design"
          className="upper-left-image"
        />
        <img
            src={frame1}
            alt="Snekky diagonal frame"
            className="frame-one"
            />
        <img
          src={centerMascot}
          alt="Snekky Mascot"
          className="center-mascot"
        />

        <div className="follow-buttons">
            <img src={follow1} alt="Follow Telegram" className="follow-img follow-one" />
            <img src={follow2} alt="Follow X" className="follow-img follow-two" />
        </div>
        <button
            className="upper-left-back-btn"
            onClick={onBack}
            aria-label="Back to home"
        ></button>
        <div className="side-text-images">
            <img src={snekkyText} alt="Snekky Text" className="side-text-img" />
            <img src={mediaText} alt="Media Text" className="side-text-img media-img" />
            </div>

            <img
            src={frame2}
            alt="Snekky mascot frame"
            className="frame-two"
            />
        <img
            src={frame2}
            alt="Snekky mascot frame"
            className="frame-two"
            />
        <img
            src={frame0}
            alt="Snekky partnerships frame"
            className="frame-zero"
            />
      </section>

      <section className="join-yellow-content">
        {/* next parts add here */}
      </section>
    </section>
  );
}

export default JoinPage;