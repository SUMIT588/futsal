import styled from 'styled-components';

export const DashboardWrapper = styled.div`

   
    width: 200px;
    height: 100vh;
    background-color: var(--bg-color);
    overflow-x: hidden;
    display:fixed;
    left:0px;
    top : 0px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    
  

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    .active{
      opacity: 0.7;
      background-color: var(--primary500);
      color: white;
    }
    
    li {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 12px 16px;
      font-size: 16px;
      color: #333;
      cursor: pointer;
      color: var(--grey500);
      padding-left : 10px;

      
      :hover{
        color: white;
        opacity: 0.7;
        background-color: var(--primary500);
      } 
    }
  }
  
  a {
    color: #333;
    text-decoration: none;
  }
  
`

export const Wrapper = styled.div`

display:flex;
width: 100%;

.dashboard-content {
  width: 100%;
}

`