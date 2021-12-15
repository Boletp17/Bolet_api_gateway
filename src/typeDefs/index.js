// call all typeDefs
const boletTypesDefs        = require('./boletTypeDefs')
const accountTypesDefs      = require('./accountTypeDefs')
const categoriesTypesDefs   = require('./categoriesTypeDefs')

const schemaArrays          = [boletTypesDefs, accountTypesDefs, categoriesTypesDefs];
module.exports              = schemaArrays;