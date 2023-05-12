import { useDispatch, useSelector } from "react-redux";

import { CustomCalendar } from "../../../../components/calendar/view/index";
import { CustomerManagementWrapper } from "../customerManStyle";
import { customerBooking } from "../../../../store/slice/customerBooking";
import { useEffect } from "react";

export const CustomerManagement = () => {
  const { bookingData } = useSelector((state) => state.customerBookingSlice);
  const { date } = useSelector((state) => state.calendarSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerBooking(date));
  }, [date]);

  console.log(bookingData, "bookingData");

  console.log(date, "i am date");

  // Assuming you have the booking data stored in a variable named 'bookings'
  const booking = bookingData?.map((booking) => {
    if (!booking) return;
    const bookingDate = new Date(booking.booking_date).toLocaleDateString();

    const startTime = new Date(booking.start_time).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const endTime = new Date(booking.end_time).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return {
      ...booking,
      booking_date: bookingDate,
      start_time: startTime,
      end_time: endTime,
    };
  });

  return (
    <CustomerManagementWrapper>
      <CustomCalendar />
      {booking ? (
        <table className="table">
          <caption>Customer Booked Slot</caption>
          <thead>
            <tr>
              <th>SN</th>
              <th>Customer Name</th>
              <th>Contact</th>
              <th>Booking Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((row, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{row.user}</td>
                <td>{row.contact}</td>
                <td>{row.booking_date}</td>
                <td>{row.start_time}</td>
                <td>{row.end_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ): <p>No user has booked</p>}

{}
      
    </CustomerManagementWrapper>
  );
};
