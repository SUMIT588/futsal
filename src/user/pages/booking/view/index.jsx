import { useDispatch, useSelector } from "react-redux";

import { BookingWrapper } from "../bookingStyle";
import { CustomCalendar } from "../../../../components/calendar/view";
import { Table } from "../../../../components/table/view";
import { getBooking } from "../../../../store/slice/bookingSlice.js";
import { getCloseBooking } from "../../../../store/slice/getCloseBookingSlice";
import { useEffect } from "react";
import { useState } from "react";

export const Booking = () => {
  const { date } = useSelector((state) => state.calendarSlice);
  const { closeData } = useSelector((state) => state.getCloseBookingSlice);

  const [isLargeEqual, setIsLargeEqual] = useState(false);

  const dispatch = useDispatch();

 

  const { booking } = useSelector((state) => state.bookingSlice);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const presentDate = `${year}-${month}-${day}`;

  const formattedData = booking?.map((item, index) => {
    const startDate = new Date(item.start_time);
    const endDate = new Date(item.end_time);

    const startTime = startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const endTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return {
      id: index + 1,
      booking_date: item.booking_date,
      start_time: startTime,
      end_time: endTime,
    };
  });

  
  const selectedDate = new Date(date);

  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

 useEffect(() => {
   dispatch(getBooking(date));
   dispatch(getCloseBooking(date));
   if (
     selectedYear < currentYear ||
     (selectedYear === currentYear && selectedMonth < currentMonth) ||
     (selectedYear === currentYear &&
       selectedMonth === currentMonth &&
       selectedDay < currentDay)
   ) {
     setIsLargeEqual(true);
   } else if (
     selectedYear === currentYear &&
     selectedMonth === currentMonth &&
     selectedDay === currentDay
   ) {
     setIsLargeEqual(false);
   } else {
     setIsLargeEqual(false);
   }
 }, [date]);

 console.log(isLargeEqual)

  return (
    <BookingWrapper>
      <h3>'Pick Date'</h3>

      <CustomCalendar />

      {closeData || isLargeEqual? (
        <p className="closeData">{closeData}</p>
      ) : (
        <>
          <div className="notice">
            <div className="time">
              <h2>
                Booking Opening Hour : <span>7:00 am to 8:00 pm</span>
              </h2>
            </div>
            <p>Date : {date}</p>

            <div>
              <div className="notBooked">
                {!booking && <h4>All slot available </h4>}
              </div>

              {booking && (
                <table className="table">
                  <caption>Already Booked Slot</caption>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formattedData?.map((row) => (
                      <tr>
                        <td>{row.start_time}</td>
                        <td>{row.end_time}</td>
                        <td className="booked">Booked</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="tableBox"><Table date={date} /></div>
        </>
      )}
    </BookingWrapper>
  );
};
