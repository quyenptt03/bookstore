import React from "react";
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";
import gallery5 from "../images/gallery-5.jpg";
import gallery6 from "../images/gallery-6.jpg";
import gallery7 from "../images/gallery-7.jpg";
import gallery8 from "../images/gallery-8.jpg";
import gallery9 from "../images/gallery-9.jpg";
import gallery10 from "../images/gallery-10.jpg";
import gallery11 from "../images/gallery-11.jpg";
import gallery12 from "../images/gallery-12.jpg";

export default function ImagesGallery() {
  return (
    <div className="images-gallery">
      <div className="gallery">
        <div className="gallery-img-wrapper">
          <div className="gallery-img-1">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-img-2">
            <div className="gallery-img">
              <img src={gallery2} alt="" />
            </div>
            <div className="gallery-img">
              <img src={gallery3} alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-img-3">
          <div className="gallery-img">
            <img src={gallery4} alt="" />
          </div>
          <div className="gallery-img">
            <img src={gallery5} alt="" />
          </div>
          <div className="gallery-img">
            <img src={gallery6} alt="" />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-img-wrapper">
          <div className="gallery-img-1">
            <img src={gallery7} alt="" />
          </div>
          <div className="gallery-img-2">
            <div className="gallery-img">
              <img src={gallery8} alt="" />
            </div>
            <div className="gallery-img">
              <img src={gallery9} alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-img-3">
          <div className="gallery-img">
            <img src={gallery10} alt="" />
          </div>
          <div className="gallery-img">
            <img src={gallery11} alt="" />
          </div>
          <div className="gallery-img">
            <img src={gallery12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
