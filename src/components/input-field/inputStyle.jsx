import styled from 'styled-components';

const InputWrapper = styled.div`

margin-bottom : 10px;


input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

  }
  
  input:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px #0066cc;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
  }

`;

export default InputWrapper;