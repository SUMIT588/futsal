import styled from "styled-components";

export const ButtonPopWrapper = styled.div`
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
  }

  #modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: none;
  }

  #modal h2 {
    margin-top: 0;
  }

  #modal p {
    margin-bottom: 20px;
  }

  #closeModalButton {
    display: block;
    margin-left: auto;
  }

  body.modal-open {
    overflow: hidden;
  }
`;