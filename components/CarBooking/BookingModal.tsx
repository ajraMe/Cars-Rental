import React, { useEffect } from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModal({car, locations}:any) {

  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
    <div className='-b-[1px] pb-2 '>
    <h3 className=" text-[30px] font-bold text-red-600 ">
        Rent A Car Now!</h3>
    </div>
    <div className='grid grid-cols-1
    md:grid-cols-2 p-5'>
        <div>
            <CarCard car={car} />
        </div>
        <div>
           <Form car={car} locations={locations}/>
        </div>
    </div>
   
    </form>
  )
}

export default BookingModal