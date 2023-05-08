import { DashboardWrapper, Wrapper } from "./dashboardStyle"
import { Link, Outlet, useLocation } from "react-router-dom"

import { Header } from "../../../../components/header";
import futsalLogo2 from '../../../../common/img/futsalLogo2.png'

export const ManagerDashboard = () =>{
    const location = useLocation();

const list = [
    {
        title : 'Add Booking' ,
        link : '/addBooking',
        icon : '', 
    },
{
        title : 'Customer Management' ,
        link : '/customerManagement',
        icon : '',
       
    },
    
        
]

return(
    <Wrapper>
    <DashboardWrapper>

    <div className = 'logoContainer'>
            <img className = 'logo' src = {futsalLogo2} alt = 'logo' />
        </div>


   <ul>
    {list.map((item, index) => {
        return (
            
            <Link to = {item.link} key = {index} >

            <li className={location?.pathname=== item.link ? "active":"non-active"}  >
               <div>{item.icon}</div>
               <div>{item.title} </div>
                 
            </li>
            </Link>
        )
    })}
   </ul>
    </DashboardWrapper>
<div className = 'dashboard'>
    <Header />

    <Outlet/>
    
</div>
    </Wrapper>
)

}