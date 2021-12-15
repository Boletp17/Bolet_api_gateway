const { gql } = require('apollo-server');

const categoriesTypes = gql `
    type LatestProducts {
        id:Int
        name:String
        date_funtion:String
        hour:String
        place:String
        city:String
        get_absolute_url:String
        responsable:String
        price:Int
        get_image:String 
        get_thumbnail:String
    }

    type ProductDetail {
        id:Int!
        name:String!
        date_funtion:String!
        hour:String!
        place:String!
        city:String!
        get_absolute_url:String!
        responsable:String!
        price:Int!
        get_image:String! 
        get_thumbnail:String!
    }

    type CategoryDetail {
        id:Int!
        name:String!
        get_absolute_url:String!
        products:[ProductDetail]
    }

    extend type Query {
        latestProducts(id:[Int]):[LatestProducts]!
        productDetail(category_slug:String!, product_slug:String!):ProductDetail!
        categoryDetail(category_slug:String!):CategoryDetail!
    }

`;
module.exports = categoriesTypes