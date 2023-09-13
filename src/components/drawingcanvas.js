'use client';
import React, { useState, useRef, useEffect } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // Setze die Zeichenstift-Eigenschaften
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.lineCap = 'round';

    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      setIsDrawing(true);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const draw = (e) => {
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      if (isErasing) {
        context.strokeStyle = 'white'; // Setze die Linienfarbe auf Weiß zum Löschen
      } else {
        context.strokeStyle = 'black'; // Setze die Linienfarbe auf Schwarz zum Zeichnen
      }
      context.stroke();
      console.log("drawing");
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
    };

 

    const changeCursor = () => {
      canvas.style.cursor = 'crosshair';
    };

    const restoreCursor = () => {
      canvas.style.cursor = 'default';
    };

    
   
    canvas.addEventListener('mousedown', startDrawing);
    
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('mouseenter', changeCursor);
    canvas.addEventListener('mouseleave', restoreCursor);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
      canvas.removeEventListener('mouseenter', changeCursor);
      canvas.removeEventListener('mouseleave', restoreCursor);
    };
  }, [isErasing]);

  

  const toggleEraser = () => {
    setIsErasing((prevErasing) => !prevErasing);
  };

  return (
    <div>
      <button onClick={toggleEraser}>
        {isErasing ? 'Zeichnen' : 'Löschen'}
      </button>
      <button onClick={clearCanvas}>Alles löschen</button>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default DrawingCanvas;
