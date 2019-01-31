# my-little-todo

[![CircleCI](https://circleci.com/gh/IsmiKin/my-little-todo.svg?style=svg)](https://circleci.com/gh/IsmiKin/my-little-todo)
[![Maintainability](https://api.codeclimate.com/v1/badges/c0643d08d5dd526688f6/maintainability)](https://codeclimate.com/github/IsmiKin/my-little-todo/maintainability)

Little todo manager to practice

## Roadmap

Defined on [Project](https://github.com/IsmiKin/my-little-todo/wiki) and the [Wiki](https://github.com/IsmiKin/my-little-todo/wiki)

# CI /CD

It setup CI/CD with [CircleCI](https://circleci.com) and [DockerHub](https://hub.docker.com/u/ismikin)

- Health monitoring with [Codeclimate](https://codeclimate.com/github/IsmiKin/my-little-todo) // _pending coverage upload_

- CD planned with [Zeit](zeit.co) or [Netify](https://www.netlify.com/)

* [ESlint](https://eslint.org/) for linting and [Husky](https://github.com/typicode/husky) to control integrity development

# Installation

You can run on local or with `docker-compose`.

- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [Yarn](https://yarnpkg.com)

To run services with `docker-compose`:

### API

```
make up-backend
```

### UI

```
make up-frontend
```

#### Tests and linting

- On local **tests** and **linting**:

```
make backend-check
```

```
make frontend-check
```

- With `Docker` images

```
make backend-test-docker
```

```
make build-frontend-test-img
```
