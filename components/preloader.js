import React from "react";

const Preloader = ({ darkMode }) => {
  const colorsLight = ["#99b2d0", "#7592B3", "#58789D", "#465F81", "#394D6A"];
  const colorsDark = ["#8e93f8", "#6f6af7", "#6d5cf0", "#6144e6", "#6347c8"];

  const colors = darkMode ? colorsDark : colorsLight;

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen ${
        darkMode ? "bg-darkmode" : "bg-white"
      }`}
    >
      <div className="loader__container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="loader__dot"
            style={{
              animationDelay: `${0.2 + index * 0.1}s`,
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
