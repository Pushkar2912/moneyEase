const db = require('../config/db');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId: req.user.id
            }
        })
        return res.json({
            transactions
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.getTransaction =  async (req, res) => {
    const id = req.params.id
    try {
        const transaction = await db.transaction.findUniqueOrThrow({
            where: {
                id,
                userId: req.user.id
            }
        })
        return res.json({
            transaction
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.createTransaction = async (req, res) => {
    try {
        const transaction = await db.transaction.create({
            data: {
                ...req.body,
                userId: req.user.id
            }
        })
        console.log("Transaction", transaction);
        return res.json({
            message: "Transaction created sucessfully",
            transaction
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.updateTransaction = async (req, res) => {
    const id = req.params.id
    try {
        const transaction = await db.transaction.update({
            where: {
                id
            },
            data: {
                ...req.body
            }
        })
        return res.json({
            message: "Transaction updated sucessfully",
            transaction
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.deleteTransaction = async (req, res) =>{
    const id = req.params.id
    try {
        const transcation = await db.transaction.delete({
            where: {
                id
            }
        })
        return res.json({
            message:"Transaction deleted sucessfully",
            transcation
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
