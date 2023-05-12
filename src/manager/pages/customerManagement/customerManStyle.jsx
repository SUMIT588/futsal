import styled from 'styled-components'

export const CustomerManagementWrapper = styled.div`

display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
padding: 20px;

p{
  font-family: Bruno Ace SC;
  color: var(--tertiary500);
  font-weight: bold;
  margin-top: 30px;
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
    background-color: var(--primary500);
    color: white;
    height: 40px;
    text-align: center;
    justify-content:center;
    line-height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


`;
