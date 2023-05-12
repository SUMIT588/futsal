import {FaUserAlt} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import { HeaderWrapper } from "./styleHeader"
import { logout } from '../../store/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Header = () =>{
  const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () =>{
        console.log('hello')
        dispatch(logout())
        navigate('/')
    }

return (
  <HeaderWrapper>
    <div className='box'>
      
    <div className="profile">
      <div className="iconContainer">
        <FaUserAlt className="icon" />
        <p>Sumit Thapa Magar</p>
      </div>
      <div className = 'logout'>
        <p>Log Out</p>
        <button onClick = {handleClick}>
          <FiLogOut />
        </button>
      </div>
    </div>
    </div>
  </HeaderWrapper>
);
    
}