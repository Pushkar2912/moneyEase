import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TYPES } from '../../utils/types';
import { createtransaction as createTransactionFn } from '../../slices/transactions';
import { createTransaction } from '../../api/transactions';
import { TbArrowRight } from 'react-icons/tb'

const TransactionForm = () => {

    const categories = useSelector((state) => state.category.categories)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [categoryId, setCategoryId] = useState(categories.find((category) => category.name === 'Other').id)
    const [type, setType] = useState('expense');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleCategoryIdChange = (e) => {
        setCategoryId(e.target.value)
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = {
            name,
            amount: parseInt(amount),
            type,
            categoryId
        }
        const { data } = await createTransaction(values);
        console.log("Data", data);
        dispatch(createTransactionFn(data))
        setName('');
        setAmount(0);
        
    }

    return (
        <form onSubmit={handleSubmit} className='transaction-container-frm flex flex-col justify-center gap-2 max-w-[500px] w-full'>
            <Field>
                <label className='text-sm'>Name</label>
                <input value={name} onChange={handleNameChange} className='p-2 px-4  border border-gray-300 rounded-md' type="text" placeholder='Eg: Salary' />
            </Field>
            <Field>
                <label className='text-sm'>Amount</label>
                <input value={amount} onChange={handleAmountChange} className='p-2 px-4  border border-gray-300 rounded-md' type="number" placeholder='Eg: 20000' />

            </Field>
            <Field>
                <label className='text-sm'>Types</label>
                <select value={type} onChange={handleTypeChange} className='p-2  border border-gray-300 rounded-md w-full'>
                    {
                        TYPES.map((type) => {
                            return (
                                <option value={type.value} key={type.value}>{type.name}</option>
                            )
                        })
                    }
                </select>
            </Field>
            <Field>
                <label className='text-sm'>Categories</label>
                <select value={categoryId} onChange={handleCategoryIdChange} className='p-2  border border-gray-300 rounded-md w-full'>
                    {
                        categories.map((category) => {
                            return (
                                <option value={category.id} key={category.name}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </Field>
            <button className='bg-blue-500 p-2 px-4 text-white font-semibold rounded-md mt-4 flex items-center justify-between' >
                Submit <TbArrowRight />
            </button>
        </form>

    )
}

export default TransactionForm

export const Field = ({ children }) => {
    return (
        <div className="flex flex-col gap-1">
            {children}
        </div>
    )
}