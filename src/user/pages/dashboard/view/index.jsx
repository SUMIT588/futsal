import { DashboardWrapper, Wrapper } from "./dashboardStyle";
import { Link, Outlet, useLocation } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { Header } from "../../../../components/header";
import {IoIosNotifications} from 'react-icons/io'
import {MdPayment} from 'react-icons/md'
import {TbBrandBooking} from 'react-icons/tb'
import futsalLogo2 from "../../../../common/img/futsalLogo2.png";

export const Dashboard = () => {
  const location = useLocation();

  const list = [
    {
      title: "Home",
      link: "/home",
      icon: <AiFillHome />,
    },
    {
      title: "Booking",
      link: "/booking",
      icon: <TbBrandBooking/>,
    },
    {
      title: "Payment",
      link: "/payment",
      icon: <MdPayment/>,
    },

    {
      title: "Notice",
      link: "/notice",
      icon: <IoIosNotifications/>,
    },
  ];

  return (
    <Wrapper>
      <DashboardWrapper>
        <div className="logoContainer">
          <img className="logo" src={futsalLogo2} alt="logo" />
        </div>

        <ul>
          {list.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <li
                  className={
                    location?.pathname === item.link ? "active" : "non-active"
                  }
                >
                  <div style ={{display:'flex', }}>
                    <div style={{
                        marginRight: '10px'
                    }}>{item.icon}</div>
                    <div>{item.title} </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </DashboardWrapper>
      <div className="dashboard">
        <Header />
        <Outlet />
      </div>
    </Wrapper>
  );
};
