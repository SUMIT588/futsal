import React from 'react';
import { ButtonWrapper } from './buttonStyle';
export const Button = (props) =>{

return (
<ButtonWrapper>
<button type={props.type}>{props.name}</button>
</ButtonWrapper>

)

} 