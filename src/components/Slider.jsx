import React, { useState, useEffect } from "react";
import "../assets/styles/Slider.css";
const Slider = ({ content, initialItemsToShow, template }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth < 1024 && initialItemsToShow > 1) {
        setItemsToShow(2);
      } else if (screenWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(initialItemsToShow);
      }
    };

    // Set initial size on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialItemsToShow]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < content.length
        ? prevIndex + itemsToShow
        : prevIndex
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : prevIndex
    );
  };

  const visibleItems = content.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="slider_container">
      <button onClick={goToPrevious} disabled={currentIndex === 0}>
        <h1>{"<"}</h1>
      </button>
      <div className="item_container">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="item_box"
            style={{ width: `calc(${100 / itemsToShow}%)` }}
          >
            {template(item)}
          </div>
        ))}
      </div>
      <button
        onClick={goToNext}
        disabled={currentIndex + itemsToShow >= content.length}
      >
        <h1>{">"}</h1>
      </button>
    </div>
  );
};

export default Slider;
