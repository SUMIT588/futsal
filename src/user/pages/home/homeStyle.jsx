import styled from "styled-components";

export const HomeWrapper = styled.div`


display:flex;
font-family:Montserrat;


a{
  text-decoration: none;
}


.firstContainer{
  width:45vw;
  padding: 20px;
}
  

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color:var(--secondary500);
  font-family: Bruno Ace SC;
  
}

p {
  font-size: 16px;
  margin-bottom: 40px;
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--secondary500);

}

.card-text {
  font-size: 14px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background-color: var(--primary500);
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #0069d9;
}

.secondContainer{
  padding: 20px;
  width: 35vw;
}

img{
  width: 100%;
}




`