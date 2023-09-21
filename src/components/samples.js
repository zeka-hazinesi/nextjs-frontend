'use client';
import { useSketchStore } from '@/store';
import React from 'react';

const Samples = () => {
    const setSketch = useSketchStore(state => state.setSketch)
    const handleSelectSketch = async (event) => {
        const selectedImagePath = event.target.src;
        const selectedImageBlob = await fetch(selectedImagePath).then(response => response.blob());
        const url = new URL(selectedImagePath);
        const fileName = url.pathname.split('/').pop();
        const selectedImageFile = new File([selectedImageBlob], fileName, { type: 'image/png' });
        console.log(selectedImageFile)
        setSketch(selectedImageFile);
    }

    return(
        <div id="samples" className="flex flex-row mt-12">
            <img src="./sketches/sketch-1.jpg" width={300} height={300} onClick={handleSelectSketch} />
            <img src="./sketches/sketch-2.png" width={300} height={300} onClick={handleSelectSketch} />
            <img src="./sketches/sketch-3.jpg" width={300} height={300}onClick={handleSelectSketch} />
        </div>
    )
}

export default Samples;