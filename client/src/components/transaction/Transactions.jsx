import React, { useState } from 'react'
import Modal from '../custom/Modal'
import TransactionForm from './TransactionForm'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'


const Transactions = ({fullHeight}) => {

    const transactions = useSelector((state) => state.transaction.transactions);
    

    const [openAddTransactionModal, setOpenAddTransactionModal] = useState(false);

    const handleTransactionOpenModalChange = () => {
        setOpenAddTransactionModal(true);
    }

    const handleTransactionCloseModalChange = () => {
        setOpenAddTransactionModal(false)
    }

    return (
        <div className={`bg-white rounded-md p-2 flex flex-col ${fullHeight && "h-full"}`}>

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
            <div className="border-t my-[10px]"></div>
            <div className={`${fullHeight ? "all-transactions-grid" :"transactions-grid"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto`}>
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