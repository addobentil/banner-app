import React from "react";

const Banner = ({ bgColor, textColor, bannerText, image, description }) => {
  return (
    <div
      className="banner"
      style={{
        position: "relative",
        backgroundColor: bgColor,
        color: textColor,
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        padding: "3rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "350px",
        margin: "0 auto",
        boxSizing: "border-box"
      }}
    >
      {/* Dark Overlay */}
      {image && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}

      {/* Centered Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "100%",
        margin: "0 auto",
      }}>
         <h1 style={{ marginBottom: "10px" }}>{bannerText}</h1>
        <p style={{ fontSize: "1rem", 
            opacity: "0.8", 
            lineHeight: 1.6,
            margin: "0 auto",
            maxWidth: "90%",
            wordWrap: "break-word",
            overflowWrap: "break-word"
            }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
