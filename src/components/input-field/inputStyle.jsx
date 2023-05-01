import styled from 'styled-components';

const InputWrapper = styled.div`

margin-bottom : 10px;


input{
    width:100%;
    padding:10px;
    padding-left:20px;
    border:none;
    border-bottom: 1px solid var(--background);
    font-size: 14px;
    height: 20px;
   }

   input: focus {
    outline:none;
   }

   
   input:hover{
    border-bottom:  2px solid var(--hover);
   }

  
  

  input::placeholder {
    font-size: 12px;
    padding:5px;

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
    font-size: 12px;
    color:var(--background)
 
  }

  label:hover{
    color:var(--hover);
    font-weight:bold;
  }

`;

export default InputWrapper;