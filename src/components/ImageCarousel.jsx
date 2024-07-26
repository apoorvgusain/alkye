import { useState, useEffect } from "react";
import One from "../../assets/images/one.avif";
import Two from "../../assets/images/two.avif";
import Three from "../../assets/images/three.avif";
import Four from "../../assets/images/four.avif";

const images = [One, Two, Three, Four, One, Two];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "right") {
          if (prevIndex === 1) {
            // moving right from 0 to 1
            setDirection("left");
            return 0;
          } else {
            return prevIndex + 1;
          }
        } else {
          if (prevIndex === 0) {
            // moving left from 2 to 1
            setDirection("right");
            return 0;
          } else {
            return prevIndex - 1;
          }
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const calculateVisibleDots = () => {
    return [0, 1, 2];
  };

  const visibleDots = calculateVisibleDots();

  const handleDotClick = (index) => {
    if (index === 2 && direction === "right") {
      setCurrentIndex(2);
      setDirection("left");
    } else if (index === 0 && direction === "left") {
      setCurrentIndex(0);
      setDirection("right");
    } else {
      if (index >= 0 && direction === "left") {
        setCurrentIndex(0);
        setDirection("right");
      }
      if (index <= 2 && direction === "right") {
        setCurrentIndex(2);
        setDirection("left");
      }
    }
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="overflow-hidden w-full max-w-5xl mb-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="rounded-xl mx-5 h-96 w-2/3 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        {visibleDots.map((dot, index) => (
          <div
            key={index}
            className={`lg:w-4 lg:h-4 w-3 h-3 rounded-full ${
              currentIndex === dot ? "bg-white" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => handleDotClick(dot)}
          ></div>
        ))}
      </div>
    </div>
  );
}
