import { ModalWrapper } from "./modalStyle";
import React from "react";

export const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (

    <ModalWrapper >

    <div className="modal">
      <div className="modal-content">
        <h5 className="modal-title">{title}</h5>
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={onConfirm}>
            Confirm
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </ModalWrapper>
  );
};

