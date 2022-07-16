.DEFAULT_GOAL := build

.PHONY: build
build:
	docker build --no-cache -t damin-dev-front .

.PHONY: up
up: build
	docker run -it --rm -p 8080:8080 --name damin-dev-front-server damin-dev-front

.PHONY: kill
kill:
	docker kill damin-dev-front-server
