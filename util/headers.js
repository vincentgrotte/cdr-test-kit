const ACCEPT = 'Accept';
const CONTENT_TYPE = 'Content-Type';

export const acceptJson = {
    [ACCEPT]: 'application/json'
}

export const contentTypeJson = {
    [CONTENT_TYPE]: 'application/json'
}

export const contentTypeJwt = {
    [CONTENT_TYPE]: 'application/jwt'
}

export const getSharedHeaders = (xV) => {

    return {
        'x-v': xV,
        'x-min-v': xV
    }

}

