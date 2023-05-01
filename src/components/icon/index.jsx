import React from 'react'
import { AiOutlineUser, AiFillLock, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';



const Icon = (props) => {



const Icons = ()=>{
    if(props.icon === 'username'){
    return (
        <AiOutlineUser />
    );
}

if(props.icon === 'email'){
return(
    <AiOutlineMail />
)
    };

    
if(props.icon === 'number'){
    return(
        <AiOutlinePhone />
    )
        };

    if(props.icon === 'password'){
        return(
<AiFillLock />
        )
    };
    return null;
}

return (

    <React.Fragment>

{props.icon && <Icons/>}

    </React.Fragment>

)


}


export default Icon;