import React from 'react'
import { MdClose } from "react-icons/md";

const Modal = ({ children, modalTitle, openModal, handleOpenModal, handleCloseModal, trigger, width }) => {
    return (
        <>
            {openModal && (
                <>
                    <div className='modal-overlay-container' onClick={handleCloseModal}>
                    </div>
                    <div className='modal-container flex flex-col gap-2 p-6 rounded-md' style={{ maxWidth: width, width: "100%" }}>
                        <div className='flex justify-between items-center'>
                            <div className='text-gray-800 font-semibold'>
                                {modalTitle}
                            </div>
                            <div className='modal-close p-2 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-md' onClick={handleCloseModal}>
                                <MdClose />
                            </div>
                        </div>
                        <div className="border-b"></div>
                        {children}
                    </div>
                </>


            )}
            
                {trigger}
            
        </>
    )
}

export default Modal