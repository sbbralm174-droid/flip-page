"use client";
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const BookPortfolio = () => {
  const bookRef = useRef(null);

  const flipNext = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const flipPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        width={350}
        height={500}
        size="stretch"
        minWidth={300}
        maxWidth={950}
        minHeight={420}
        maxHeight={750}
        showCover={true}

        /* 🔥 IMPORTANT */
        useMouseEvents={false}   // ❌ FULL CONTROL TAKEOVER
        showPageCorners={false}
        disableFlipByClick={true}

        flippingTime={700}
        maxShadowOpacity={0.5}
        ref={bookRef}
      >
        <div className="page cover">
          <h1>Sabbir</h1>
          <button onClick={flipNext}>Open</button>
        </div>

        <div className="page">
          <h2>Page 1</h2>
          <button onClick={flipNext}>Next</button>
        </div>

        <div className="page">
          <h2>Page 2</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={flipPrev}>Prev</button>
            <button onClick={flipNext}>Next</button>
          </div>
        </div>

        <div className="page cover back-cover">
          <h2>End</h2>
        </div>
      </HTMLFlipBook>

      <style jsx global>{`
        body {
          margin: 0;
          background: #0c0f17;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        .page {
          background: #fef9e8;
          padding: 2rem;
        }

        .cover {
          background: #0a0c12 !important;
          color: white;
          text-align: center;
        }

        .stf__corner,
        .stf__corner-left,
        .stf__corner-right {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default BookPortfolio;