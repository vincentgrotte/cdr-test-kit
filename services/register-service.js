import { BaseService } from './base-service.js';
import { registerEndpointsNoAuth } from '../util/endpoints.js';
import {
    XV_REGISTER_GET_DATA_HOLDERS,
    XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES,
    XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY,
    XV_REGISTER_GET_DATA_RECIPIENTS,
    XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES,
    XV_REGISTER_GET_JWKS,
    XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES,
} from '../util/input-parameters.js';

export class RegisterService extends BaseService {

    async getDataHolderBrandsSummary() {

        const result = await this.getJson(
            registerEndpointsNoAuth.DATA_HOLDER_BRANDS_SUMMARY,
            XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY
        )

        return result;

    }

    async getDataHolders() {

        const result = await this.getJson(
            registerEndpointsNoAuth.DATA_HOLDER_BRANDS,
            XV_REGISTER_GET_DATA_HOLDERS
        )

        return result;

    }

    async getDataHolderBrandsStatuses() {

        const result = await this.getJson(
            registerEndpointsNoAuth.DATA_HOLDER_BRANDS_STATUSES,
            XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES
        )

        return result;

    }

    async getDataRecipients() {

        const result = await this.getJson(
            registerEndpointsNoAuth.DATA_RECIPIENTS,
            XV_REGISTER_GET_DATA_RECIPIENTS
        )

        return result;

    }

    async getDataRecipientsStatuses() {

        const result = await this.getJson(
            registerEndpointsNoAuth.DATA_RECIPIENTS_STATUSES,
            XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES
        )

        return result;

    }

    async getJwks() {

        const result = await this.getJson(
            registerEndpointsNoAuth.JWKS,
            XV_REGISTER_GET_JWKS
        )

        return result;

    }

    async getSoftwareProductsStatuses() {

        const result = await this.getJson(
            registerEndpointsNoAuth.SOFTWARE_PRODUCTS_STATUSES,
            XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES
        )

        return result;

    }

}