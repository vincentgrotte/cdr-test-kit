import https from 'https';
import { RegisterService } from '../services/register-service.js';
import {
    SPEC_URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES,
    SPEC_URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY,
    SPEC_URL_REGISTER_DATA_RECIPIENTS,
    SPEC_URL_REGISTER_DATA_RECIPIENTS_STATUSES,
    SPEC_URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
    SPEC_URL_REGISTER_JWKS
} from '../spec/spec-endpoints.js';
import {
    URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES,
    URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY,
    URL_REGISTER_DATA_RECIPIENTS,
    URL_REGISTER_DATA_RECIPIENTS_STATUSES,
    URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
    URL_REGISTER_JWKS
} from '../util/input-parameters.js';
import { checkEndpoint } from './check-endpoint.js';
import {
    SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_SUMMARY,
    SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_STATUSES,
    SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS,
    SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS_STATUSES,
    SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
    SPEC_RESPONSE_REGISTER_JWKS
} from '../spec/spec-responses.js';


export const endpoints = [
    {
        handler: 'getDataHolderBrandsSummary',
        specUrl: SPEC_URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY,
        targetUrl: URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY,
        specResponse: SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_SUMMARY
    },
    {
        handler: 'getDataRecipients',
        specUrl: SPEC_URL_REGISTER_DATA_RECIPIENTS,
        targetUrl: URL_REGISTER_DATA_RECIPIENTS,
        specResponse: SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS
    },
    {
        handler: 'getDataRecipientsStatuses',
        specUrl: SPEC_URL_REGISTER_DATA_RECIPIENTS_STATUSES,
        targetUrl: URL_REGISTER_DATA_RECIPIENTS_STATUSES,
        specResponse: SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS_STATUSES
    },
    {
        handler: 'getDataHolderBrandsStatuses',
        specUrl: SPEC_URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES,
        targetUrl: URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES,
        specResponse: SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_STATUSES
    },
    {
        handler: 'getSoftwareProductsStatuses',
        specUrl: SPEC_URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
        targetUrl: URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES,
        specResponse: SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES
    },
    {
        handler: 'getJwks',
        specUrl: SPEC_URL_REGISTER_JWKS,
        targetUrl: URL_REGISTER_JWKS,
        specResponse: SPEC_RESPONSE_REGISTER_JWKS
    }
];

export const checkRegisterNoAuth = async () => {

    // Skip auth if possible
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });

    // Initialize Services
    const registerService = new RegisterService(httpsAgent);

    const compliant = [];
    const succeeded = [];
    const failed = [];
    
    let nonCompliantMsgs = [];

    for (const endpoint of endpoints) {

        const checkEndpointResult = await checkEndpoint(
            registerService,
            endpoint.handler,
            endpoint.specUrl,
            endpoint.targetUrl,
            endpoint.specResponse
        );

        if (checkEndpointResult.isFailed) {
            failed.push(endpoint.targetUrl);
        } else {
            succeeded.push(endpoint.targetUrl);
        }
    
        if (checkEndpointResult.isCompliant) {
            compliant.push(endpoint.targetUrl);
        } else {
            nonCompliantMsgs = nonCompliantMsgs.concat(checkEndpointResult.nonCompliantMsgs);
        }

    }

    return {
        checkRegisterNoAuthCompliant: compliant,
        checkRegisterNoAuthNonCompliant: nonCompliantMsgs,
        checkRegisterNoAuthSucceeded: succeeded,
        checkRegisterNoAuthFailed: failed
    }

};
