import React, { useState } from "react";
import { addNotice, getManagerNotice } from "../../../../store/slice/noticeSlice";
import { useDispatch, useSelector } from "react-redux";

import AddNoticeWrapper from "./addNoticeStyled";
import { AiFillDelete } from "react-icons/ai";
import CardBox from "../../../../components/noticeCardBox/cardBox";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useEffect } from "react";

const AddNotice = () => {
  const {noticeData} = useSelector((state) => state.noticeSlice)
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getManagerNotice())
    console.log(noticeData, 'i am data')
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("");
    setNotice("");

    const noticeValue = {
      title: title,
      message: notice,
    };

    console.log(noticeValue, "noticeValue");

    const res = await dispatch(addNotice(noticeValue)).unwrap();
    if (res) {
      console.log(res, "response");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    setNotice(e.target.value);
  };

  const handleAddCard = () => {
    const newCard = {
      title: "New Card Title",
      message: "New Card Message",
      date: "New Card Date",
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleUpdateCard = (index, updatedCard) => {
    // Logic to update a card at the specified index
    const updatedCards = [...cards];
    updatedCards[index] = updatedCard;
    setCards(updatedCards);
  };

  return (
    <AddNoticeWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <h2>Title</h2>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the title"
          />
        </div>

        <h2>Add Notice</h2>
        <textarea
          value={notice}
          onChange={handleChange}
          placeholder="Enter your notice here"
          rows="5"
          cols="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="cardBox">
        <CardBox>
          {/* Delete button */}
          <button className="delete" onClick={handleDeleteCard}>
            <AiFillDelete />
          </button>
          {/* Update button */}
          <button className="update" onClick={handleUpdateCard}>
            <MdOutlineSystemUpdateAlt />
          </button>
          {/* Add button */}
          <button onClick={handleAddCard}>Add Card</button>
        </CardBox>
      </div>
    </AddNoticeWrapper>
  );
};

export default AddNotice;
