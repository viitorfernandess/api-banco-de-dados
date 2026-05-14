const { query } = require("pg")

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    static async findAll() {
        const result = await query(`SELECT * FROM customers;`)
        return result.rows.map((row) => new Customer(row))
    }

    static async findById(id) {
        const result = await query(`SELECT * FROM customers WHERE id = $1`, [id])
        if (!result.rows[0]) return null
        return new Customer(result.rows[0])
    }

    static async create(attributes) {
        const result = await query(`INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *;`,
            [attributes.name, attributes.email]
        )

        return new Customer(result.rows[0])
    }
}