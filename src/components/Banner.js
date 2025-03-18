const Banner = ({ bgColor, textColor, bannerText, image }) => {
  return (
    <div
      className="banner"
      style={{
        position: "relative",
        backgroundColor: bgColor,
        color: textColor,
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        padding: "3rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "180px",
      }}
    >
      {/* Dark Overlay for better text visibility */}
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

      {/* Text should be above the overlay */}
      <h1 style={{ position: "relative", zIndex: 1 }}>{bannerText}</h1>
    </div>
  );
};

export default Banner;
