import React from "react";
import './Toast.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
    toast("You've Successfully Completed your Cource!");
  }

const Toast = () => {
  return (
    
      <div className="activity-complete">
        <button onClick={notify} >Activity Completed</button>
        <ToastContainer></ToastContainer>
      </div>
  );
};

export default Toast;
