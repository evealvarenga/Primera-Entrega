import { promises, existsSync } from 'fs'

class CartManager {
    constructor(path) {
        this.path = path
    }

    async addCart(product) {
        try {
            const products = await this.getCart()
            let id
            if (!products.length) {
                id = 1
            } else {
                id = products[products.length - 1].id + 1
            }
            const newProduct = { id, ...product };
            products.push(newProduct);
            await promises.writeFile(this.path, JSON.stringify(products))
            return newProduct
        } catch (error) {
            return error
        }
    }

    async getCart(queryObj) {
        const { limit } = queryObj;
        try {
            if (existsSync(this.path)) {
                const productFile = await promises.readFile(this.path, 'utf-8')
                const productData = JSON.parse(productFile);
                return limit ? productData.slice(0, +limit) : productData;
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async getCartByID(id) {
        try {
            const products = await this.getCart()
            const product = products.find(u => u.id === id)
            return product;
        } catch (error) {
            return error
        }
    }

}

export default CartManager;