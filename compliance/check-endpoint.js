import { conditionalLog } from '../util/conditional-log.js';
import { checkResponse } from './check-response.js';


export const checkEndpoint = async (service, handler, specUrl, targetUrl, specResponse) => {

    let isCompliant = false;
    let isFailed = true;
    let nonCompliantMsgs = [];
    
    try {

        const response = await service[handler]();
        conditionalLog(`${handler} [RESPONSE]`);
        conditionalLog(response);
        conditionalLog(`${handler} [SPEC]`);
        conditionalLog(specResponse);
        isFailed = false;

        if (specUrl == targetUrl) {
            isCompliant = true;
        } else {
            nonCompliantMsgs.push(
                targetUrl + ' should be ' + specUrl
            );
        }

        const checkResponseResult = checkResponse(response, specResponse);

        if (checkResponseResult.length > 0) {
            isCompliant = false;
            nonCompliantMsgs = nonCompliantMsgs.concat(
                checkResponseResult.map((msg) => {
                    return `${msg} in response from ${specUrl}`;
                })
            );
        }

    } catch (err) {
        
        conditionalLog(err);

    }

    return {
        isCompliant,
        isFailed,
        nonCompliantMsgs
    }

};

