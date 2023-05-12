import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-extraneous-dependencies

const LoadingWrapper = styled.div`
  z-index: 10;
  background-color: white;
  opacity: 0.6;
  height: 100vh;
  width: 100%;
  position: absolute;
  .center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Loading() {
  const { isFetching } = useSelector((state) => state.authSlice);

  console.log(isFetching);
  if(isFetching){
    
    return (
      <LoadingWrapper>
      <div className="center">
        <ReactLoading type="bubbles" color="#000" height="10%" width="10%" />
      </div>
    </LoadingWrapper>
  );
}
else{
  return null
}
}

export default Loading;
