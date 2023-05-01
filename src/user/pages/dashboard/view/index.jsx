import { DashboardWrapper, Wrapper } from "./dashboardStyle"
import { Link, Outlet, useLocation } from "react-router-dom"

export const Dashboard = () =>{
    const location = useLocation();

const list = [
    {
        title : 'Home' ,
        link : '/home',
        icon : '',
       
    },
    {
        title : 'Booking' ,
        link : '/booking',
        icon : '',
        
    },
    {
        title : 'Payment' ,
        link : '/payment',
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