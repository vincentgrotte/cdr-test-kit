import { jest } from '@jest/globals';

export const mockFetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
        resolve({
            ok: true,
            json: () => {
                return { mock: 'result' };
            },
        });
    });
});

