import { TableWrapper } from "../tableStyle"

export const Table = (props) => {

return (

<TableWrapper >


<table>
    
<caption>Booking Time : {props.date}</caption>    
<thead>

    <tr>
        <th>SN</th>
        <th>Booking Time </th>
        <th>Booking status</th>
        <th>Book</th>

    </tr>
</thead>

<tbody>

 <tr>
    <td>1</td> 
    <td>9:00 am</td> 
    <td>Available</td> 


 </tr>
 
 <tr>
    <td>2</td>
    <td>10 : 00 am</td>
    <td>Not Available</td> 


 </tr>


    
</tbody>
    
</table>

</TableWrapper>

)

    
}