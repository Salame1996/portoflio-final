import React from 'react';
import cvimage from '../../images/CVimage.png';
import './CvImage.css';

function CvImage() {
  return (
    <div>
      <img src={cvimage} alt="cv" className="cvimage" />
    </div>
  );
}

export default CvImage;
