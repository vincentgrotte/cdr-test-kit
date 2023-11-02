import { getSharedHeaders } from '../../util/headers.js';

describe("headers.getSharedHeaders", () => {

    test('Should not populate x-v and x-min-v headers', () => {
    
        expect(getSharedHeaders()).toEqual({
            'x-v': undefined,
            'x-min-v': undefined    
        })

    });

    test('Should populate x-v and x-min-v with 1', () => {
    
        expect(getSharedHeaders(1)).toEqual({
            'x-v': 1,
            'x-min-v': 1    
        })

    });

    test('Should populate x-v and x-min-v with 2', () => {
    
        expect(getSharedHeaders(2)).toEqual({
            'x-v': 2,
            'x-min-v': 2    
        })

    });

    test('Should populate x-v and x-min-v with 3', () => {
    
        expect(getSharedHeaders(3)).toEqual({
            'x-v': 3,
            'x-min-v': 3    
        })

    });

});
