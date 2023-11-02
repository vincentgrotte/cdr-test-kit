import https from 'https';
import { jest } from '@jest/globals';

import { mockFetch } from '../mocks/mock-fetch.js';
import { RegisterService } from '../../services/register-service.js';
import { BaseService } from '../../services/base-service.js';
import { registerEndpointsNoAuth } from '../../util/endpoints.js';
import {
    XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY,
    XV_REGISTER_GET_DATA_HOLDERS,
    XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES,
    XV_REGISTER_GET_DATA_RECIPIENTS,
    XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES,
    XV_REGISTER_GET_JWKS,
    XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES,
} from '../../util/input-parameters.js';


describe("services.RegisterService", () => {

    beforeAll(() => {
        global.fetch = mockFetch;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const httpsAgent = new https.Agent();
    const registerService = new RegisterService(httpsAgent);

    test('RegisterService.getDataHolderBrandsSummary flow should resolve', async () => {

        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getDataHolderBrandsSummary();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy).toHaveBeenCalled();
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.DATA_HOLDER_BRANDS_SUMMARY);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY);

    });

    test('RegisterService.getDataHolders flow should resolve', async () => {

        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getDataHolders();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy).toHaveBeenCalled();
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.DATA_HOLDER_BRANDS);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_DATA_HOLDERS);

    });

    test('RegisterService.getDataHolderBrandsStatuses flow should resolve', async () => {
    
        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getDataHolderBrandsStatuses();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy).toHaveBeenCalled();
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.DATA_HOLDER_BRANDS_STATUSES);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES);

    });

    test('RegisterService.getDataRecipients flow should resolve', async () => {
    
        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getDataRecipients();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy).toHaveBeenCalled();
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.DATA_RECIPIENTS);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_DATA_RECIPIENTS);

    });

    test('RegisterService.getDataRecipientsStatuses flow should resolve', async () => {
    
        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getDataRecipientsStatuses();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy).toHaveBeenCalled();
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.DATA_RECIPIENTS_STATUSES);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES);

    });

    test('RegisterService.getJwks flow should resolve', async () => {
    
        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getJwks();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.JWKS);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_JWKS);

    });
    
    test('RegisterService.getSoftwareProductsStatuses flow should resolve', async () => {
    
        const getJsonSpy = jest.spyOn(BaseService.prototype, 'getJson');
        const result = await registerService.getSoftwareProductsStatuses();
        expect(result).toEqual({ mock: 'result' });
        expect(getJsonSpy.mock.calls[0][0]).toEqual(registerEndpointsNoAuth.SOFTWARE_PRODUCTS_STATUSES);
        expect(getJsonSpy.mock.calls[0][1]).toEqual(XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES);

    });

});