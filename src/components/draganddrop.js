'use client';
import React, { useState, useRef } from 'react';
import DrawingCanvas from './drawingcanvas';

const ImageEditor = () => {
  const [droppedImage, setDroppedImage] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files[0]);
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    if (file) {
      // Überprüfe, ob die Datei ein Bild ist (z.B. anhand des Dateityps)
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const image = new Image();
          image.src = e.target.result;

          setDroppedImage(image);
          setIsDrawingMode(false); // Wechsle zum Drop-Bereich nach dem Bild-Upload
        };

        reader.readAsDataURL(file);
      } else {
        alert('Bitte lade nur Bilder hoch.');
      }
    }
  };

  const toggleMode = () => {
    setIsDrawingMode(!isDrawingMode);
  };

  return (
    <div>
      <div>
        <button onClick={toggleMode}>
          {isDrawingMode ? 'Zum Drop-Bereich wechseln' : 'Zum Zeichenbereich wechseln'}
        </button>
      </div>
      {isDrawingMode ? (
        <div>
          <h2>Zeichenbereich:</h2>
          <DrawingCanvas />
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
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
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            Drag & Drop Bereich für Bilder
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageInputChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: '0',
              cursor: 'pointer',
            }}
            ref={fileInputRef}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              border: 'none',
              padding: '0',
              background: 'none',
              cursor: 'pointer',
            }}
          >
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;



