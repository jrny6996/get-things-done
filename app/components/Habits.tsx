//@ts-nocheck
import React, { useState } from 'react'
import Card from './Card'
import ListCard from './ListCard'
import HabitModal from './HabitModal'
import Modal from './Modal'



function Habits() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    let userHabits = [{'key': 1,'name': "Running", "streak": 0},{'key': 2,'name': "Coding", "streak": 11},{'key': 3,'name': "Weight lifting", "streak": 2},]


    const handleOpening = () => {
        setSelectedItem(userHabits)
        setModalOpen(true)
    }
    return (
        <Card>
            <div className='h-[400px]'>
            <h2>Habits</h2>
            <hr />
            {userHabits.map((item, index) => (
                <div className="my-2">

                <ListCard >
                    <div className='grid grid-cols-2 px-1' onClick={handleOpening}>
                        <h3>{item.name}</h3> <button className='justify-self-end'>{item.streak}</button>

                    </div>
                </ListCard>
                </div>
                

            ))}
            <ul>
                
            </ul>

             { modalOpen && <HabitModal closeModal={setModalOpen} habits ={userHabits.id}/> } 
            </div>
        
        </Card >)
}

export default Habits