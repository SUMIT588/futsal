import styled from 'styled-components';

const InputWrapper = styled.div`

margin-bottom : 10px;


input{
    width:100%;
    padding: 8px;
    border:none;
    border-bottom: 2px solid var(--background);
    font-size: 14px;
    height: 20px;
    text-align: center;
   }

   input: focus {
    outline:none;
   }

   
   input:hover{
    border-bottom:  2px solid var(--hover);
   }

   input:hover::placeholder{
  color:var(--background);
   }
  
  

  input::placeholder {
    font-size: 12px;
    font-weight:bold;
  }

  .iconContainer{
    position: relative;
  }

  .icon{
    width:100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color:var(--hover);
  }

  
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight:bold;
    color:var(--background)
 
  }

  label:hover{
    color:var(--hover)
  }

`;

export default InputWrapper;