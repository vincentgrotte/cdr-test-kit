import { jest } from '@jest/globals';
import { checkResponse } from '../../compliance/check-response.js';


describe("compliance.checkResponse", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('checkResponse should return an empty array given no response spec or body', () => {

        const result = checkResponse(
            {},
            {}
        );

        expect(result.length).toEqual(0);

    });

    test('checkResponse should return an empty array given a matching spec and body', () => {
        
        const result = checkResponse(
            { mock: 'response' },
            { mock: 'response' }
        );

        expect(result.length).toEqual(0);

    });

    
    test('checkResponse should return a correctly populated array of differences', () => {
        
        const result = checkResponse(
            { mock: 'response' },
            { wrong: 'response' }
        );

        expect(result.length).toEqual(1);

    });

    test('checkResponse should correctly process nested objects', () => {
        
        // missing key

        const result1 = checkResponse(
            { mock: 'response', check: { wrong: 'key' } },
            { mock: 'response', check: { nested: 'string' } },
        );

        expect(result1.length).toEqual(1);
        expect(result1[0]).toEqual('Missing string body.check.nested');

        // wrong key type

        const result2 = checkResponse(
            { mock: 'response', check: { nested: {} } },
            { mock: 'response', check: { nested: 'string' } },
        );

        expect(result2.length).toEqual(1);
        expect(result2[0]).toEqual('Type of body.check.nested is object and should be string');

        // nested stuff

        const result3 = checkResponse(
            { 
                mock: 'response',
                check: {
                    nested: {
                        moreNested: {}
                    }
                },
                check2: {
                    nested: {
                        moreNested: {}
                    }
                }
            },
            { 
                mock: 'response',
                check: {
                    nested: {
                        moreNested: {}
                    }
                },
                check2: {
                    nested: {
                        moreNested: 'string', // bad type
                        missingObject: {}, // missing
                        missingString: 'string' // missing
                    }
                }
            },
        );

        expect(result3.length).toEqual(3);
        expect(result3[0]).toEqual('Type of body.check2.nested.moreNested is object and should be string');
        expect(result3[1]).toEqual('Missing object body.check2.nested.missingObject');
        expect(result3[2]).toEqual('Missing string body.check2.nested.missingString');

        
    });

});