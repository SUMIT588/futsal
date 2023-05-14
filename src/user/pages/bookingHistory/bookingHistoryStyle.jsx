import noticeBackground from "../../../common/img/noticeBackground.jpg";
import styled from "styled-components";

export const BookingHistoryWrapper = styled.div`

display: flex;
padding: 20px;
flex-direction: column;
align-items:center;
background-color: #aad4e0;
height: 100%;
 background-image: url(${noticeBackground});
  background-size: cover;
  background-position: center;

p{
   font-family: Bruno Ace Sc;
  color: var(--tertiary500);
}
h2{
  font-family: Bruno Ace Sc;
  color: var(--tertiary500)
}

table {
  width: 80%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top:20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  
}

.table th,
.table td {
  padding: 15px;
  text-align: center;
}

.table th {
  color: var(primary500);

}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tbody tr:hover {
  background-color: #f5f5f5;
}

.table td {
  border-bottom
}

  .table caption {
    width: 100%;
    background-color: var(--tertiary500);
    color: white;
    height: 40px;
    text-align: center;
    justify-content:center;
    line-height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


`;
