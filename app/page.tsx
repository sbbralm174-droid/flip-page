"use client";
import React, { useRef } from "react";
import HTMLFlipBook  from "react-pageflip";

const BookPortfolio = () => {
  const bookRef = useRef<any>(null);

  const onOpenBook = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const startX = useRef(0);

const handleTouchStart = (e: React.TouchEvent) => {
  if (!isMobile) return;

  startX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
  if (!isMobile) return;

  const diff = e.changedTouches[0].clientX - startX.current;

  if (diff < -130) {
    bookRef.current?.pageFlip().flipNext();
    
  } else if (diff > 130) {
    bookRef.current?.pageFlip().flipPrev();
  }
};





const flipBookProps = {
  width: 350,
  height: 500,
  size: "stretch" as const,
  minWidth: 300,
  maxWidth: 950,
  minHeight: 420,
  maxHeight: 750,

  showCover: true,
  showPageCorners: false,
  useMouseEvents: true,
  mobileScrollSupport: false,

  flippingTime: 750,
  maxShadowOpacity: 0.5,

  startPage: 0,
  drawShadow: true,
  usePortrait: isMobile,
  style: {},
};


  return (
    <div 
    className="book-wrapper"
    >
      <HTMLFlipBook {...(flipBookProps as any)} ref={bookRef}>
        {/* Cover Page */}
        <div className="page cover">
          <div className="page-content">
            <h1>Sabbir</h1>
            <p>I create experiences</p>
            <button onClick={onOpenBook}>📖 Open Book</button>
          </div>
        </div>

        {/* Page 1 */}
        <div className="page">
          <div className="page-content">
            <h2>Welcome</h2>
            <p>This is my story — crafted with intention, every page reveals a fragment of creative philosophy.</p>
            <p style={{ marginTop: "16px", fontStyle: "italic" }}>
              "Design is not just what it looks like, but how it feels."
            </p>
          </div>
        </div>

        {/* Page 2 */}
        <div className="page">
          <div className="page-content">
            <h2>About</h2>
            <p>I design stories, not screens. My work blends minimalism with emotional resonance. Every pixel serves a narrative.</p>
            <p>📍 Based between imagination & craft.</p>
          </div>
        </div>

        {/* Page 3 */}
        <div className="page">
          <div className="page-content">
            <h2>About (cont.)</h2>
            <p>I focus on emotion, not decoration. Design thinking that bridges human behavior and aesthetics.</p>
            <p>✨ 6+ years of shaping digital identities.</p>
          </div>
        </div>

        {/* Project Page */}
        <div className="page">
          <div className="page-content">
            <h2>Project 1</h2>
            <p><strong>Problem</strong> → No identity / scattered presence</p>
            <p><strong>Solution</strong> → Bold branding & immersive visual system</p>
            <p><strong>Result</strong> → 300% growth in engagement + recognition award</p>
          </div>
        </div>

        {/* Project Details */}
        <div className="page">
          <div className="page-content">
            <h2>Project 1 Details</h2>
            <p>Deep explanation: crafted a modular design language, interactive components, and cohesive typography.</p>
            <p>📌 Tools: Figma, Spline, GSAP.</p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="page">
          <div className="page-content">
            <h2>Philosophy</h2>
            <p>Less design. More feeling. I believe in negative space, rhythm, and tactile feedback — digital with soul.</p>
            <p>“Perfection is achieved not when there is nothing left to add, but nothing left to take away.”</p>
          </div>
        </div>

        {/* Contact */}
        <div className="page">
          <div className="page-content">
            <h2>Contact & Connect</h2>
            <p>📧 hello@sabbir.com</p>
            <p>🐦 @sabbir_creates</p>
            <p>🌐 sabbir.design</p>
            <p style={{ marginTop: "18px" }}>Open for collaborations — let's tell your story.</p>
          </div>
        </div>

        {/* Back Cover */}
        <div className="page cover back-cover">
          <div className="page-content">
            <h2 style={{ borderLeft: "none", textAlign: "center" }}>✧ End ✧</h2>
            <p style={{ marginTop: "20px" }}>thank you for flipping through</p>
            <p style={{ fontSize: "0.9rem" }}>© Sabbir — every story has a new beginning</p>
          </div>
        </div>
      </HTMLFlipBook>

      <div className="info-badge">
        ⚡ Click & drag corners to flip
      </div>

      <style jsx global>{`
      html, body {
          touch-action: none;
          overflow: hidden;
        },
        body {
          margin: 0;
          min-height: 100vh;
          background: linear-gradient(145deg, #1a1e2a 0%, #0c0f17 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .book-wrapper {
          perspective: 2200px;
          filter: drop-shadow(0 25px 35px rgba(0,0,0,0.5));
        }
        .page {
          background: #fef9e8;
          padding: 2rem;
          box-shadow: inset 0 0 18px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          justify-content: center;
          touch-action: none;
        }
        .page-content {
          width: 100%;
        }
        .cover {
          background: #0a0c12 !important;
          color: #f2e8cf;
          text-align: center;
          border: 1px solid rgba(230, 180, 60, 0.3);
        }
        .back-cover {
          background-image: linear-gradient(45deg, #1a1e2a 2%, #0c0f17 98%) !important;
        }
        h1 {
          font-size: 3rem;
          background: linear-gradient(135deg, #e6b422, #c97e2c);
          -webkit-background-clip: text;
          color: transparent;
        }
        h2 {
          font-size: 2rem;
          border-left: 5px solid #e6b422;
          padding-left: 18px;
          margin-bottom: 1.2rem;
          color: #2c3e2f;
        }
        button {
          margin-top: 28px;
          padding: 12px 28px;
          background: #e6b422;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          font-weight: bold;
        }
        .info-badge {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(0,0,0,0.7);
          color: #ffdd99;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.8rem;
          border-left: 3px solid #e6b422;
        }
      `}</style>
    </div>
  );
};

export default BookPortfolio;