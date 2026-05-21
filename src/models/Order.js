class Order {
    constructor(orderRow, populateCustomer, populateProducts) {
        this.id = orderRow.id
        this.customerId = orderRow.customerId
        this.total = +orderRow.total
        this.createdAt = new Date(orderRow.created_at)
        this.updatedAt = new Date(orderRow.updated_at)

        this.customer = undefined
        if (populateCustomer) {
            this.customer = populateCustomer
        }

        if (populateProduct) {
            this.products = populateProducts
        }
    }
}