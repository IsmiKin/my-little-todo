
build-backend:
	@echo '** Build the image for backend service: my-little-todo_backend:dev'
	docker build -t my-little-todo_backend:dev backend

build-frontend:
	@echo '** Build the image for frontend service: my-little-todo_frontend:dev'
	docker build -t my-little-todo_frontend:dev frontend

build: build-backend build-frontend
	@echo '** Building images for backend and frontend services'

build-backend-test-img: build-backend
	@echo '** Build docker image to run tests for backend'
	docker build -f .circleci/test.backend.Dockerfile --build-arg baseImage=my-little-todo_backend:dev -t my-little-todo_backend-test-img backend

backend-test-docker: build-backend-test-img
	@echo '** Running tests on backend test img'
	docker run my-little-todo_backend-test-img

build-frontend-test-img: build-frontend
	@echo '** Build docker image to run tests for frontend'
	docker build -f .circleci/test.frontend.Dockerfile --build-arg baseImage=my-little-todo_frontend:dev -t my-little-todo_frontend-test-img frontend

frontend-test-docker: build-frontend-test-img
	@echo '** Running tests on frontend test img'
	docker run my-little-todo_frontend-test-img

install-backend:
	@echo '** Installing dependencies for backend service'
	yarn --cwd backend install --dev

install-frontend:
	@echo '** Installing dependencies for frontend service'
	yarn --cwd frontend install --dev

backend-check: install-backend
	@echo '** Linting and testing the backend service'
	yarn --cwd backend run lint && yarn --cwd backend run test

frontend-check: install-frontend
	@echo '** Linting and testing the frontend service'
	yarn --cwd frontend run lint && yarn --cwd frontend run ci-test

backend-run: install-backend
	@echo '** Running in local the backend service'
	yarn --cwd backend start

frontend-run: install-frontend
	@echo '** Running in local the frontend service'
	yarn --cwd frontend start

up-backend:
	@echo '** [Docker-compose] Bootup backend services'
	docker-compose up api

up-frontend:
	@echo '** [Docker-compose] Bootup frontend services'
	docker-compose up ui

up-all:
	@echo '** Running in local the frontend service'
	docker-compose up
