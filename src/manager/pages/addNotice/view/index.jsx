import React, { useState } from "react";
import {
  addNotice,
  deleteManagerNotice,
  getManagerNotice,
  getManagerNoticeId,
  updateManagerNotice,
} from "../../../../store/slice/noticeSlice";
import { useDispatch, useSelector } from "react-redux";

import AddNoticeWrapper from "./addNoticeStyled";
import { AiFillDelete } from "react-icons/ai";
import CardBox from "../../../../components/noticeCardBox/cardBox";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { ModalWrapper } from "../../../../components/confirmButton/modalStyle";
import { useEffect } from "react";

const AddNotice = () => {
  const { noticeData } = useSelector((state) => state.noticeSlice);
  const { updateNotice } = useSelector((state) => state.noticeSlice);

  const [showModal, setShowModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerNotice());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("");
    setNotice("");

    const noticeValue = {
      title: title,
      message: notice,
    };

    const _id = updateNotice?._id;

    if (isEdit) {
      const res = await dispatch(
        updateManagerNotice({ _id, noticeValue })
      ).unwrap();
      if (res) {
        dispatch(getManagerNotice());
        setIsEdit(false);
      }
    } else {
      const res = await dispatch(addNotice(noticeValue)).unwrap();
      if (res) {
        dispatch(getManagerNotice());
        
      }
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    setNotice(e.target.value);
  };

  const handleDeleteCard =  () => {
  setShowModal(true);
  };

  const handleEditCard = (e) => {
    setIsEdit(true);
    console.log(e.target.value, "hello");
    const id = e.target.value;

    dispatch(getManagerNoticeId(id));
    console.log(updateNotice);

    console.log(updateNotice, "updatedNotice");

    setTitle(updateNotice?.title);
    setNotice(updateNotice?.message);
  };

  const handleConfirmClose = async (e) =>{

    
    const _id = e.target.value;
    const res = await dispatch(deleteManagerNotice(_id)).unwrap();
    if (res) {
      dispatch(getManagerNotice());
    }
    setShowModal(false);
  }

  const handleCloseModal = () =>{
    setShowModal(false);
    
  }


  

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
        <button type="submit">{isEdit ? "Resubmit" : "Submit"}</button>
      </form>

      <div className="cardBox">
        {noticeData
          ? noticeData.map((notice, index) => (
              <CardBox
                key={index}
                title={notice.title}
                message={notice.message}
                date={notice.datePublished}
              >
                <div className="button">
                  {/* Delete button */}
                  <button
                    value={notice?._id}
                    className="delete"
                    onClick={handleDeleteCard}
                  >
                    <AiFillDelete />
                  </button>
                  {/* Update button */}
                  <button
                    value={notice?._id}
                    className="update"
                    onClick={handleEditCard}
                  >
                    <MdOutlineSystemUpdateAlt />
                  </button>
                  {/* Add button */}
                </div>

                {showModal && (
                  <ModalWrapper>
                    <div className="modal">
                      <div className="modal-content">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <p className="modal-message">
                          Are you sure want to delete?
                        </p>
                        <div className="modal-buttons">
                          <button
                            value={notice._id}
                            className="btn btn-primary"
                            onClick={handleConfirmClose}
                          >
                            Confirm
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={handleCloseModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </ModalWrapper>
                )}
              </CardBox>
            ))
          : ""}
      </div>
    </AddNoticeWrapper>
  );
};

export default AddNotice;
