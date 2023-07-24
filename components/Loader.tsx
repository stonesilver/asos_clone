import React from 'react'

const Loader: React.FC = () => {
    return (
        <div className='w-fit relative flex justify-center items-center'>
            <div className='loader w-[70px] h-[70px] rounded-full border-[5px] border-solid border-black border-t-gray-100'>

            </div>
            <div className="absolute top-0 text-5xl text-black leading-none mt-[4px] flex justify-center items-center font-medium">
                a
            </div>
        </div>
    )
}

export default Loader