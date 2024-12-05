import React from 'react'
import Modal from './Modal'

function HabitModal({closeModal, ...userHabits}) {
  return (
    <Modal>
         <div className='flex justify-end px-1'>
                <button onClick={() => closeModal(false)} className='text-gray-300 hover:text-green-300'><strong>X</strong></button>
                </div>
    <div>HabitModal</div>
    </Modal>
  )
}

export default HabitModal