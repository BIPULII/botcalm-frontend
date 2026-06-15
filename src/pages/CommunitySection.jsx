import { useState } from "react";
import joinCommunity from "../assets/join-community.png";
import communitySnake from "../assets/community-snake.png";

function CommunitySection() {
  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setMove({ x, y });
  };

  const handleMouseLeave = () => {
    setMove({ x: 0, y: 0 });
  };

  return (
    <section
      className="community-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={joinCommunity}
        alt="Join Community"
        className="community-title-img"
      />

      <div className="community-snake-wrap">
        <img
          src={communitySnake}
          alt="Community Snake"
          className="community-snake-img"
          style={{
            "--mouse-x": `${move.x}px`,
            "--mouse-y": `${move.y}px`,
          }}
        />
      </div>

      <p className="community-description">
        This is a short explanation. Snekky is a fun and interactive platform.
        Keep it short, clear, and engaging to capture attention. Snekky is a fun
        and interactive platform. Keep it short, clear, and engaging to capture
        attention. This is a short explanation.
      </p>

      <div className="community-icons">
        <button>➤</button>
        <button>𝕏</button>
        <button>▥</button>
        <button>≋</button>
      </div>

      <button className="faq-btn">FAQS</button>

      <div className="community-footer">
        @Copyright 2025 all right reserved by Snekky
      </div>
    </section>
  );
}

export default CommunitySection;