import { useDispatch, useSelector } from "react-redux";

import { BookingHistoryWrapper } from "./bookingHistoryStyle";
import { getBookingHistory } from "../../../store/slice/historySlice";
import { useEffect } from "react";

export const BookingHistory = () => {

  const dispatch = useDispatch()

const {bookingHistory} =  useSelector((state) => state.bookingHistorySlice)

const auth = localStorage.getItem('auth')

const data = JSON.parse(auth)

const contact = data.contact;


const formattedBookings = bookingHistory.map((booking) => {
  const bookingDate = new Date(booking.booking_date).toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const startTime = new Date(booking.start_time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const endTime = new Date(booking.end_time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    booking_date: bookingDate,
    start_time: startTime,
    end_time: endTime,
    status: booking.status,
  };
});




useEffect(()=> {
  const res = dispatch(getBookingHistory(contact))
  console.log(bookingHistory, 'history')
},[])
  
  return (
    <BookingHistoryWrapper>
      <h2>Booked Slot</h2>
      {formattedBookings ? (
        <table className="table">
          <caption>Customer Booked Slot</caption>
          <thead>
            <tr>
              <th>SN</th>
              <th>Booking Date </th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {formattedBookings?.map((row, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{row.booking_date}</td>
                <td>{row.start_time}</td>
                <td>{row.end_time}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No booking yet</p>
      )}
    </BookingHistoryWrapper>
  );
};
