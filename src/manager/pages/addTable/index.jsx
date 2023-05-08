import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import React, { useState } from "react";

import { AddTableWrapper } from "./addTableStyle";
import { useEffect } from 'react';

// import { useAddBookingMutation } from '../../../store/service/booking';


export const AddTable = (props) => {


  // const [addBookingRequest, addBookingResponse] = useAddBookingMutation();
  
  const [data, setData] = useState([]);

  const [editingRow, setEditingRow] = useState(null);

  const [deletingIndex, setDeletingIndex] = useState(null);

  const [column1Value, setColumn1Value] = useState("");
  const [column2Value, setColumn2Value] = useState("");
  

  const handleColumn1InputChange = (event) => {
    setColumn1Value(...column1Value,event.target.value);
  };

  const handleColumn2InputChange = (event) => {
    setColumn2Value(...column2Value, event.target.value);
  };

  useEffect(()=>{
 console.log(addBookingResponse)   
  },[addBookingResponse])

 

// for adding new value to table

  const handleAddRow = () => {
    console.log('here')
    if (column1Value.trim() === "" || column2Value.trim() === "" ) {
      alert('all field required')
      return; 
    }    
    
    const newRow = {
      column1: column1Value,
      column2: column2Value,      
    };

    if (editingRow !== null) {
      setData(
        data.map((row, index) =>
          index === editingRow ? newRow : row
        )
      );
      setEditingRow(null);
    } else {
      setData([...data, newRow]);
    }

    // if(addBookingResponse?.isSuccess){      
    //   const startTimes = column1Value;      
    //   const endTimes = column2Value;
    //   const dates = props.date      
    //   const tableData = [startTimes, endTimes, dates]
    //   addBookingRequest(tableData);      
    //    }
    //    console.log(addBookingResponse);

    setColumn1Value("");
    setColumn2Value("");    
  };

  // for editing table data

  const handleEditRow = (index) => {
    setEditingRow(index);
    setColumn1Value(data[index].column1);
    setColumn2Value(data[index].column2);
    alert(`Editing row ${index}`);
  };


  // for deleting table data 

  const handleDeleteRow = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this row?");
    if (confirmDelete) {
      setData(data.filter((_, i) => i !== index));
      setDeletingIndex(null);
    }
  };

  
  return (
    <AddTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={editingRow === index ? "editing" : ""}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{props.date}</td>
             <td> <button className = "edit" onClick={() => handleEditRow(index)}><AiFillEdit /></button> </td>
             <td> <button className="delete" onClick={() => handleDeleteRow(index)}><AiFillDelete /></button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="time"
                name="column1"
                placeholder="New Data"
                value={column1Value}
                onChange={handleColumn1InputChange}
              />
            </td>
            <td>
              <input
                type="time"
                name="column2"
                placeholder="New Data"
                value={column2Value}
                onChange={handleColumn2InputChange}
              />
            </td>
            <td>
              <input
                type="text"
                value={props.date}
                readOnly
               
              />
            </td>

            <td>
              <button onClick={handleAddRow}> Add </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </AddTableWrapper>
  );
};