import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';



export const CbdImagetres = () => {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'db5wwtw5e'
      }
    }); 
  
    // Use the image with public ID, 'sample'.
    const img = cld.image('cbd_picture_logo_ynunrn');
    return (
      <div style={{width: '400px'}}>
      <AdvancedImage style={{maxWidth: '70%'}} cldImg={img} plugins={[responsive({steps: [320, 1349, 1400]})]}></AdvancedImage>
  </div>
      );
  };