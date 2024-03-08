import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Modal from '../custom/Modal';
import TransactionUpdateForm from './TransactionUpdateForm';
import Avatar from '../custom/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { checkTransaction } from '../../slices/transactions';


const Transaction = ({ transaction }) => {

    const categories = useSelector((state) => state.category.categories)
    const category = categories.find((category) => category.id === transaction?.categoryId)
    const [openUpdateTransactionModal, setOpenUpdateTransactionModal] = useState(false);
    const dispatch = useDispatch();
    const checkCard = useSelector((state) => (state.transaction.cardsCheck))
    const checked = Boolean(checkCard.find((checkedTransaction) => checkedTransaction === transaction.id))



    const handleOpenUpdateTransactionModal = () => {
        setOpenUpdateTransactionModal(true)
    }

    const handleCloseUpdateTransactionModal = () => {
        setOpenUpdateTransactionModal(false)
    }

    const handleCheckChange = (e) => {
        e.stopPropagation();
        dispatch(checkTransaction(transaction.id))
    }

    return (
        <>
            <div className='border border-gray-300  rounded-md flex flex-col gap-2 p-3 group' onClick={handleOpenUpdateTransactionModal}>
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

                    
                    
                        <div onClick={(e) => e.stopPropagation()}className={`flex-1 justify-end items-start h-full ${checkCard.length === 0 ? "hidden group-hover:flex" : "flex"}`}>
                            <input value={checked} onChange={handleCheckChange} type="checkbox" />
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
                width={400}
            >
                <TransactionUpdateForm transaction={transaction} handleCloseModal={handleCloseUpdateTransactionModal} />
            </Modal>
        </>
    )
}

export default Transaction