import React from 'react'
import Modal from './Modal'

function TaskModal({closeModal}) {
    return (
        <Modal>
        <div className='flex justify-end px-1'>
               <button onClick={() => closeModal(false)} className='text-gray-300 hover:text-green-300'><strong>X</strong></button>
               </div>
   <div>Task Modal</div>
   </Modal>
    )
}

export default TaskModal