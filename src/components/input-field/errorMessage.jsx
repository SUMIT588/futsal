import ErrorWrapper from "./errorStyle";


const ErrorMessage = (props) => {

   

    return (
        <ErrorWrapper>
        <div>{props.errorMessage}</div>
        </ErrorWrapper>
    );
    
}

export default ErrorMessage;