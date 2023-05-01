import styled from 'styled-components'

const ErrorWrapper = styled.div`
color: #dc3545;
font-size: 0.8rem;
margin-top: 10px;
margin-bottom:10px;

`;

const ErrorMessage = (props) => {

   

    return (
        <ErrorWrapper>
        <div>{props.errorMessage}</div>
        </ErrorWrapper>
    );
    
}


export default ErrorMessage;