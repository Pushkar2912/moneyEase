import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { CiWallet } from "react-icons/ci";
import { calculateStatistics } from '../../utils/transactions';
import Stat from './Stat';
const Statistics = () => {

    const transactions = useSelector((state) => state.transaction.transactions);
    const { income, expense, investment, total } = useMemo(() => {
        return calculateStatistics(transactions);
    }, [transactions])

    return (
        <div className='bg-white flex flex-col gap-4 p-4'>
            <div className='flex justify-between items-center'>
                <div className='text-gray-800 font-semibold'>
                    Statistics
                </div>
                <div className='flex justify-center items-center gap-2 bg-gray-200 h-10 w-40 rounded-md'>
                    <div className='text-black'>
                        <CiWallet size={20} />
                    </div>
                    <div className='font-semibold'>
                        Rs. {total.toFixed(2)}
                    </div>
                </div>
            </div>
            <div className="border-b"></div>
            <div className='flex justify-between w-full'>
                <Stat label={"INCOME"} value={income} />
                <div className="border-r"></div>
                <Stat label={"EXPENSE"} value={expense} />
                <div className="border-l"></div>
                <Stat label={"INVESTMENT"} value={investment} />
            </div>
        </div>
    )
}

export default Statistics