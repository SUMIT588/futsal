import styled from "styled-components";

export const CalendarWrapper = styled.div`

width: 80%;


.react-calendar__tile{
}



// .react-calendar__navigation{
//    background-color: var(--primary500);
//    color: white;
//    border-top-right-radius: 10px;
//    border-top-left-radius: 10px;
// }

// .react-calendar__navigation__label__labelText {
//     color:white;
//     font-weight:200;
// }

.react-calendar{
    border: none;
    box-shadow:  0px -1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 0.5px 0.5px rgba(0, 0, 0, 0.19);
    width: 100%;
    border-radius: 10px;
    padding-bottom : 5px;
}

.react-calendar__month-view__weekdays abbr[title]{
    text-decoration: none;
    color: var(--grey500);
}

.react-calendar button{
    border-radius: 5px;
}


`