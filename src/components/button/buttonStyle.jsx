import styled from 'styled-components';

export const ButtonWrapper = styled.div`

margin-top:20px;
border: 0;
border-radius: 4px;
cursor: pointer;
display:flex;
justify-content:center;

button{
    padding: 10px 20px;
    border:none;
    color:white;
    border-radius:5px;
    background-color: var(--background);
    margin-bottom:25px;
    
}

button:hover {
    background-color: var(--hover);
    transition: background-color 0.3s ease;
  }

`

