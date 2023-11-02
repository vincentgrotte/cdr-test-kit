follow_data_holder:
	docker logs --follow mock-data-holder

follow_data_recipient:
	docker logs --follow mock-data-recipient

follow_register:
	docker logs --follow mock-register

run:
	npm run start

run-debug:
	SHOW_ALL_LOGS=1 npm run start

spindown:
	docker-compose -f docker-compose.mocks.yml down

spinup:
	docker-compose -f docker-compose.mocks.yml up

test:
	npm run test

test-debug:
	SHOW_ALL_LOGS=1 npm run test-debug
