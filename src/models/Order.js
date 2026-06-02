class Order {
    constructor(orderRow, populateCustomer, populateProducts) {
        this.id = orderRow.id
        this.customerId = orderRow.customer_id
        this.total = +orderRow.total
        this.createdAt = new Date(orderRow.created_at)
        this.updatedAt = new Date(orderRow.updated_at)

        this.customer = undefined
        if (populateCustomer) {
            this.customer = populateCustomer
        }

        if (populateProducts) {
            this.products = populateProducts
        }
    }

    static async findAll() {
        const result = await query(`
    SELECT
        orders.*,
        customers.id AS "customer.id",
        customers.name AS "customer.name",
        customers.email AS "customer.email",
        customers.created_at AS "customer.created_at",
        customers.updated_at AS "customers.updated_at"
    FROM orders JOIN customers ON customers.id = orders.customer_id;     
    `)
        return result.rows.map((row) => new Order(row))
    }


}