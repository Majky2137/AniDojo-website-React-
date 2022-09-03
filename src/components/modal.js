import React from 'react';
import {useState, useEffect} from 'react';
import './css/modal.css';
import {Link, useParams} from 'react-router-dom';
import LoadData from './/loadData';
import { Change_Status, Spin_button, Date_button } from './list_buttons';

const Modal = ({closeModal}) => {


    return (
        <div className='modal_wrapper'>
        <div className="modal list_editor">
        <div className="modal_content">
          <div className="modal_header">
            <i className="fa-solid fa-xmark close_modal openEditor_btn" onClick={ () => closeModal(false)}></i>
            <div className='modal_header_content'>

            </div>
          </div>
          <div className="modal_body">
            <div className='modal_inputs_wrapper'>
                <div className='modal_form status'>
                    <div className='modal_input_title'>Status</div>
                    <Change_Status />
                </div>

                <div className='modal_form rating'>
                    <div className='modal_input_title'>Rating</div>
                    <Spin_button/>
                </div>

                <div className='modal_form activ_progress'>
                    <div className='modal_input_title'>Actual progress</div>
                    <Spin_button/>
                </div>

                <div className='modal_form start'>
                    <div className='modal_input_title'>Start date</div>
                    <Date_button/>
                </div>
                
                <div className='modal_form finish'>
                    <div className='modal_input_title'>Finish date</div>
                    <Date_button/>
                </div>

                <div className='modal_form rewatches'>
                    <div className='modal_input_title'>Rewatches</div>
                    <Spin_button/>
                </div>


            </div>
          </div>
        </div>
      </div>
      </div>


    
    );
}
export default Modal;