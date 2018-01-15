import React from 'react';
import {
  connect
} from 'react-redux';
import {
  openModal,
  closeModal,
  nameChange,
  phoneChange
} from '../actions/index.js';
import Modal from 'react-modal';
import Slot from './Slot.js'


/* Equivalent function component! */
let App = ({
    timeSlots,
    modalIsOpen,
    onOpenModal,
    idModal,
    onCloseModal,
    onNameChange,
    onPhoneChange,
    nameInput,
    phoneInput
  }) => {
    let liveName;
    let livePhone;
    return (
        <div style = {bigContainer}>
         <div style = {hf}>
             <h3>MI DAY PLANNER / TU DAY PLANNER</h3>
         </div>

         <div>
         {timeSlots.map((slot) => (
            //ADD SLOTS
            <Slot
              key = {slot.hour}
              scheduled = {slot.scheduled}
              hour = {slot.hour}
              onOpenModal = {onOpenModal}
              name = {slot.nameInput}
              phone = {slot.phoneInput}
            />
         ))}
       </div>

       <div style = {hf}>
         <div style = {{textAlign: "left"}}>
           <p>NOTES</p>
           <p style = {{height: 80, backgroundColor: 'white', borderRadius: 4}}contentEditable="true"></p>
         </div>
       </div>

       <Modal
          isOpen={modalIsOpen}
          contentLabel="Example Modal"
        >
            <div style = {bigContainer}>

              <div>
                <h2>{'QUICK!! SCHEDULE AN EVENT FOR YOUR ' + idModal + ':00 TIME SLOT'}</h2>
              </div>

              <div>
                {/* NAME */}
                <input
                    placeholder="NAME"
                    type="text"
                    value={nameInput}
                    ref={node => {liveName = node;}}
                    onChange={() => onNameChange(liveName.value)}
                />

                {/* PHONE NUMBER */}
                <input type="text"
                    placeholder = "PHONE NUMBER"
                    value={phoneInput}
                    ref={node => {livePhone = node;}}
                    onChange={() => onPhoneChange(livePhone.value)}
                />


                {/* SAVE AND CLOSE BUTTON */}
                <button onClick={() => onCloseModal()}>UPDATE CALENDAR</button>
                <button onClick={() => onCloseModal()}>CANCEL</button>
              </div>

            </div>


        </Modal>

     </div>
    )
};


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/

const mapStateToProps = (state) => {
     return {
       timeSlots: state.timeSlots,
       modalIsOpen: state.modalIsOpen,
       idModal: state.idModal,
       nameInput: state.nameInput,
       phoneInput: state.phoneInput
     };

};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenModal: (id) => dispatch(openModal(id)),
        onCloseModal: () => dispatch(closeModal()),
        onNameChange: (name) => dispatch(nameChange(name)),
        onPhoneChange: (phone) => dispatch(phoneChange(phone))
    };
};

/* MISCELLANEOUS STUFF FOR ME */

const bigContainer = {
  textAlign: 'center'
}

const hf = {
  borderRadius: 4,
  margin: 10,
  paddingTop: 2,
  paddingBottom: 4,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: '#09b3a3'
}


/* MISCELLANEOUS */




App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
