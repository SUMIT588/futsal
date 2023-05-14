import styled from "styled-components";

export const ModalWrapper = styled.div`
  .modal {
    display: block;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal-content {
    position: relative;
    margin: 10% auto;
    padding: 20px;
    width: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .modal-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .modal-message {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .modal-buttons {
    display: flex;
    justify-content: flex-end;
  }

  .modal-buttons button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    color: white;
    border-radius: 5px;
    background-color: var(--background);
  }

 .modal-buttons button:hover{
   background-color: var(--hover);
    transition: background-color 0.3s ease;
 }

  
`;