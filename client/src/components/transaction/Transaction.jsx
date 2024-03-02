import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Modal from '../custom/Modal';
import TransactionUpdateForm from './TransactionUpdateForm';
import Avatar from '../custom/Avatar';
import { useSelector } from 'react-redux';

const Transaction = ({ transaction }) => {

    const categories = useSelector((state) => state.category.categories)
    const category = categories.find((category) => category.id === transaction?.categoryId)
    const [openUpdateTransactionModal, setOpenUpdateTransactionModal] = useState(false);

    const handleOpenUpdateTransactionModal = () => {
        setOpenUpdateTransactionModal(true)
    }

    const handleCloseUpdateTransactionModal = () => {
        setOpenUpdateTransactionModal(false)
    }

    return (
        <>
            <div className='border border-gray-300  rounded-md flex flex-col gap-2' onClick={handleOpenUpdateTransactionModal}>
                <div className='transaction-container-upper flex items-center gap-4'>
                    <Avatar name={category?.name} />
                    <div className=' flex flex-col'>
                        <div className='font-semibold'>
                            {transaction?.name}
                        </div>
                        <div className='text-sm text-gray-500'>
                            {category?.name}
                        </div>
                    </div>
                </div>
                <div className="border-b"></div>
                <div className='transcation-container-lower flex justify-between items-center'>
                    <div className='text-sm font-semibold'>
                        Rs. {transaction?.amount.toFixed(2)}
                    </div>

                    <div className={`${transaction?.type === "expense" ? "text-red-500 bg-red-200" : "text-green-500 bg-green-200"} text-xs p-2 rounded-lg font-semibold flex items-center`}>
                        <div>
                            <GoDotFill />
                        </div>
                        <div className='capitalize'>
                            {transaction?.type}
                        </div>
                    </div>
                </div>

            </div>
            <Modal modalTitle={"UPDATE TRANSACTION"}
                openModal={openUpdateTransactionModal}
                handleOpenModal={handleOpenUpdateTransactionModal}
                handleCloseModal={handleCloseUpdateTransactionModal}
            >
                <TransactionUpdateForm transaction={transaction} />
            </Modal>
        </>
    )
}

export default Transaction