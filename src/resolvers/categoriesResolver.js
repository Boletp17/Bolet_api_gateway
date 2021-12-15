const categoryResolver = {
    Query: {
        latestProducts: async (_, {}, {dataSources}) => {
            return await dataSources.categoriesAPI.getLatestProducts();
        },
        productDetail: async (_, {category_slug, product_slug}, {dataSources}) => {
            return await dataSources.categoriesAPI.getProductDetail( category_slug, product_slug );

        },
        categoryDetail: async (_, {category_slug}, {dataSources}) => {
            return await dataSources.categoriesAPI.getCategoryDetail( category_slug );
        }
    },
}

module.exports = categoryResolver;