import React, { useEffect, useState } from "react";
import "../Css/Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/gellery"
    )
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);

  return (
    <div className="mt-20 mb-40 w-8/12 mx-auto">
      <h1 className="text-2xl font-semibold text-center">
        Our <span className="text-orange-500 font-bold text-4xl">Toys</span>{" "}
        Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gallery-con gap-5 my-12">
        {gallery.map((image, index) => (
          <div className="gallery">
            <img
              className={`h-full scale-[3] duration-500 hover:scale-100`}
              src={image.picture}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
