import React, { useState } from "react";
import Banner from "./Banner";
import "./styles/controlForm.css"; // Import the CSS file

const ControlForm = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [bannerText, setBannerText] = useState("I love Open Source!");
  const [image, setImage] = useState("");

  return (
    <div className="container">
      <div className="form-container">
        <h2 style={{marginBottom: '25px'}}>Interactive Banner Design</h2>

        {/* Background Color */}
        <div className="form-gro">
          <label>Background Color:</label>
          <input style={{height: '50px', cursor: 'pointer'}}
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        {/* Text Color */}
        <div className="form-group">
          <label>Text Color:</label>
          <input style={{height: '50px', cursor: 'pointer'}}
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>

        {/* Banner Text */}
        <div className="form-group">
          <label>Banner Text:</label>
          <input
            type="text"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
          />
        </div>

        {/* Background Image Upload */}
        <div className="form-group">
          <label>Background Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImage(URL.createObjectURL(file));
            }}
          />
        </div>
      </div>

      {/* Banner Preview */}
      <div className="banner-preview">
        <Banner
          bgColor={bgColor}
          textColor={textColor}
          bannerText={bannerText}
          image={image}
        />
      </div>
    </div>
  );
};

export default ControlForm;
