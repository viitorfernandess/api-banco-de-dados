const Customer = require("../models/Customer")

const customerController = {
    // GET /customers
    index: async (req, res) => {
        const customers = await Customer.findAll()
        return res.json(customers)
    },

    // POST /customers
    create: async (req, res) => {
        const newCustomer = await Customer.create(req.body)
        res.status(201).json(newCustomer)
    },

}