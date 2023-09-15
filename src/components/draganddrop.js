"use client";
import React, { useState, useRef, useEffect } from "react";
import DrawingCanvas from "./drawingcanvas";
import { supabase } from "@/lib/supabase";
import Modal from "./githubmodal";

const ImageEditor = ({ setFile }) => {
  const [user, setUser] = useState(null);
  const [droppedImage, setDroppedImage] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    checkUser();
    console.log(user);
  },[]);

  const checkUser = async () => {
    const l_user = await supabase.auth.getUser(); // eingeloggten User erfassen, oder Null
    setUser(l_user);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if(!user.data.user){
      setIsModalVisible(true);
      return;
    }
    setFile(e.dataTransfer.files[0]);
    handleImageUpload(e.dataTransfer.files[0]);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const handleIfUserLoggedIn = () => {
    if(!user.data.user){
      setIsModalVisible(true);
    } else {
      fileInputRef.current.click();
    }
  }

  const handleImageInputChange = (e) => {
    if(!user){
      return;
    }
    const file = e.target.files[0];
    setFile(file);
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    if (file) {
      // Überprüfe, ob die Datei ein Bild ist (z.B. anhand des Dateityps)
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setDroppedImage(e.target.result);
          setIsDrawingMode(false); // Wechsle zum Drop-Bereich nach dem Bild-Upload
        };

        reader.readAsDataURL(file);
      } else {
        alert("Bitte lade nur Bilder hoch.");
      }
    }
  };

  const toggleMode = () => {
    setIsDrawingMode(!isDrawingMode);
  };

  console.log(isModalVisible);

  return (
    <div>
      <div>
        <button onClick={toggleMode}>
          {isDrawingMode
            ? "Zum Drop-Bereich wechseln"
            : "Zum Zeichenbereich wechseln"}
        </button>
      </div>
      {isDrawingMode ? (
        <div>
          <h2>Zeichenbereich:</h2>
          <DrawingCanvas />
        </div>
      ) : (
        <div
          id="drag-image"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            width: "400px",
            height: "400px",
            border: "1px dashed #ccc",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {droppedImage ? (
            <img
              src={droppedImage}
              alt="Hochgeladenes Bild"
              style={{
                height: "100%",
                width: "100%",

                objectFit: "cover",
              }}
            />
          ) : (
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Drag & Drop Bereich für Bilder
            </p>
          )}

          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={handleImageInputChange}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: "0",
              cursor: "pointer",
            }}
            ref={fileInputRef}
          />
          <button
            onClick={handleIfUserLoggedIn}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              border: "none",
              padding: "0",
              background: "none",
              cursor: "pointer",
            }}
          ></button>
        </div>
      )}
      {isModalVisible && (
        <Modal isOpen={isModalVisible} onClose={closeModal} /> )}
    </div>
  );
};

export default ImageEditor;
