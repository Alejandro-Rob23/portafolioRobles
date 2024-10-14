import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';



export const RevaImagen = () => {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'db5wwtw5e'
      }
    }); 
  
    // Use the image with public ID, 'sample'.
    const img = cld.image('ident_picture_3_hayn0o');
    return (
      <div >
      <AdvancedImage style={{maxWidth: '35%', borderRadius:'5%'}} cldImg={img} plugins={[responsive({steps: [320, 400, 1349, 1400]})]}></AdvancedImage>
  </div>
      );
  };