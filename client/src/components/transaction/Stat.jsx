import React from 'react'

const Stat = ({
    label,
    value
}) => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='text-gray-600 text-xs'>
                {label}
            </div>
            <div className='font-semibold'>
                Rs. {value.toFixed(2)}
            </div>
        </div>
    )
}

export default Stat