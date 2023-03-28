import {  useState } from "react";
import ErrorMessage from "./errorMessage";
import InputWrapper from './inputStyle';
import Icon from '../icon/index';


const InputField = (props) => {
  const [validation, setValidation] = useState(false);

 

  const validInput = (type, value) => {

    if (validation) {
  
        if(value?.toString().length === 0 ){
            return <ErrorMessage errorMessage = "Field can't be empty" />
        }

        if(type === 'email'){
         const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         const email = validEmail.test(value);

         console.log(email)

         if(!email){
            return <ErrorMessage errorMessage = "Invalid email" />
         }
        }


      if (type === "tel") {
        if (value?.toString().length !== 10) {
          return <ErrorMessage errorMessage = "Enter valid number" />;
        }
      }

      if(type=== 'password'){
 
        if(value?.toString().length < 6){
          return <ErrorMessage errorMessage = 'Password must be 6 digit' />
        }

      }

      return null;

    }
  };

  return (
    <InputWrapper>
      <div>{props?.label && <label htmlFor = {props.name}>{props.label}</label>}</div>

      <div className = 'iconContainer'>
        
      <div className='icon'>
          {props.icon && <Icon  icon={props.icon}/>}

        </div>
        
      <input {...props}
        id = {props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onBlur = {() => setValidation(true)}
        />


        </div>

      {props.type && validInput(props.type, props?.value)}

      {props?.errorMessage && <ErrorMessage errorMessage={props.errorMessage}/>}


    </InputWrapper>
  );
};

export default InputField;
