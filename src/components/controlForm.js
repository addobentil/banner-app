import React, { useState } from "react";
import Banner from "./Banner";
import "./styles/controlForm.css";

const ControlForm = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [bannerText, setBannerText] = useState("I love Open Source!");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("");

  return (
    <div className="container">
      {/* <h2 style={{ 
      margin: "5px",
      color: "goldenrod",
      alignSelf: "flex-start",
      fontWeight: "450"
      }}>
        Interactive Banner Design
        </h2> */}
       {/* Banner Preview */}
       <div className="banner-preview" style={{width: "100%"}}>
        <Banner
          bgColor={bgColor}
          textColor={textColor}
          bannerText={bannerText}
          description={description}
          image={image}
        />
      </div>
      <div className="form-container">
        <div className="form-color">
           {/* Background Color */}
        <div className="form-group">
          <label style={{alignSelf: "flex-start"}}>Background Color</label>
          <input style={{height: '50px', cursor: 'pointer'}}
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        {/* Text Color */}
        <div className="form-group">
          <label>Text Color</label>
          <input style={{height: '50px', cursor: 'pointer'}}
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>

        {/* Background Image Upload */}
        <div className="form-group">
          <label>Background Image</label>
          <input style={{height: '50px'}}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImage(URL.createObjectURL(file));
            }}
          />
        </div>
        </div>

        <div className="form-input">
          {/* Banner Text */}
        <div className="form-group">
          <label>Banner Title</label>
          <input className="form-title"
            type="text"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
          />
        </div>

        {/* Banner Text Description*/}
        <div className="form-group">
          <label>Banner Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Enter banner description here..."
          />
        </div>
        </div>
      </div>

    </div>
  );
};

export default ControlForm;
