import React, { useState } from 'react'
import Card from './Card'
import ListCard from './ListCard'
import TaskModal from './TaskModal'
function Tasks() {
    const [modalOpen, setModalOpen] = useState(false)
    const userTasks = [{ key: 1, "name": "Walk the dog", "isComplete": false, "estMinutes": 30 }, { key: 1, "name": "Drive to Gym", "isComplete": false, "estMinutes": 20 }]
    const handleOpening = () => {
        setModalOpen(true)
    }
    return (
        <Card>
            <div className='h-[400px]'>
            <h2>Tasks</h2>
            <hr />
            {userTasks.map((item, index) => (
                <div className="my-2">

                    <ListCard >
                        <div className='grid grid-cols-2 px-1' onClick={handleOpening}>
                            <h3>{item.name}</h3> <button className='justify-self-end'>{item.estMinutes} minutes</button>

                        </div>
                    </ListCard>
                </div>

            ))}
            </div>
            {modalOpen && <TaskModal closeModal={setModalOpen} {...userTasks}/>}
        </Card>
    )
}

export default Tasks