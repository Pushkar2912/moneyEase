const db = require('../config/db');

exports.getCategories = async (req, res) => {
    
    try {
        const categories = await db.category.findMany({
            where: {
                userId: req.user.id
            }
        })
        return res.json({
            categories
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message

        })
    }
}