import Button from "../../button/button";
import { ButtonPopUp } from "../../buttonPop";
import KhaltiCheckout from "khalti-checkout-web";
import { TableWrapper } from "../tableStyle";
import config from "../../khalti/khaltiConfig";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Table = (props) => {
  const checkout = new KhaltiCheckout(config);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useDispatch();

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const convertToAMPM = (timeString) => {
    const timeParts = timeString.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    const formattedTime = time.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return formattedTime;
  };

  const formattedStartTime = convertToAMPM(startTime);
  const formattedEndTime = convertToAMPM(endTime);

  const bookingData = {
    startTime: formattedStartTime,
    endTime: formattedEndTime,
    date: props.date,
  };


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
              <input value={props.date} readOnly />
            </td>
            <td>
              <ButtonPopUp
                startTime={bookingData.startTime}
                endTime={bookingData.endTime}
                date={props.date}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TableWrapper>
  );
};
