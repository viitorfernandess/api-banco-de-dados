const Customer = require("../models/Customer")

const customerController = {
    // GET /customers
    index: async (req, res) => {
        const customers = await Customer.findAll()
        return res.json(customers)
    },

    
}