import React from 'react';
import {useState, useEffect} from 'react';
import './css/modal.scss';
import {Link, useParams, useLocation} from 'react-router-dom';
import LoadData from './/loadData';
import { Change_Status, Spin_button, Date_button, Fav_button } from './list_buttons';
import Item_anime_heading from './maincomponents/Item_anime_heading';

const Modal = ({closeModal = false, anime_id = 0}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const getData = async() => { const data = await LoadData('AnimeID', id ?? anime_id); setData(data[0]); };
 
console.log(closeModal, anime_id);

    useEffect(() => {
        if(data.length === 0)
          getData();
        
        setIsOpen(closeModal);
    }, [anime_id, closeModal]);


    if (isOpen === true) {
      document.body.style.overflowY = "hidden"
      document.body.style.overflowX = "hidden"
    }
    else {
      document.body.style.overflowY = "unset";
    };

    function resetProps(){
      anime_id = 0;
      closeModal = false;
    }

  if(isOpen === true && data != null && data !== [] && data.pv){

    
    return (
        <div className='modal_wrapper'>
        <div className="modal list_editor">
        <div className="modal_content">
          <div className="modal_header">
            <div className='overlay2'></div>
          <img src={data.banner} alt='cover'/>
            <i className="fa-solid fa-xmark close_modal openEditor_btn" onClick={ () => { setIsOpen(false); resetProps(); }}></i>
            <div className='modal_header_content'>
                <p className='modal_header_title'>{data.title}</p>
                <div className='modal_header_btns'>
                <Fav_button/>
                <button className='btn_save' onClick={ () => { setIsOpen(false); resetProps(); }}>Save</button>
                </div>
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
                    <Spin_button type={'rating'}/>
                </div>

                <div className='modal_form activ_progress'>
                    <div className='modal_input_title'>Actual progress</div>
                    <Spin_button type={'episode'}/>
                </div>

                <div className='modal_form start'>
                    <div className='modal_input_title'>Start date</div>
                    <Date_button type={'start'}/>
                </div>
                
                <div className='modal_form finish'>
                    <div className='modal_input_title'>Finish date</div>
                    <Date_button type={'end'}/>
                </div>

                <div className='modal_form rewatches'>
                    <div className='modal_input_title'>Rewatches</div>
                    <Spin_button type={'rewatches'}n/>
                </div>


            </div>
          </div>
        </div>
      </div>
      </div>


    
    );
  }
}
export default Modal;