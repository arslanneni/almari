import React from "react";
import Modal from "react-modal";
const customStyles = {
    content: {
      top: "50%", // Adjust as needed
      left: "50%", // Adjust as needed
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "70%", // Increase the width as needed
      height: "70vh", // Increase the height as needed (e.g., 70% of the viewport height)
      padding: "0px",
      overflowY: "auto",
      overflowX: "hidden",
      backgroundColor: "#f7f7f7",
      border: "none", // Remove border if not needed
    },
    overlay: {
      backgroundColor: "rgba(175, 175, 175, 0.80)",
      zIndex: 1000,
    },
  };
  


export default function PrimaryModal({ isOpenProp, children }) {
  return (
    <Modal
      // className="modal fade"
      isOpen={isOpenProp}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
}
