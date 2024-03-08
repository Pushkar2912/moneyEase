import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from 'react-redux'
import { calculateStatistics } from '../utils/transactions'
import { categoriesExpenses } from '../utils/categories'

const Graphs = () => {

    const transactions = useSelector((state) => state.transaction.transactions);
    const { values: userData } = calculateStatistics(transactions);

    const categories = useSelector((state) => state.category.categories);
    const categoryWiseTransactions = categoriesExpenses(transactions, categories);


    const [userDataChart, setUserDataChart] = useState({
        labels: userData.map((data) => data.name),
        datasets: [
            {
                label: "Transaction",
                data: userData.map((data) => data.value),
                backgroundColor: ["#18b718", "#1e90ff", "#f97474"]
            }
        ]
    })

    const [userDataChartCategory, setUserDataChartCategory] = useState({
        labels: categoryWiseTransactions.map((transaction) => transaction.name),
        datasets: [
            {
                label: "Categories Transactions",
                data: categoryWiseTransactions.map((data) => data.value),
                backgroundColor: categoryWiseTransactions.map((transaction) => transaction.color)
            }
        ]
    })

    return (
        <div className={'graphs-container flex gap-2 p-2 overflow-auto'}>
            <div className='flex flex-col flex-1 gap-4'>
                <div>
                    Transactions Analysis
                </div>

                {/* <div className='w-[500px] border p-2'>
                        <Bar data={userDataChart} />
                    </div> */}
                <div className=' w-full border p-2'>
                    <Pie data={userDataChart} />
                </div>

            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <div>
                    Categories Analysis
                </div>

                {/* <div className='w-[500px] border p-2'>
                        <Bar data={userDataChartCategory} />
                    </div> */}
                <div className='w-full border p-2'>
                    <Pie data={userDataChartCategory} />
                </div>

            </div>
        </div>
    )
}

export default Graphs