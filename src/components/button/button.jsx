import { ButtonWrapper } from './buttonStyle';
import React from 'react';

const Button = (props) =>{

return (
<ButtonWrapper>
    

<button type={props.type}>{props.name}</button>
    
    
</ButtonWrapper>

);

} 

export default Button;