import { useState } from "react";

const slides = [
  {
    type: "video",
    src: "/r.mp4",
  },
  {
    type: "video",
    src: "/r1.mp4",
  },
   {
    type: "video",
    src: "/r3.mp4",
  },
];

const ReelSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev =
    current === 0 ? slides.length - 1 : current - 1;

  const next =
    current === slides.length - 1 ? 0 : current + 1;

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % slides.length
    );
  };

  return (
    <div className="reel-slider">

      {/* Left Preview */}
      <div className="side-preview left-preview">
        {slides[prev].type === "image" ? (
          <img src={slides[prev].src} alt="" />
        ) : (
          <video
            src={slides[prev].src}
            className="reel-media"
            muted
            loop
            autoPlay
            playsInline
          />
        )}
      </div>

      {/* Previous Button */}
      <button
        className="slider-btn left"
        onClick={prevSlide}
      >
        ←
      </button>

      {/* Main Card */}
      <div className="reel-card">
        {slides[current].type === "image" ? (
          <img
            src={slides[current].src}
            alt=""
            className="reel-media"
          />
        ) : (
          <video
            src={slides[current].src}
            className="reel-media"
            controls
            loop
            playsInline
          />
        )}
      </div>

      {/* Next Button */}
      <button
        className="slider-btn right"
        onClick={nextSlide}
      >
        →
      </button>

      {/* Right Preview */}
      <div className="side-preview right-preview">
        {slides[next].type === "image" ? (
          <img src={slides[next].src} alt="" />
        ) : (
          <video
            src={slides[next].src}
            className="reel-media"
            muted
            loop
            autoPlay
            playsInline
          />
        )}
      </div>

    </div>
  );
};

export default ReelSlider;