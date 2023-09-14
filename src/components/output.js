'use client';
import React, { useState, useRef } from 'react';

const OutputArea = (imageUrl) => {

  return (
    <div>
    Output: 
        <div
          id="output-area"
          style={{
            width: '400px',
            height: '400px',
            border: '1px dashed #ccc',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
        {imageUrl && 
        <img src={imageUrl.imageUrl} alt="outputImage" style={{
            height: '100%',
            width: '100%',
            
          objectFit: 'cover' }}/>}
        </div>
    </div>
  );
};

export default OutputArea;



