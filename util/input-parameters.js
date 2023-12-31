// import params from '../parameters.json' assert { type: 'json' };
import fs from 'fs';

// Read JSON parameter file
const params = JSON.parse(
    fs.readFileSync(
        new URL(
            '../parameters.json',
            import.meta.url
        )
    )
);

// HOST NAMES
export const HOST_REGISTER = params.HOST_REGISTER;

// PORTS
export const PORT_REGISTER_IDP = params.PORT_REGISTER_IDP;
export const PORT_REGISTER_INFOSEC = params.PORT_REGISTER_INFOSEC;
export const PORT_REGISTER_DISCOVERY = params.PORT_REGISTER_DISCOVERY;
export const PORT_REGISTER_STATUS = params.PORT_REGISTER_STATUS;

/*
 * REGISTER
 */

// REGISTER ENDPOINT URLS (NO-AUTH)
export const URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY = params.URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY;
export const URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES = params.URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES;
export const URL_REGISTER_DATA_RECIPIENTS = params.URL_REGISTER_DATA_RECIPIENTS;
export const URL_REGISTER_DATA_RECIPIENTS_STATUSES = params.URL_REGISTER_DATA_RECIPIENTS_STATUSES;
export const URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES = params.URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES;
export const URL_REGISTER_JWKS = params.URL_REGISTER_JWKS;

// REGISTER ENDPOINT URLS (AUTH)
export const URL_REGISTER_DATA_HOLDER_BRANDS = params.URL_REGISTER_DATA_HOLDER_BRANDS;

// REGISTER ENDPOINT VERSIONS (NO-AUTH)
export const XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY = params.XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY;
export const XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES = params.XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES;
export const XV_REGISTER_GET_DATA_RECIPIENTS = params.XV_REGISTER_GET_DATA_RECIPIENTS;
export const XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES = params.XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES;
export const XV_REGISTER_GET_JWKS = params.XV_GET_JWKS;
export const XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES = params.XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES;

// REGISTER ENDPOINT VERSION (AUTH)
export const XV_REGISTER_GET_DATA_HOLDERS = params.XV_REGISTER_GET_DATA_HOLDERS;

