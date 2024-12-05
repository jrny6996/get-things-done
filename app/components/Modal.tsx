//@ts-nocheck
import React from 'react'

function Modal({ closeModal, children}) {
    return (
        <div className='modalBackground' >
            <div className='modalContainer' >
               
                {children}


            </div>
        </div>
    )
}

export default Modal