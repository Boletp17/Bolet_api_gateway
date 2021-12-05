const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class boletAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.boletAPIurl;
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('/user/', user);
    }

    async getUser(userId){
        return await this.get(`/user/${userId}/`);
    }

    async updateUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id;
        return await this.put(`/user/update/${userId}/`, user);
    }

    async deleteUser(userId){
        return await this.delete(`/user/delete/${userId}`, user);
    }

    async authRequest(credentials){ //Poner atención en esta parte
        credentials = new Object(credentials);
        return await this.post('/login/', credentials);
    }

    async refreshToken(token){
        token = new Object(token);
        return await this.post('/refresh/', token);
    }
}
module.exports = boletAPI;