const boletResolver      = require('./boletResolver')
const accountResolver    = require('./accountResolver')
const categoriesResolver = require('./categoriesResolver')
const lodash             = require('lodash')

const resolvers  = lodash.merge(boletResolver, accountResolver, categoriesResolver);
module.exports   = resolvers;