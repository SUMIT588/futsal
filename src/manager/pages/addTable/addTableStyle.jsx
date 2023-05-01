import styled from "styled-components";

export const AddTableWrapper = styled.div`


padding: 40px;
width: 100%;

input{
    border-radius: 5px;
    height: 30px;
    border: 1px solid var(--primary500);
    
}

input:focus{
    border: 2px solid var(--background);
    outline:none;
}

input:hover{
    border : 2px solid var(--primary500);
}

input::placeholder{
    padding: 5px;
}

table {
    border-collapse: collapse;
      padding: 10px;
      width: 100%;
      box-shadow:  0px -1px 2px 0 rgba(0, 0, 0, 0.2), 0 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.19);
      border-radius: 10px;
    }
      
    thead {
      background-color: var(--primary500);
      color: white;
      font-weight: 200;
      text-transform: capitalize;
    }
      
    td {
      text-align: center;
      color : var(--grey500);
    }
  
     td{
      border: 1px solid #ddd;
      padding: 10px;
    }
    
    th{
        padding: 10px;
    }

   
      button{
        padding: 10px 20px;
        border:none;
        color:white;
        border-radius:5px;
        background-color: var(--background)
        }

        .edit {
          background-color: var(--secondary500);
        }

        .delete {
          background-color: var(--tertiary500)
        }
    
    button:hover {
        background-color: var(--hover);
        transition: background-color 0.3s ease;
      }
    
.editing{
  background: #e5f5e5;
}
      
`