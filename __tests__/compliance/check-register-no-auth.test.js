import { jest } from '@jest/globals';
import { checkRegisterNoAuth, endpoints } from '../../compliance/check-register-no-auth.js';
import { mockFetch } from '../mocks/mock-fetch.js';

describe("compliance.checkRegister (No Auth)", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('checkRegister (No Auth) should fail with tls required and no mocks', async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
        const result = await checkRegisterNoAuth();
        expect(result).toHaveProperty('checkRegisterNoAuthSucceeded');
        expect(result).toHaveProperty('checkRegisterNoAuthFailed');
        expect(result).toHaveProperty('checkRegisterNoAuthCompliant');
        expect(result).toHaveProperty('checkRegisterNoAuthNonCompliant');
        expect(result.checkRegisterNoAuthSucceeded.length).toEqual(0);
        expect(result.checkRegisterNoAuthFailed.length).toEqual(endpoints.length);

    });

    test('checkRegister (No Auth) should succeed without tls required (and mocked fetch)', async () => {

        global.fetch = mockFetch;
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const result = await checkRegisterNoAuth();
        expect(result).toHaveProperty('checkRegisterNoAuthSucceeded');
        expect(result).toHaveProperty('checkRegisterNoAuthFailed');
        expect(result).toHaveProperty('checkRegisterNoAuthCompliant');
        expect(result).toHaveProperty('checkRegisterNoAuthNonCompliant');
        expect(result.checkRegisterNoAuthSucceeded.length).toEqual(endpoints.length);
        expect(result.checkRegisterNoAuthFailed.length).toEqual(0);
        expect(result.checkRegisterNoAuthCompliant.length).toEqual(0);
        expect(result.checkRegisterNoAuthNonCompliant.length > 0).toBe(true);
    });

});