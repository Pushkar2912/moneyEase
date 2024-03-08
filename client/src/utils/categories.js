const sum = (entries) => {
    let sum = 0;
    entries.forEach((entry) => sum += entry.amount)
    return sum
}


export const categoriesExpenses = (transactions, categories) => {
    // {
    //             name: 'Groceries',
    //             color: '#FF5733',
    //             value: amountGroceries
    //         }

    const categoryWiseTransaction = categories.map((category) => {
        const filteredTransactions = transactions.filter((transaction) => transaction.categoryId === category.id)
            .filter((transaction) => transaction.type === "expense");
        const total = sum(filteredTransactions);
        return {
            name: category.name,
            color: category.color,
            value: total
        }        
    })

    return categoryWiseTransaction;


    //     const transactionRent = categoires.filter((category) => category.Category.name === "Rent");
    //     const transactionGroceries = categoires.filter((category) => category.Category.name === "Groceries");
    //     const transactionDiningOut = categoires.filter((category) => category.Category.name === "Dining Out");
    //     const transactionUtilities = categoires.filter((category) => category.Category.name === "Utilities");
    //     const transactionTransportation = categoires.filter((category) => category.Category.name === "Transportation");
    //     const transactionHealthcare = categoires.filter((category) => category.Category.name === "Healthcare");
    //     const transactionInsurance = categoires.filter((category) => category.Category.name === "Insurance");
    //     const transactionEntrtainment = categoires.filter((category) => category.Category.name === "Entertainment");
    //     const transactionEducation = categoires.filter((category) => category.Category.name === "Education");
    //     const transactionClothing = categoires.filter((category) => category.Category.name === "Clothing");
    //     const transactionTravel = categoires.filter((category) => category.Category.name === "Travel");
    //     const transactionSavings = categoires.filter((category) => category.Category.name === "Savings");
    //     const transactionInvestments = categoires.filter((category) => category.Category.name === "Investments");
    //     const transactionGifts = categoires.filter((category) => category.Category.name === "Gifts");
    //     const transactionSalary = categoires.filter((category) => category.Category.name === "Salary");
    //     const transactionFreelancing = categoires.filter((category) => category.Category.name === "Freelancing");
    //     const transactionThirdPartyIncome = categoires.filter((category) => category.Category.name === "Third Party Income");
    //     const transactionStocks = categoires.filter((category) => category.Category.name === "Stocks");
    //     const transactionSavingsAccounts = categoires.filter((category) => category.Category.name === "Savings Accounts");
    //     const transactionCryptocurrency = categoires.filter((category) => category.Category.name === "Cryptocurrency");
    //     const transactionOther = categoires.filter((category) => category.Category.name === "Other");
    //     console.log("Transaction", transactionOther);

    //     let amountRent = 0
    //     let amountGroceries = 0
    //     let amountDiningOut = 0
    //     let amountUtilities = 0
    //     let amountTransportation = 0
    //     let amountHealthcare = 0
    //     let amountInsurance = 0
    //     let amountEntertainment
    //     let amountEducation = 0
    //     let amountClothing = 0
    //     let amountTravel = 0
    //     let amountSavings = 0
    //     let amountInvestments = 0
    //     let amountGifts = 0
    //     let amountSalary = 0
    //     let amountFreelancing = 0
    //     let amountThirdPartyIncome = 0
    //     let amountStocks = 0
    //     let amountSavingsAccounts = 0
    //     let amountCryptocurrency = 0
    //     let amountOther = 0

    //     transactionRent.forEach((transaction) => {
    //         return amountRent = amountRent + transaction.amount
    //     });

    //     transactionGroceries.forEach((transaction) => {
    //         return amountGroceries = amountGroceries + transaction.amount
    //     })

    //     transactionDiningOut.forEach((transaction) => {
    //         return amountDiningOut = amountDiningOut + transaction.amount
    //     });

    //     transactionUtilities.forEach((transaction) => {
    //         return amountUtilities = amountUtilities + transaction.amount
    //     });

    //     transactionTransportation.forEach((transaction) => {
    //         return amountTransportation = amountTransportation + transaction.amount
    //     });

    //     transactionHealthcare.forEach((transaction) => {
    //         return amountHealthcare = amountOther + transaction.amount
    //     });

    //     transactionInsurance.forEach((transaction) => {
    //         return amountInsurance = amountInsurance + transaction.amount
    //     });

    //     transactionEntrtainment.forEach((transaction) => {
    //         return amountEntertainment = amountEntertainment + transaction.amount
    //     });

    //     transactionEducation.forEach((transaction) => {
    //         return amountEducation = amountEducation + transaction.amount
    //     });

    //     transactionClothing.forEach((transaction) => {
    //         return amountClothing = amountClothing + transaction.amount
    //     });
    //     transactionTravel.forEach((transaction) => {
    //         return amountTravel = amountTravel + transaction.amount
    //     });

    //     transactionSavings.forEach((transaction) => {
    //         return amountSavings = amountSavings + transaction.amount
    //     });

    //     transactionInvestments.forEach((transaction) => {
    //         return amountInvestments = amountInvestments + transaction.amount
    //     });

    //     transactionGifts.forEach((transaction) => {
    //         return amountGifts = amountGifts + transaction.amount
    //     });

    //     transactionSalary.forEach((transaction) => {
    //         return amountSalary = amountSalary + transaction.amount
    //     });

    //     transactionFreelancing.forEach((transaction) => {
    //         return amountFreelancing = amountFreelancing + transaction.amount
    //     });

    //     transactionThirdPartyIncome.forEach((transaction) => {
    //         return amountThirdPartyIncome = amountThirdPartyIncome + transaction.amount
    //     });

    //     transactionStocks.forEach((transaction) => {
    //         return amountStocks = amountStocks + transaction.amount
    //     });
    //     transactionSavings.forEach((transaction) => {
    //         return amountSavings = amountSavings + transaction.amount
    //     });
    //     transactionCryptocurrency.forEach((transaction) => {
    //         return amountCryptocurrency = amountCryptocurrency + transaction.amount
    //     });
    //     transactionOther.forEach((transaction) => {
    //         return amountOther = amountOther + transaction.amount
    //     });

    //     const values = [
    //         {
    //             name: 'Groceries',
    //             color: '#FF5733',
    //             value: amountGroceries
    //         },
    //         {
    //             name: 'Dining Out',
    //             color: '#FFC300',
    //             value: amountDiningOut
    //         },
    //         {
    //             name: 'Rent',
    //             color: '#4CAF50',
    //             value: amountRent
    //         },
    //         {
    //             name: 'Utilities',
    //             color: '#3498DB',
    //             value: amountUtilities
    //         },
    //         {
    //             name: 'Transportation',
    //             color: '#E74C3C',
    //             value: amountTransportation
    //         },
    //         {
    //             name: 'Healthcare',
    //             color: '#9B59B6',
    //             value: amountHealthcare
    //         },
    //         {
    //             name: 'Insurance',
    //             color: '#27AE60',
    //             value: amountInsurance
    //         },
    //         {
    //             name: 'Entertainment',
    //             color: '#F1C40F',
    //             value: amountEntertainment
    //         },
    //         {
    //             name: 'Education',
    //             color: '#8E44AD',
    //             value: amountEducation
    //         },
    //         {
    //             name: 'Clothing',
    //             color: '#E67E22',
    //             value: amountClothing
    //         },
    //         {
    //             name: 'Travel',
    //             color: '#3498DB',
    //             value: amountTravel
    //         },
    //         {
    //             name: 'Savings',
    //             color: '#2ECC71',
    //             value: amountSavings
    //         },
    //         {
    //             name: 'Investments',
    //             color: '#34495E',
    //             value: amountInvestments
    //         },
    //         {
    //             name: 'Gifts',
    //             color: '#D35400',
    //             value: amountGifts
    //         },
    //         {
    //             name: 'Salary',
    //             color: '#27AE60',
    //             value: amountSalary
    //         },
    //         {
    //             name: 'Freelancing',
    //             color: '#E74C3C',
    //             value: amountFreelancing
    //         },
    //         {
    //             name: 'Third Party Income',
    //             color: '#3498DB',
    //             value: amountThirdPartyIncome
    //         },
    //         {
    //             name: 'Stocks',
    //             color: '#8E44AD',
    //             value: amountStocks
    //         },
    //         {
    //             name: 'Savings Accounts',
    //             color: '#3498DB',
    //             value: amountSavingsAccounts
    //         },
    //         {
    //             name: 'Cryptocurrency',
    //             color: '#E74C3C',
    //             value: amountCryptocurrency
    //         },
    //         {
    //             name: 'Other',
    //             color: '#BDC3C7',
    //             value: amountOther
    //         },
    //     ]
    //     return{
    //         values
    //     }
}