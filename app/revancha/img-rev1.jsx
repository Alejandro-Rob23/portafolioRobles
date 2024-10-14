import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { circles5x5Black } from '@cloudinary/url-gen/qualifiers/dither';



export const ImgRev1 = () => {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'db5wwtw5e'
      }
    }); 
  
    // Use the image with public ID, 'sample'.
    const img = cld.image('samples/animals/three-dogs');
    return (
      <div style={{  }}>
      <AdvancedImage style={{maxWidth: '100%'}} cldImg={img} plugins={[responsive({steps: [320, 1349, 1400]})]}></AdvancedImage>
      </div>
      );
  };