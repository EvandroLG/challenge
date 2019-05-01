jest := node_modules/jest/bin/jest.js
eslint := node_modules/eslint/bin/eslint.js
server := node_modules/http-server/bin/http-server

.SILENT:

install:
	npm install

lint:
	$(eslint) app/js/ --quiet

test:
	$(jest) --coverage

run:
	$(server) app/ -p 9000
