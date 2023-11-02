# CDR Compliance Test Kit

## Parameters

The test kit takes a set of input parameters via the root-level parameters.json file. Every parameter is required. They are as follows:

- HOST_REGISTER
- PORT_REGISTER_DISCOVERY
- PORT_REGISTER_IDP
- PORT_REGISTER_INFOSEC
- PORT_REGISTER_STATUS
- URL_REGISTER_DATA_HOLDER_BRANDS
- URL_REGISTER_DATA_HOLDER_BRANDS_STATUSES
- URL_REGISTER_DATA_HOLDER_BRANDS_SUMMARY
- URL_REGISTER_DATA_RECIPIENTS_STATUSES
- URL_REGISTER_SOFTWARE_PRODUCTS_STATUSES
- URL_REGISTER_DATA_RECIPIENTS
- URL_REGISTER_JWKS
- XV_REGISTER_GET_DATA_HOLDER_BRANDS_SUMMARY
- XV_REGISTER_GET_DATA_HOLDER_BRANDS_STATUSES
- XV_REGISTER_GET_DATA_HOLDERS
- XV_REGISTER_GET_DATA_RECIPIENTS
- XV_REGISTER_GET_DATA_RECIPIENTS_STATUSES
- XV_REGISTER_GET_JWKS
- XV_REGISTER_GET_SOFTWARE_PRODUCTS_STATUSES

## Usage

The Makefile provides the following commands:

follow_data_holder:

      Follows the logs of the mock data holder container

follow_data_recipient:

      Follows the logs of the mock data recipient container

follow_register:

      Follows the logs of the mock register container

run:

      Runs the test kit using the current configuration

run-debug:

      Runs the test kit in verbose mode using the current configuration

spindown:

      Bring down the mocks

spinup:

      Bring up the mocks

test:

      Run unit tests for the test kit

test-debug:

      Run unit tests for the test kit in verbose mode

## Notes

docker-compose.mocks.yml is taken from https://github.com/ConsumerDataRight/mock-register with some modifications to docker-compose.yml in mock-register service to expose the following ports:
      - "7000:7000"
      - "7001:7001"
      - "7002:7002"
      - "7003:7003"
      - "7004:7004"
      - "7006:7006"

If the compose file cannot find the images for some reason.
You can manually pull them like so:

docker pull consumerdataright/mock-data-recipient
docker pull consumerdataright/mock-register
docker pull consumerdataright/mock-data-holder
docker pull mcr.microsoft.com/mssql/server:2019-latest
