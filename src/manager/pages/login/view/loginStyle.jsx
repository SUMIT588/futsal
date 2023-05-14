import background from '../../../../common/img/background.jpg'
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;

  .box {
    position: absolute;
    right: 20%;
    top: 10%;
    border-radius: 15px;
    box-sizing: border-box;
    border: 0.5px solid #ccc;
    box-shadow: 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
    padding: 40px 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  a :hover {
    color: red;
  }

  h2 {
    text-align: center;
    color: var(--background);
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;


