import 'react-calendar/dist/Calendar.css';

import Calendar from "react-calendar";
import { CalendarWrapper } from '../calendarStyle';

export const CustomCalendar = (props) => {
   
  
    
    return(
   

<CalendarWrapper>
    
<Calendar onChange = {props.onChange} value = {props.value} className = 'calendar' />

</CalendarWrapper>
        
    
        )
}