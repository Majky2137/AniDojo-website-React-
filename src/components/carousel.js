import React, { Component }from 'react';
import '../App.css';
import './css/carousel.css';
import {motion} from 'framer-motion';
import mainbase from '../data/anibase';
import ModalVideo from 'react-modal-video'






class Slider extends React.Component{
  
  constructor(props){
    
    super(props);
    
      this.state = {
        currentVideoId: null,
        isOpen: false
      };
      this.openModal = this.openModal.bind(this);
      this.updateVideoId = this.updateVideoId.bind(this);
    }
    openModal () {
      this.setState({isOpen: true})
      if(this.state.isOpen === true){
        document.body.style.overflow="hidden";
      }
      else {
        document.body.style.overflow = 'unset';
      }
    }
    updateVideoId(currentVideoId){
      this.setState({currentVideoId:currentVideoId});
    }

    
    render () {
return(
    <motion.div className='container'>
      <div className='section_text_cont'>
      </div>
    <motion.div  className='carousel_container' whileTap={{cursor:"grabbing"}} >
        <motion.div  drag="x" dragConstraints={{right:0, left: -1100 }} className='carousel' >
                {mainbase[0].map((item) => {
                  console.log(item.video);
                    return(
                        <motion.div  className='item' key={item.id}>
                            <div className='over_card'>
                  <button onClick={() => {this.openModal(this.state.isOpen); this.updateVideoId(item.video); }} className="item_pv_button" >
                  <span></span>
                  </button>
                  </div>
                <img src={item.mainimage} alt="cannot display"/>
                <div className='title'>{item.title}</div>
              
                </motion.div>
                
                );
                })}
               
       </motion.div>
    </motion.div>
    <ModalVideo  channel='youtube' autoplay isOpen={this.state.isOpen} videoId={this.state.currentVideoId} onClose={() => this.setState({isOpen: false})} />
    </motion.div>

);
}
}

export default Slider;