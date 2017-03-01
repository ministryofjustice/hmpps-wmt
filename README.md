# noms-wmt-alpha
NOMS Workload Management Tool

## Prerequisites

- Docker
- Node v6.x.x + 

## Docker

Docker is used to automate provisioning dependencies for the local development
environment.

Running `docker-compose up` in the base directory of this repository will launch
the PostgreSQL database instance used by the other application components.

## Database Setup

In order to create the schema and populate it with data run the following
commands:
```
cd wmt-database
npm install
npm run-script migrations
npm run-script seed-data
cd -
```
