import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';



export const ImagCuV = () => {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'db5wwtw5e'
      }
    }); 
  
    // Use the image with public ID, 'sample'.
    const img = cld.image('Modern_Professional_CV_Resume');
    return (
      <div >
      <AdvancedImage style={{maxWidth: '100%'}} cldImg={img} plugins={[responsive({steps: [320, 1349, 1400]})]}></AdvancedImage>
  </div>
      );
  };