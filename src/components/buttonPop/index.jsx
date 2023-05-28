import React, { useEffect, useState } from "react";
import { addBooking, getBooking } from "../../store/slice/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

import { ButtonPopWrapper } from "./buttonPopStyle";

export const ButtonPopUp = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { date } = useSelector((state) => state.calendarSlice);

  const openModal = () => {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    overlay.style.display = "block";
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    overlay.style.display = "none";
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    setIsSubmitted(false);
  };

  const handleClick = async () => {
    if (props.startTime === 'Invalid Date' || props.endTime === 'Invalid Date') {
      alert("All field required");
      console.log(props)
       }

    try {
      const res = await dispatch(addBooking(props)).unwrap();
      setIsSubmitted(false);
      dispatch(getBooking(date));

      if (!res.error) {
        alert("Booking Successful");
      } else if (res.error) {
        alert(res.error);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const onClickHandle = () => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      openModal();
    }
  }, [isSubmitted]);

  console.log(isSubmitted, "submit");

  return (
    <ButtonPopWrapper>
      {isSubmitted ? (
        <div>
          <div id="overlay"></div>
          <div id="modal">
            <h2>Booking</h2>
            <p>Are you sure want to book</p>
            <button onClick={handleClick}>Confirm</button>
            <button id="closeModalButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <button id="openModalButton" onClick={onClickHandle}>
          Book
        </button>
      )}
    </ButtonPopWrapper>
  );
};
