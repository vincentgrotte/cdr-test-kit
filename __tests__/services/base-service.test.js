import https from 'https';

import { mockFetch } from '../mocks/mock-fetch.js';
import { BaseService } from '../../services/base-service.js';

describe("services.BaseService", () => {

    beforeAll(() => {
        global.fetch = mockFetch;
    });

    const httpsAgent = new https.Agent();
    const baseService = new BaseService(httpsAgent);

    test('BaseService.getJson flow should resolve', async () => {
    
        const result = await baseService.getJson(
            'https://123-fake-url.dot.com',
            1
        );

        expect(result).toEqual({ mock: 'result' });

    });

    test('BaseService.postJson flow should resolve', async () => {
    
        const result = await baseService.postJson(
            'https://123-fake-url.dot.com',
            1,
            {}
        );

        expect(result).toEqual({ mock: 'result' });

    });

    test('BaseService.postJwt flow should resolve', async () => {
    
        const result = await baseService.postJwt(
            'https://123-fake-url.dot.com',
            1,
            {}
        );

        expect(result).toEqual({ mock: 'result' });

    });

});