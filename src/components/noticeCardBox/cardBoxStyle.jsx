import styled from "styled-components";

export const CardBoxWrapper = styled.div`
  

    width:80%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 20px;

    .box{
      
    }


  .card-content {
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color:var(--tertiary500);
    font-family: Bruno Ace SC;
  }

  .card-message {
    margin-bottom: 5px;
  }

  .card-date {
    font-size: 12px;
    color: #888;
  }
`;