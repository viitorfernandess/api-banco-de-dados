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

    // GET /customers/:id
    show: async (req, res) => {
        const customer = await Customer.findById(req.params.id)
        if (!customer) return res.status(404).json({ message: "Customer not found! " })
        res.json(customer)
    }

}