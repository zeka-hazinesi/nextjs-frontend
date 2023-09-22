import React from "react";

interface UserModalProps{
    user:any;
    isOpen:boolean;
    closeModal: React.MouseEventHandler<HTMLDivElement>
}

const UserModal = ({user, isOpen, closeModal}: UserModalProps) => {
    if (!isOpen) return null;
    return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-bg fixed inset-0 bg-gray-800 opacity-50"
            onClick={closeModal}></div>
        <div className="modal-content bg-white p-4 rounded shadow-md relative text-center">
            <h2 className="text-xl font-semibold mb-4">Benutzerdetails</h2>
            <p>Email: {user.email}</p>
            <p>Manage Subscription</p>
          </div>
        </div>
      );
    };

export default UserModal;