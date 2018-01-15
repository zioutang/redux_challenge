import React from 'react';

let Slot = ({
  scheduled,
  hour,
  onOpenModal,
  name,
  phone
}) => {

  return (
    scheduled ?
    <div
          style = {styleScheduled}
          onClick={ () => onOpenModal(hour)}>

          <div style={{textAlign: 'left'}}>
            <div style ={{display: 'inline-block'}}>{hour + ':00 meeting with ' + name + ' [' + phone + ']'}</div>
          </div>
        </div> :
    <div
          style = {styleNotScheduled}
          onClick={ () => onOpenModal(hour)}>
          <div >
              <div style ={{display: 'inline-block'}}>{hour + ':00'}</div>
              <div style ={{display: 'inline-block'}}>{name}</div>
              <div style ={{display: 'inline-block'}}>{phone}</div>
          </div>
        </div>
  )
}



const styleScheduled = {
  backgroundColor: '#f3a8a8',
  margin: 10,
  padding: 10,
  borderRadius: 4,
}

const styleNotScheduled = {
  backgroundColor: '#a5f7a5',
  margin: 10,
  padding: 10,
  borderRadius: 4,
}



export default Slot;
