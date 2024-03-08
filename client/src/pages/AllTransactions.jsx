import React from 'react'
import Transactions from '../components/transaction/Transactions'

const AllTransactions = () => {
  return (
    <div className='transactions-container overflow-auto flex flex-col'>
        <Transactions fullHeight />
    </div>
  )
}

export default AllTransactions