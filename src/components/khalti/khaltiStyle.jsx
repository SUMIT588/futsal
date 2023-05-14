import noticeBackground from '../../common/img/noticeBackground.jpg'
import styled from "styled-components";

export const KhaltiWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  height: 80%;
  font-family: Arial;

  .secondContainer {
    width: 50%;
    border-radius: 10px;
  }

  h2 {
    color: var(--secondary500);
    font-size: 30px;
    letter-spacing: 0em;
  }

  p {
    color: var(--grey500);
    font-family: Merriweather;
    font-size: 20px;
    margin-top: 50px;
  }

  h1 {
    font-size: 55px;
    color: var(--secondary500);
    letter-spacing: 0.02em;
  }

  h1,
  h2 {
    margin: 10px;
  }

  .firstContainer {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    width: 50%;
    border-radius: 10px;
    background-image: url(${noticeBackground});
    background-size: cover;
    background-position: center;
  }

  .button {
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    border: none;
    color: white;
    border-radius: 5px;
    background-color: var(--primary500);
    margin-bottom: 25px;
  }

  button:hover {
    background-color: var(--hover);
    transition: background-color 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
