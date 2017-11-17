/**
 * 
 * Small service for calling GraphQL API server
 */
class ApiService {

    /**
     * define base url and field schemas here
     * @returns {ApiService}
     */
    constructor() {
        this.apiUrl = 'http://localhost:3000/graphql';
        this.userFields = `{id, first_name, last_name, email, department, country}`;
        this.todoFields = `{id title completed user {first_name, last_name}}`;
    }

    /**
     * Generic function to fetch data from server
     * @param {string} query
     * @returns {unresolved}
     */
    async getGraphQlData(query) {
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: {query}
        });
        const data = await res.json();
        return data;
    }

    async getUsers(params={}) {
        const data = await this.getGraphQlData(
            `ùsers ${this.paramsToString(params)} {${this.userFields}}`
        );
        return data;
    }
    
    async getTodos(params={}) {
        const data = await this.getGraphQlData(
            `todos ${this.paramsToString(params)} {${this.todoFields}}`
        );
        return data;
    }

    paramsToString(params) {
        let paramString = '';
        if(params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for(let key in params) {
                tmp.push(`${key}:${params[key].toString()}`);
            }
            paramString = `(${tmp.join()})`;
        }
        return paramString;
    }


}

export default new ApiService();
