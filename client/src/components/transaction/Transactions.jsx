import React, { useState } from 'react'
import Modal from '../custom/Modal'
import TransactionForm from './TransactionForm'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'


const Transactions = () => {

    const transactions = useSelector((state) => state.transaction.transactions);
    

    const [openAddTransactionModal, setOpenAddTransactionModal] = useState(false);

    const handleTransactionOpenModalChange = () => {
        setOpenAddTransactionModal(true);
    }

    const handleTransactionCloseModalChange = () => {
        setOpenAddTransactionModal(false)
    }

    return (
        <div className='flex-1 bg-white rounded-md'>

            <div className="flex items-center justify-between">
                <h1 className="text-lg text-slate-800 font-semibold">Transactions</h1>
                <Modal modalTitle={"Add Transaction"}
                    openModal={openAddTransactionModal}
                    handleOpenModal={handleTransactionOpenModalChange}
                    handleCloseModal={handleTransactionCloseModalChange}
                    trigger={
                        <button onClick={handleTransactionOpenModalChange} className='bg-blue-500 p-2 px-4 text-white font-semibold rounded-md'>
                            Add Transaction
                        </button>
                    }
                    width={400}
                    >
                    <TransactionForm />
                </Modal>
            </div>
            <div className="border-t my-5"></div>
            <div className='transactions-grid'>
                {
                    transactions.map((transaction) => {
                        return (

                            <Transaction key={transaction.id} transaction={transaction} />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Transactions