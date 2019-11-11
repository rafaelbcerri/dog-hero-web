# DogHeroWeb

## Requirements

* Port 4200 should be available in your computer.
* Docker ([install](https://docs.docker.com/install/))
* Docker Compose ([install](https://docs.docker.com/compose/install/))
* DogHeroApi ([install](https://github.com/rafaelbcerri/dog-hero-api))

## Setup

```sh
$ git clone https://github.com/rafaelbcerri/dog-hero-web
$ cd dog-hero-web
$ docker-compose build
```

## Start application

```sh
$ docker-compose up
// Then go to http://localhost:4200/
```

Do not forget to run [DogHeroApi](https://github.com/rafaelbcerri/dog-hero-api)


## Add node_modules for VS Code TypeScript

```sh
$ docker-compose ps  // Search for the container name
$ docker cp {container_name}:/web/node_modules ./
```