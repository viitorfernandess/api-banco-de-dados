const { query } = require("../database")

class Product {
    constructor(productRow) {
        this.id = productRow.id
        this.name = productRow.name
        this.description = productRow.description
        this.price = productRow.price
        this.stockQuantity = productRow.stock_quantity
        this.isActive = productRow.is_active
        this.createdAt = productRow.created_at
        this.updatedAt = productRow.updated_at
    }

    static async findAll() {
        const result = await query( `SELECT * FROM products;`)
        return result.rows.map((row) => new Product(row))
    }
}

module.exports = Product