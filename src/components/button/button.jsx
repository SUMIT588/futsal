import React from 'react';
import { ButtonWrapper } from './buttonStyle';


 const Button = (props) =>{

return (
<ButtonWrapper>
<button type={props.type}>{props.name}</button>
</ButtonWrapper>

);

} 

export default Button;