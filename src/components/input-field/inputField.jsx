import { useEffect, useState } from "react";
import ErrorMessage from "./errorMessage";
import InputWrapper from './inputStyle';

const InputField = (props) => {
  const [validation, setValidation] = useState(false);

  useEffect(()=>{
    console.log("hello")
  },[]);

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
      <div>{props?.label && <label>{props.label}</label>}</div>

      <input {...props}
      
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onBlur = {() => setValidation(true)}
      />

      {props.type && validInput(props.type, props?.value)}

      {props?.errorMessage && <ErrorMessage errorMessage={props.errorMessage}/>}


    </InputWrapper>
  );
};

export default InputField;
