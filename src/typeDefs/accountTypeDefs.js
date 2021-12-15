const { gql } = require('apollo-server')

const accountTypes = gql `
    type Account {
        username:String!
        cedula:String!
        email:String!
        phone:String!
    }

    extend type Query {
        accountByUsername(username:String!):Account!
    }
    extend type Mutation {
        deleteAccount(username:String!):String!
    }
`;
module.exports = accountTypes;