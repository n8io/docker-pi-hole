# docker-pi-hole
A simple, yet configurable, [pi-hole](http://pi-hole.net) implementation leveraging a Docker container.

![Docker Pi-Hole](https://dl.dropboxusercontent.com/u/452959/hosted/pihole.png)

## Requirements
1. Docker w/docker-compose
2. NodeJs 4+

## Getting started
1. `export DOCKER_HOST_IP=<your docker host ip>`
1. `git clone git@github.com:n8io/docker-pi-hole.git && cd docker-pi-hole`
2. `npm install`
3. `docker-compose -d`
4. `open http://<your docker host ip>:8100/admin`

## Restarting
1. `docker-compose restart`

## Stopping
1. `docker-compose stop`
