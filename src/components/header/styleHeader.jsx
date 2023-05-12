import styled from 'styled-components'

export const HeaderWrapper = styled.div`
position: sticky;
top: 0;
  height: 83px;
  width: 100%;
  background-color: var(--bg-color);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);



  
  .profile {
    display: flex;

    height: 100%;
    align-items: center;
    margin-left: 10px;
  }

  button {
    padding: 10px;
    border: none;
    color: white;
    border-radius: 5px;
    background-color: var(--tertiary500);
    margin-left: 10px;
  }

  button:hover {
    background-color: var(--background);
  }

  .logout {
    display: flex;
    position: absolute;
    top: 20%;
    right: 5%;
  }

  .icon {
    border-radius: 50%;
    background-color: white;
    font-size: 34px;
    color: var(--tertiary500);
  }

  p {
    margin-left: 10px;
    margin-top: 10px;
    color: var(--grey500);
  }

  .iconContainer {
    display: flex;
    position: absolute;
    top: 20%;
    left: 5%;
    font-family: Bruno Ace SC;
  }
`;

