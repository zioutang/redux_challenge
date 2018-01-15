//SET DEFAULT STATE APPROPRIATELY
const initState = {
  nameInput: '',
  phoneInput: '',
  modalIsOpen: false,         //if the modal is open
  idModal: -1,                //which id the modal is open for. -1 if not open for any
  timeSlots: [
    {hour: 9, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 10, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 11, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 12, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 1, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 2, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 3, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 4, scheduled: false, nameInput: '', phoneInput: ''}
  ]
}

function getIndex(hour){
  if(hour <= 12 && hour >= 9){
    return hour - 9;
  }else if(hour >=1 && hour <=4){
    return hour + 3;
  }
}


const mainReducer = (state = initState, action) => {
   //SWITCH STATEMENT TO HANDLE ACTIONS GOES HERE
   let stateCopy;
   let index;

   switch(action.type) {

     case 'OPEN_MODAL':

        stateCopy = state.timeSlots.slice();
        index = getIndex(action.id);

        return {
          modalIsOpen: !state.modalIsOpen,
          idModal: action.id,
          timeSlots: state.timeSlots,
          nameInput: stateCopy[index].nameInput,
          phoneInput: stateCopy[index].phoneInput
        }

      case 'CLOSE_MODAL':

        stateCopy = state.timeSlots.slice();
        index = getIndex(state.idModal);
        //console.log(index);

        //update that individuals NAMEINPUT AND PHONEINPUT according to state.idModal
        stateCopy[index].nameInput = state.nameInput;
        stateCopy[index].phoneInput = state.phoneInput;

        // console.log(state)
        stateCopy = state.timeSlots.slice();
        //console.log(stateCopy)

        if(stateCopy[index].nameInput.length !== 0 || stateCopy[getIndex(state.idModal)].phoneInput.length !== 0 ){
            stateCopy[index].scheduled = true;
        }else{
            stateCopy[index].scheduled = false;
        }

        return {
          modalIsOpen: !state.modalIsOpen,
          idModal: -1,
          timeSlots: stateCopy,
          nameInput: '',
          phoneInput: ''
        }

      case 'NAME_CHANGE':
        return {
          modalIsOpen: state.modalIsOpen,
          idModal: state.idModal,
          timeSlots: state.timeSlots,
          nameInput: action.name,
          phoneInput: state.phoneInput
        }

      case 'PHONE_CHANGE':
        return {
          modalIsOpen: state.modalIsOpen,
          idModal: state.idModal,
          timeSlots: state.timeSlots,
          nameInput: state.nameInput,
          phoneInput: action.phone
        }

     default:
        return state;
   }
};

export default mainReducer;
