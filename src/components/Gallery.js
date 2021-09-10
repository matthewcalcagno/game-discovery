import React, { useState } from "react";
import GalleryComponent from 'react-grid-gallery';

const Gallery = (props) => {
  const {screenshots} = props
  console.log(screenshots)
  const photos = screenshots.map(ss => {
      return {
        src: ss.image,
        thumbnail: ss.image,
        thumbnailWidth: ss.width,
        thumbnailHeight: ss.height,
      }
  })

 
 
  return (
    <div className="screenshots">
        <h3 style={{fontSize: "3rem"}}>Capturas de pantalla</h3>
        <GalleryComponent images={photos}/>
    </div>
  )
  
};

export default Gallery;
