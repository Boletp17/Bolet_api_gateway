const accountResolver = {
    Query: {
        accountByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.boletAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.accountAPI.accountByUsername(username);
            else
                return null;
        }
    },
    Mutation: {
        deleteAccount: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.boletAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.accountAPI.deleteAccount(username);
            else
                return null;
        }
    }
};

module.exports = accountResolver