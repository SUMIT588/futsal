import { DashboardWrapper, Wrapper } from "./dashboardStyle"
import { Link, Outlet, useLocation } from "react-router-dom"

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

    <Outlet/>
    
    </Wrapper>
)

}