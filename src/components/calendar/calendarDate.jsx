import { useSelector } from "react-redux"

export const Date = () =>{

const{date} = useSelector(state=> state.calendarSlice)

console.log(date, 'here I am date')
    
    return(

        {date}
    )
}