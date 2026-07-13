import { useState } from "react";

const slides = [

  {
    type: "image",
    src: "/img1.jpg",
  },
  {
    type: "image",
    src: "/img2.jpg",
  },
 
];

const ReelSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev =
    current === 0
      ? slides.length - 1
      : current - 1;

  const next =
    current === slides.length - 1
      ? 0
      : current + 1;

  const prevSlide = () => {
    setCurrent(prev =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent(prev =>
      (prev + 1) % slides.length
    );
  };

  return (
    <div className="reel-slider">

      <div className="side-preview left-preview">
        {slides[prev].type === "image" ? (
          <img src={slides[prev].src} alt="" />
        ) : (
          <video
            src={slides[prev].src}
            muted
          />
        )}
      </div>

      <button
        className="slider-btn left"
        onClick={prevSlide}
      >
        ←
      </button>

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
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>

      <button
        className="slider-btn right"
        onClick={nextSlide}
      >
        →
      </button>

      <div className="side-preview right-preview">
        {slides[next].type === "image" ? (
          <img src={slides[next].src} alt="" />
        ) : (
          <video
            src={slides[next].src}
            muted
          />
        )}
      </div>

    </div>
  );
};

export default ReelSlider;