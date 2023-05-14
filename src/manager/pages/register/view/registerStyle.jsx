import background from "../../../../common/img/background.jpg";
import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;

  h2 {
    color: var(--background);
    text-align: center;
  }

  .box {
    position: absolute;
    right: 20%;
    top: 10%;
    width: 350px;
    border-radius: 15px;
    box-sizing: border-box;
    border: 0.5px solid #ccc;
    box-shadow: 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
    padding: 10px 40px;
  }
`;