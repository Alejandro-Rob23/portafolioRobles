import React from 'react'
import {AdvancedImage, responsive, placeholder, scale} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { left } from '@cloudinary/url-gen/qualifiers/textAlignment';
import { Position } from '@cloudinary/url-gen/qualifiers';


 const ImaGina = () => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'db5wwtw5e'
    }
  }); 

  // Use the image with public ID, 'sample'.
  const myimage = cld.image('male');

  return (


    <AdvancedImage style={{  maxWidth: '40%', borderRadius:'100%'}}  cldImg={myimage} plugins={[responsive({steps: [320, 360, 375, 720, 1349]})]}/>

    );
};

export default ImaGina



