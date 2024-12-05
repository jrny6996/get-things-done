import React, { useState } from 'react'
import Card from './Card'
import HabitModal from './HabitModal'
import Modal from './Modal'



function Habits() {
    const [modalOpen, setModalOpen] = useState(false)
    let userHabits = [{'key': 1,'name': "Running", "streak": 0},{'key': 2,'name': "Coding", "streak": 11},{'key': 3,'name': "Weight lifting", "streak": 2},]


    const handleOpening = () => {
        setModalOpen(true)
    }
    return (
        <Card>
            <div className='h-[400px]'>
            <h2>Habits</h2>
            <hr />
            {userHabits.map((item, index) => (
                <div className="my-2">

                <Card >
                    <div className='text-gray-300 grid grid-cols-2 px-1 hover:text-green-300 ' onClick={handleOpening}>
                        <h3>{item.name}</h3> <button className='justify-self-end'>{item.streak}</button>

                    </div>
                </Card>
                </div>
                

            ))}
            <ul>
                
            </ul>

            { modalOpen && <HabitModal closeModal={setModalOpen} habits ={userHabits}/> }
            </div>
        
        </Card >)
}

export default Habits