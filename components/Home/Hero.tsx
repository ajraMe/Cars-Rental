import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 
    md:grid-cols-2'>
        <div>

            <h2 className='text-[40px] md:text-[60px]
            font-bold '><span className='text-white'>Premium Car</span> <span className='text-red-600'>Rental</span>
                <span className='text-white '>  in </span> <span
                    className='text-red-600'>Au
            </span>
                <span
                    className='text-white'>str
                </span>
                <span
                    className='text-red-600'>ia
                </span>
            </h2>

            <h2 className='text-[20px] text-gray-500 pr-20 mt-5 '>Book the selected car effortlessly, Pay for driving only,
                Book the Car Now
            </h2>

        </div>
        <div>
        <Image 
        src='/hero.png'
            alt='hero'
            width={400}
            height={500}
            priority
            className='w-full object-cover align-middle'
            />
        </div>
    </div>
  )
}

export default Hero