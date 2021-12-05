const boletResolver     = require('./boletResolver')
const accountResolver   = require('./accountResolver')
const lodash            = require('lodash')

const resolvers  = lodash.merge(boletResolver, accountResolver);
module.exports   = resolvers;