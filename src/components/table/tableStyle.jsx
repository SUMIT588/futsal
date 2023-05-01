import styled from "styled-components";

export const TableWrapper = styled.div`

width: 80%;



table {
  border-collapse: collapse;
    padding: 10px;
    width: 100%;
    box-shadow:  0px -1px 2px 0 rgba(0, 0, 0, 0.2), 0 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.19);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
    
  th {
    color: var(--primary500);
    font-weight: 200;
    border:1px solid black;
    text-transform: capitalize;
  }
    
  td {
    text-align: center;
    color : var(--grey500);
  }

  th, td{
    border: 1px solid #ddd;
    padding: 10px;
    
  }

  caption{
    width: 100%;
    background-color: var(--primary500);
    color: white;
    height: 50px;
    text-align : center;
    line-height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
  }


`