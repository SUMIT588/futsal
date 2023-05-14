import React, { useState } from "react";
import {
  closeBooking,
  managerCloseBooking,
} from "../../../../store/slice/closeBookingSlice";
import { useDispatch, useSelector } from "react-redux";

import { AddBookingWrapper } from "./addBookingStyle";
import { CustomCalendar } from "../../../../components/calendar/view";
import { Modal } from "../../../../components/confirmButton/modal";
import { useEffect } from "react";

export const AddBooking = () => {
  const { closeBookingDate } = useSelector((state) => state.closeBookingSlice);
  const dispatch = useDispatch();
  const { date } = useSelector((state) => state.calendarSlice);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(managerCloseBooking());
  }, [date]);

  console.log(closeBookingDate, "closeBooking");


  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmClose = async () => {
    setShowModal(false);

    const dates = { date: date };

    const res = await dispatch(closeBooking(dates)).unwrap();
    console.log(res, "closed");
    dispatch(managerCloseBooking())
  };

  const formattedDates = closeBookingDate.map((dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US");
  });

  return (
    <AddBookingWrapper>
      <CustomCalendar />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Close Futsal Facility</h5>
          <p className="card-text">Date: {date}</p>
          <button className="btn btn-danger" onClick={handleOpenModal}>
            Close
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          title="Confirm Close"
          message="Are you sure want to close futsal?"
          onConfirm={handleConfirmClose}
          onCancel={handleCloseModal}
        />
      )}

      {closeBookingDate ? (
        <table className="table">
          <caption>Customer Booked Slot</caption>
          <thead>
            <tr>
              <th>SN</th>
             <th>Closing Date</th>
            </tr>
          </thead>
          <tbody>
            {formattedDates ?.map((row, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{row}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user has booked</p>
      )}
    </AddBookingWrapper>
  );
};
