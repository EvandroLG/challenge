jest := node_modules/jest/bin/jest.js
eslint := node_modules/eslint/bin/eslint.js

.SILENT:

install:
	npm install

lint:
	$(eslint) app/js/ --quiet

test:
	$(jest) --coverage

run:
	pushd app/; python -m SimpleHTTPServer 9000
