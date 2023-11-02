import https from 'https';
import { jest } from '@jest/globals';
import { checkEndpoint } from '../../compliance/check-endpoint.js';
import { RegisterService } from '../../services/register-service.js';
import { mockFetch } from '../mocks/mock-fetch.js';
import {
    SPEC_URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES
} from '../../spec/spec-endpoints.js';
import {
    SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES
} from '../../spec/spec-responses.js';
import { 
    URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES
} from '../../util/input-parameters.js';


describe("compliance.checkEndpoint", () => {

    const httpsAgent = new https.Agent();
    const registerService = new RegisterService(httpsAgent);

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('checkEndpoint should fail with tls required and no mocks', async () => {
        
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
        const result = await checkEndpoint(
            registerService.getSoftwareProductsStatuses,
            SPEC_URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
            URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
            SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES
        );
        expect(result).toHaveProperty('isCompliant');
        expect(result).toHaveProperty('isFailed');
        expect(result).toHaveProperty('nonCompliantMsgs');
        expect(result.nonCompliantMsgs.length).toEqual(0);

    });

    test('checkEndpoint should succeed without tls required (and mocked fetch)', async () => {
        
        global.fetch = mockFetch;
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const result = await checkEndpoint(
            registerService.getSoftwareProductsStatuses,
            SPEC_URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
            URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
            SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES
        );
        expect(result).toHaveProperty('isCompliant');
        expect(result).toHaveProperty('isFailed');
        expect(result).toHaveProperty('nonCompliantMsgs');
        expect(result.nonCompliantMsgs.length).toEqual(0);

    });

});