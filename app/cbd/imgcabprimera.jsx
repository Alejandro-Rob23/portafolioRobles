import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';


export const CbdImage = () => {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'db5wwtw5e'
      }
    }); 
  
    // Use the image with public ID, 'sample'.
    const img = cld.image('cbd_picture_logo_ynunrn');
    return (
      <div >
      <AdvancedImage style={{maxWidth: '7%'}} cldImg={img} plugins={[responsive({steps: [320, 1349, 1400]})]}></AdvancedImage>
  </div>
      );
  };