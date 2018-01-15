/* Add your actions here */

function openModal(id){
  return {
    type: 'OPEN_MODAL',
    id
  }
}

function closeModal(){
  return {
    type: 'CLOSE_MODAL'
  }
}

function nameChange(name){
  return {
    type: 'NAME_CHANGE',
    name
  }
}

function phoneChange(phone){
  return {
    type: "PHONE_CHANGE",
    phone
  }
}

export { openModal, closeModal, nameChange, phoneChange}
