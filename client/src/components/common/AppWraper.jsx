import React, { useEffect } from 'react'
import { getCategories } from '../../api/categories'
import { useDispatch } from 'react-redux'
import { setCategories } from '../../slices/categories';
import { getTransactions } from '../../api/transactions';
import { setTransactions } from '../../slices/transactions';

const AppWraper = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        getTransactions().then(( {data} ) => {
            dispatch(setTransactions(data))
        }).catch(err => {
            console.log(err);
        })
    },[])

    useEffect(() => {
        getCategories().then(({ data }) => {
            dispatch(setCategories(data))
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default AppWraper