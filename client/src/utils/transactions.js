export const calculateStatistics = (transactions) => {
    const incomeTransactions = transactions.filter((transaction) => transaction.type === "income");
    const investmentTransactions = transactions.filter((transaction) => transaction.type === "investment");
    const expenseTransactions = transactions.filter((transaction) => transaction.type === "expense")
    let income = 0;
    let investment = 0;
    let expense = 0;


    incomeTransactions.forEach(transaction => {
        return income = income + transaction.amount
    });

    investmentTransactions.forEach((transaction) => {
        return investment = investment + transaction.amount
    })

    expenseTransactions.forEach((transaction) => {
        return expense = expense + transaction.amount
    })

    let total = income - (investment + expense);
    const values = [
        {name: "Income", value: income},
        {name: "Investment", value: investment},
        {name: "Expense", value: expense},
    ]

    return {
        values,
        total,
        income, 
        expense,
        investment
    }
}