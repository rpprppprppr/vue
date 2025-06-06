.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

COMPOSE_FILES = -f docker-compose.yml -f docker-compose.override.yml

.PHONY: build
build: ## Build services
	docker compose $(COMPOSE_FILES) build $(s)

.PHONY: up
up: ## Start services
	docker compose $(COMPOSE_FILES) up $(OPTS) $(s)

.PHONY: shell
shell: ## Shell into frontend
	docker compose $(COMPOSE_FILES) exec frontend $(OPTS) sh

.PHONY: backend-shell
backend-shell: ## Shell into backend container
	docker compose $(COMPOSE_FILES) exec backend $(OPTS) sh

.PHONY: backend-install
backend-install: ## Run npm install inside backend
	docker compose $(COMPOSE_FILES) run --rm backend npm install

.PHONY: backend-start
backend-start: ## Run backend manually inside container
	docker compose $(COMPOSE_FILES) run --rm -p 3000:3000 backend sh -c "npm install && node server.js"

.PHONY: setup
setup: ## Copy example configs
	@[ -f docker-compose.override.yml ] || cp docker-compose.override.example.yml docker-compose.override.yml
	@[ -f .env ] || cp .env.example .env