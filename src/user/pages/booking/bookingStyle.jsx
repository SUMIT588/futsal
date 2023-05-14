import noticeBackground from '../../../common/img/noticeBackground.jpg'
import styled from "styled-components";

export const BookingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
   background-image: url(${noticeBackground});
  background-size: cover;
  background-position: center;
  height: 100%;

   .tableBox{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

 p{
  font-weight: bold;
  font-family:Bruno Ace Sc;
  color:var(--grey500);

 }

 .notBooked{
  text-align : center;
  color:var(--primary500);

  font-size:28px;
  font-family:Bruno Ace Sc;
 }

 .closeData{
  color: var(--tertiary500);
  font-size: 20px;
  margin-top: 30px;
 }


 span{
  color:var(--tertiary500);
 }
  
  button {
    margin-bottom: 20px;
  }

  h3{
    color: var(--tertiary500);
  }

  h4{
   color: var(--grey500);
   font-family: Bruno Ace SC;
  }

  h2{
    color: var(--grey500);
  font-family: Bruno Ace SC;

  }

  .notice {
    padding: 40px;
    margin-top: 20px;
    border-radius: 10px;
    width: 73%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    color: var(--grey500);
    background-color: white;
  }

  .table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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

.booked{
  color:var(--tertiary500);
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
