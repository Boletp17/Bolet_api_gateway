const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class categoriesAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.categoriesAPIurl;
    }

    async getLatestProducts(products){
        return await this.get('/latest-products/', products);
    }

    async getProductDetail(category_slug, product_slug){
        return await this.get(`/products/${category_slug}/${product_slug}/`);
    }

    async getCategoryDetail(category_slug){
        return await this.get(`/products/${category_slug}/`);
    }
}
module.exports = categoriesAPI;