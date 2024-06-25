import React, {useEffect, useState} from 'react'
import CarCard from './CarCard'
import CarCardSkelton from './CarCardSkelton'
import BookingModal from '../CarBooking/BookingModal'

function CarsList(props: any) {
    const [selectedCar, setSelectedCar] = useState<any>([]);
    return (
        <div className='grid grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4 text-black'>
            { /*<CarCardSkelton/>*/}
            {props.carsList.map((car: any, index: number) => (
                <div key={index}
                     onClick={() => {
                         (window as any).my_modal_4.showModal();
                         setSelectedCar(car)
                     }}>
                    <CarCard car={car}/>
                </div>
            ))
            }
            {/* {isLoaded?
        [1,2,3,4,5].map((item)=>(
          <CarCardSkelton/>  
        ))
        :null}

        {/* You can open the modal using ID.showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <BookingModal car={selectedCar} locations={props.locations}/>
            </dialog>
        </div>
    )
}

export default CarsList