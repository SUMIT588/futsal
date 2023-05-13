import { useDispatch, useSelector } from "react-redux";

import { BookingWrapper } from "../bookingStyle";
import { CustomCalendar } from "../../../../components/calendar/view";
import { Table } from "../../../../components/table/view";
import { getBooking } from "../../../../store/slice/bookingSlice.js";
import { useEffect } from "react";

export const Booking = () => {
  const { date } = useSelector((state) => state.calendarSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooking(date));
  }, [date]);

  const { booking } = useSelector((state) => state.bookingSlice);

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

  console.log(formattedData, "formate");

  return (
    <BookingWrapper>
      <h3>'Pick Date'</h3>

      <CustomCalendar />

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

      <div className="tableBox">
        <Table date={date} />
      </div>
    </BookingWrapper>
  );
};
