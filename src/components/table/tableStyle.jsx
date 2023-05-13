import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 80%;
  margin-bottom: 40px;

  input {
    border-radius: 5px;
    height: 30px;
    border: 1px solid var(--primary500);
    text-align: center;
    padding: 5px;
  }

  input:focus {
    border: 2px solid var(--background);
    outline: none;
  }

  input:hover {
    border: 2px solid var(--primary500);
  }

  input::placeholder {
    padding: 5px;
  }

  table {
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    box-shadow: 0px -1px 2px 0 rgba(0, 0, 0, 0.2),
      0 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.19);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  th {
    color: var(--primary500);
    font-weight: bold;
    border: 1px solid black;
  }

  td {
    text-align: center;
    color: var(--grey500);
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    box-sizing: border-box;
  }

  caption {
    width: 100%;
    background-color: var(--primary500);
    color: white;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    color: white;
    border-radius: 5px;
    background-color: var(--background);
    // margin-bottom:25px;
  }

  button:hover {
    background-color: var(--hover);
    transition: background-color 0.3s ease;
  }
`;