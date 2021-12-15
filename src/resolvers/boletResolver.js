const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.boletAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, { dataSources }) => {
            const accountInput = {
                username : userInput.username,
                cedula   : userInput.cedula,
                email    : userInput.email,
                telefono : userInput.telefono
            }

            const boletInput = {
                username   : userInput.username,
                cedula     : userInput.cedula,
                email      : userInput.email,
                telefono   : userInput.telefono,
                password   : userInput.password,
                repassword : userInput.repassword
            }
            const userResponse = await dataSources.boletAPI.createUser(boletInput);
            if(userResponse.hasOwnProperty('refresh') && userResponse.hasOwnProperty('access'))
                await dataSources.accountAPI.createAccount(accountInput);
            return userResponse;
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.boletAPI.boletRequest(credentials);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.boletAPI.refreshToken(token);
        },
        updateUser: async(_, { userInput }, { dataSources, userIdToken }) => {
            if(userInput.id == userIdToken)
                return await dataSources.boletAPI.updateUser(userInput);
            else
                return null;
        },
        deleteUser: async(_, { userId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.boletAPI.deleteUser(userId);
            else
                return null;
        }
    }
};

module.exports = userResolver;