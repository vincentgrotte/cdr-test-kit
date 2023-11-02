export const SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS = {
    "data": [
        {
            "dataHolderBrandId": "string",
            "brandName": "string",
            "industries": [
                "banking"
            ],
            "logoUri": "string",
            "legalEntity": {
                "legalEntityId": "string",
                "legalEntityName": "string",
                "logoUri": "string",
                "registrationNumber": "string",
                "registrationDate": "string",
                "registeredCountry": "string",
                "abn": "string",
                "acn": "string",
                "arbn": "string",
                "anzsicDivision": "string",
                "organisationType": "SOLE_TRADER",
                "status": "ACTIVE"
            },
            "status": "ACTIVE",
            "endpointDetail": {
                "version": "string",
                "publicBaseUri": "string",
                "resourceBaseUri": "string",
                "infosecBaseUri": "string",
                "extensionBaseUri": "string",
                "websiteUri": "string"
            },
            "authDetails": [
                {
                    "registerUType": "SIGNED-JWT",
                    "jwksEndpoint": "string"
                }
            ],
            "lastUpdated": "string"
        }
    ],
    "links": {
        "first": "string",
        "last": "string",
        "next": "string",
        "prev": "string",
        "self": "string"
    },
    "meta": {
        "totalPages": 0,
        "totalRecords": 0
    }
};

export const SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_STATUSES = {
    "data": [
        {
            "legalEntityId": "string",
            "status": "ACTIVE"
        }
    ],
    "links": {
        "self": "string"
        },
    "meta": {}
};

export const SPEC_RESPONSE_REGISTER_DATA_HOLDER_BRANDS_SUMMARY = {
    "data": [
        {
            "dataHolderBrandId": "string",
            "interimId": "string",
            "brandName": "string",
            "publicBaseUri": "string",
            "logoUri": "string",
            "industries": [
                "banking"
            ],
            "lastUpdated": "string",
            "abn": "string",
            "acn": "string",
            "arbn": "string"
        }
    ],
    "links": {
        "self": "string"
    },
    "meta": {}
}

export const SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS = {
    "data": [
        {
            "legalEntityId": "string",
            "legalEntityName": "string",
            "accreditationNumber": "string",
            "accreditationLevel": "UNRESTRICTED",
            "logoUri": "string",
            "dataRecipientBrands": [
                {
                "dataRecipientBrandId": "string",
                "brandName": "string",
                "logoUri": "string",
                "softwareProducts": [
                    {
                        "softwareProductId": "string",
                        "softwareProductName": "string",
                        "softwareProductDescription": "string",
                        "logoUri": "string",
                        "status": "ACTIVE"
                    }
                ],
                "status": "ACTIVE"
                }
            ],
            "status": "ACTIVE",
            "lastUpdated": "string"
        }
    ],
    "links": {
        "self": "string"
    },
    "meta": {}
};

export const SPEC_RESPONSE_REGISTER_DATA_RECIPIENTS_STATUSES = {
    "data": [
        {
            "legalEntityId": "string",
            "status": "ACTIVE"
        }
    ],
    "links": {
        "self": "string"
    },
    "meta": {}
};

export const SPEC_RESPONSE_REGISTER_JWKS = {
    "keys": [
        {
            "alg": "string",
            "e": "string",
            "key_ops": [ "string" ],
            "kid": "string",
            "kty": "string",
            "n": "string"
        }
    ]
};

export const SPEC_RESPONSE_REGISTER_SOFTWARE_PRODUCTS_STATUSES = {
    "data": [
        {
            "softwareProductId": "string",
            "status": "ACTIVE"
        }
    ],
    "links": {
        "self": "string"
    },
    "meta": {}
};
  





