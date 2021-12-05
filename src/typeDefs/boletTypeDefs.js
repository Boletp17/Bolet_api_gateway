const { gql } = require('apollo-server');

const boletTypes = gql `
    type Tokens {
        refresh:String!
        access:String!
    }

    type Access {
        access:String!
    }

    input Refresh {
        refresh:String!
    }

    input CredentialsInput {
        email:String!
        password:String!
    }

    input SignUpInput {
        username:String!
        cedula:String!
        email:String!
        phone:String!
        password:String!
        repassword:String!
    }

    type UserDetail {
        id:Int!
        username:String!
        cedula:String!
        email:String!
        telefono:String!
    }

    input UserUpdate {
        id:Int!
        password:String!
        name:String!
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
    }

    type Mutation {
        signUpUser(userInput:SignUpInput!):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:Refresh!):Access!
        updateUser(user:UserUpdate!):UserDetail!
        deleteUser(userId:Int!):String!
    }

`;
module.exports = boletTypes;