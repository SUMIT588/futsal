import styled from "styled-components";

const AddNoticeWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  /* addNoticeStyled.css */

  input[type="text"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .cardBox{
    margin-top : 20px;
    
  }

  label {
    font-weight: bold;
  }

  .delete{
    background-color: var(--tertiary500);
  }

  .delete:hover{
    background-color: red;
  }

  .update:hover {
    background-color: blue;
  }


  .update{
    background-color: var(--primary500);
  }
  

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left:10px;
  }

  button:hover {
    background-color: #45a049;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default AddNoticeWrapper;
