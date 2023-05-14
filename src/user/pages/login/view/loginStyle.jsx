import background from '../../../../common/img/background.jpg'
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 100vh;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  .container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .box {
    position:absolute;
    top:10%;
    right: 20%;
    border-radius: 15px;
    box-sizing: border-box;
    border: 0.5px solid #ccc;
    box-shadow: 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
    padding: 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  }

  input {
  }

  a {
    // color: var(--tertiary500);
    // text-decoration: none;
    margin-bottom: 10px;
  }

  a: hover {
    color: red;
  }

  p {
    color: var(--grey500);
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
