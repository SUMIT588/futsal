import noticeBackground from '../../../../common/img/noticeBackground.jpg'
import styled from "styled-components";

export const AddBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-image: url(${noticeBackground});
  background-size: cover;
  background-position: center;
  height: 100%;



  .card {
    display:flex;
    background-color: white;
    margin-top: 40px;
    width: 300px;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    font-family: Bruno Ace SC;
    color: var(--tertiary500);
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }



table {
  width: 80%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top:20px;
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