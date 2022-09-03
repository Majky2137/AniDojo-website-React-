import React from 'react';
import '../components/css/toasts.css';
import $ from "jquery";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle,useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Change_Status } from './list_buttons';



    const notify = () => {
      toast.dark("", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: true,
        
      });
      return ;
    };



  export default notify;