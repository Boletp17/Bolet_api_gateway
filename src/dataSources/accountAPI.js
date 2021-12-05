const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class accountAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.accountAPIurl;
    }

    async createAccount(account){
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }

    async deleteAccount(username){
        return await this.delete(`/accounts/delet/${username}`);
    }
    
    async accountByUsername(username){
        return await this.get(`/accounts/${username}`);
    }
}
module.exports = accountAPI;