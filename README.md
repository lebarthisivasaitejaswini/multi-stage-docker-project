# Multi-Stage Docker Containerization & Optimization

A small Node.js web service using a multi-stage Alpine Docker build, non-root execution, Docker Compose, health checks, and a persistent Redis volume.

## Architecture
Client -> Node.js Web Service -> Redis

## Run
docker compose up --build -d

## Verify
docker compose ps
curl http://localhost:3000/health
docker images
docker compose logs web
docker compose logs redis

## Security
The application runs as the dedicated non-root `appuser`.

## Persistence
Redis uses AOF persistence and the named `redis_data` volume mounted at `/data`.

## Image-size target
The application image target is below 150 MB. Verify the actual size with `docker images`.
