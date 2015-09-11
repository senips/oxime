
TESTS = test/*.js
REPORTER = dot

#
# Release Task
#

node_modules: package.json
	@npm install

#
# Tests
#

test: test-node test-phantom

test-node: node_modules
	@printf "==> [Test :: Node.js]\n"
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(TESTS)

test-cov: node_modules
	@NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- \
		--require ./test/bootstrap \
		$(TESTS) \

test-phantom:
	@printf "==> [Test :: Karma (PhantomJS)]\n"
	@./node_modules/karma/bin/karma start \
		--single-run --browsers PhantomJS

test-firefox:
	@printf "==> [Test :: Karma (Firefox)]\n"
	@./node_modules/karma/bin/karma start \
		--browsers Firefox

#
# Clean up
#

clean: clean-node clean-cov

clean-node:
	@rm -rf node_modules

clean-cov:
	@rm -rf coverage

#
# Instructions
#

.PHONY: test test-node test-phantom test-cov
.PHONY: clean clean-node clean-cov
