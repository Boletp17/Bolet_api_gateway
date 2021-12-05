// call all typeDefs
const boletTypesDefs        = require('./boletTypeDefs')
const accountTypesDefs     = require('./accountTypeDefs')

const schemaArrays = [boletTypesDefs, accountTypesDefs];
module.exports    = schemaArrays;