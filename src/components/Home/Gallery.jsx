import React, { useEffect, useState } from "react";
import "../Css/Gallery.css";
import AOS from 'aos';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

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
    <div className="md:mt-20 mt-10 md:mb-40 mb-20 md:w-8/12 w-10/12 mx-auto">
      <h1 className="md:text-2xl text-xl font-semibold text-center">
        Our <span className="text-orange-500 font-bold md:text-4xl text-2xl">Toys</span>{" "}
        Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gallery-con gap-5 my-12">
        {gallery.map((image, index) => (
          <div className="gallery" data-aos='fade-up'>
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
