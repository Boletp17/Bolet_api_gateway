const { ApolloServer} = require('apollo-server');

const typeDefs        = require('./typeDefs');
const resolvers       = require('./resolvers');
const authentication  = require('./utils/authentication');
const boletAPI        = require('./dataSources/boletAPI');
const accountAPI      = require('./dataSources/accountAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources:() => ({
        boletAPI    : new boletAPI(),
        accountAPI  : new accountAPI(),
    }),
    introspection: true,
    playground   : true
});

server.listen( process.env.PORT || 4000 ).then(({url}) => {
        console.log(`Server ready at ${url}`);
    }
);