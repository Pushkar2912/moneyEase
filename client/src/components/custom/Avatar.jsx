import React from 'react'

const Avatar = ({ name }) => {
    return (
        <div className='bg-gray-300 h-10 w-10 rounded-md flex items-center justify-center'>
            {name?.charAt(0).toUpperCase()}
        </div>
    )
}

export default Avatar