import styled from "styled-components";

export const BookingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  h3 {
    margin-top: 40px;
    color: var(--primary500);
  }

  h2{
    color: var(--secondary500);
  }

  .notice {
    margin-top: 20px;
    border-radius: 10px;
    width: 78%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: var(--grey500);
  }

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;