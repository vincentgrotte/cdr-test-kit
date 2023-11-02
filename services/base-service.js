import { 
    acceptJson,
    contentTypeJson,
    contentTypeJwt,
    getSharedHeaders
} from '../util/headers.js';

import { conditionalLog } from '../util/conditional-log.js';


export class BaseService {

    constructor(httpsAgent) {
        this.httpsAgent = httpsAgent;
    }

    async callApi(method, url, headers, version, body) {

        const logId = `[services.BaseService.callApi] [${method}] ${url}`;

        conditionalLog(`${logId} STARTED.`);
        
        if (body) { conditionalLog(`${logId} body: ${body}`) }
    
        const response = await fetch(
            url,
            {
                body,
                method,
                headers,
                agent: this.httpsAgent
            },
            version
        );

        if (!response.ok) {
            
            throw new Error(`
                ${logId} => FAILED.
                Response: ${JSON.stringify(response)}
            `);

        } else {

            conditionalLog(`${logId} => SUCCEEDED.`);
        
        }
        
        return response;
        
    }

    async getJson(url, version = null) {
        
        const response = await this.callApi(
            'GET',
            url,
            {
                ...contentTypeJson,
                ...acceptJson,
                ...getSharedHeaders(version)
            },
            version
        );

        return response.json();
    
    }

    async postJson(url, version = null, body = null) {
        
        const response = await this.callApi(
            'POST',
            url,
            {
                ...contentTypeJson,
                ...acceptJson,
                ...getSharedHeaders(version)
            },
            version,
            body
        );

        return response.json();
    
    }

    async postJwt(url, version = null, body = null) {
        
        const response = await this.callApi(
            'POST',
            url,
            {
                ...contentTypeJwt,
                ...acceptJson,
                ...getSharedHeaders(version)
            },
            version,
            body
        );

        return response.json();
    
    }

}
