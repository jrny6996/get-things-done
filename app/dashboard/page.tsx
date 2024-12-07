"use client"

import React, {useState} from 'react'
import Card from '../components/Card'
import Habits from '../components/Habits'
import Tasks from '../components/Tasks'
import Calories from '../components/Calories'
import Money from '../components/Money'

function page() {



  return (
    <>    
      <div className='h-screen p-10'>

        <div className='grid grid-cols-7 gap-5 h-96'>
          <div className='col-span-2'>
            <Habits/>
          </div>
          <div className='col-span-3'>
           <Tasks/>
          </div>
          <div className='grid-rows-2 col-span-2 align-middle h-full gap-5 grid'>
           <Calories/>
           <Money/>
          </div>
          <Card>Hello</Card>

        </div>
      </div>
      </>
  )
}

export default page