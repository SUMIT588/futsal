import React, { useEffect, useState } from "react";

import { ButtonPopWrapper } from "./buttonPopStyle";
import { addBooking } from "../../store/slice/bookingSlice";
import { useDispatch } from "react-redux";

export const ButtonPopUp = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

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
    
  };

  console.log(props, 'props')

  const onClickHandle = async () =>{
    try {
      const res = await dispatch(addBooking(props)).unwrap();
      if (res.error) {
        alert(res.error);
        console.log(res,'res')
      } else {
        setIsSubmitted(true);
        openModal();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
    
  }

  useEffect(() => {
    if (isSubmitted) {
      openModal();
    }
  }, [isSubmitted]);

  console.log(isSubmitted, 'submit')

  return (
    <ButtonPopWrapper>
      {isSubmitted ? (
        <div>
          <button onClick={handleClick}>Book</button>
          <div id="overlay"></div>
          <div id="modal">
            <h2>Booking</h2>
            <p>Click pay button for payment</p>
            <button>Pay</button>
            <button id="closeModalButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <button id="openModalButton" onClick = {onClickHandle}>Book</button>
      )}
    </ButtonPopWrapper>
  );
};
