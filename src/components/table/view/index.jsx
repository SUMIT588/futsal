import Button from "../../button/button";
import KhaltiCheckout from "khalti-checkout-web";
import { TableWrapper } from "../tableStyle";
import config from "../../khalti/khaltiConfig";
import { useState } from "react";

export const Table = (props) => {
  const checkout = new KhaltiCheckout(config);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
    
  };


  const handleClick = () =>{
    const bookingData = [startTime, endTime, props.date]

    console.log(bookingData, 'hey')
    checkout.show({ amount: 100000 });
  }
  

  return (
    <TableWrapper>
      <table>
        <caption>Booking Time : {props.date}</caption>
        <thead>
          <tr>
            <th> Start Time </th>
            <th>End Time</th>
            <th>Date</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                type="time"
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </td>
            <td>
              <input
                type="time"
                value={endTime}
                onChange={handleEndTimeChange}
              />
            </td>
            <td>
              <input value={props.date} />
            </td>
            <td>
              <Button
                name="Book"
                onClick={handleClick}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TableWrapper>
  );
};
