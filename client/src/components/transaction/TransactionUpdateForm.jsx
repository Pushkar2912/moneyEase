import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TYPES } from '../../utils/types';
import { updateTransaction } from '../../api/transactions';
import { updateTransaction as updateTransactionFn } from '../../slices/transactions';
import { Field } from './TransactionForm';



const TransactionUpdateForm = ({ transaction, handleCloseModal }) => {

    const categories = useSelector((state) => state.category.categories)
    const dispatch = useDispatch();
    const [name, setName] = useState(transaction?.name);
    const [amount, setAmount] = useState(transaction?.amount);
    const [categoryId, setCategoryId] = useState(transaction?.categoryId)
    const [type, setType] = useState(transaction?.type);

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
        const { data } = await updateTransaction(transaction.id, values);
        console.log("Data", data);
        dispatch(updateTransactionFn(data))
        handleCloseModal();
    }

    return (
        <form onSubmit={handleSubmit} className='transaction-container-frm flex flex-col justify-center gap-2'>

            <Field>
                <label className=' text-sm'>Name</label>
                <input value={name} onChange={handleNameChange} className=' p-2  border border-gray-300 rounded-md' type="text" placeholder='Eg: Salary' />
            </Field>
            <Field>
                <label className=' text-sm'>Amount</label>
                <input value={amount} onChange={handleAmountChange} className=' p-2  border border-gray-300 rounded-md' type="number" placeholder='Eg: 20000' />
            </Field>
            <Field>
                <label className=' text-sm'>Types</label>
                <select value={type} onChange={handleTypeChange} className=' p-2  border border-gray-300 rounded-md'>
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
                <label className=' text-sm'>Categories</label>
                <select value={categoryId} onChange={handleCategoryIdChange} className=' p-2  border border-gray-300 rounded-md'>
                    {
                        categories.map((category) => {
                            return (

                                <option value={category.id} key={category.name}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </Field>
            <button className='bg-blue-500 p-2 text-white font-semibold rounded-md mt-4'>Submit</button>
        </form>

    )
}

export default TransactionUpdateForm