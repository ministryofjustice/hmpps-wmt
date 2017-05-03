# HMPPS-WMT
HMPPS Workload Management Tool

This repository contains the technical spikes for Alpha and Beta on the WMT project. It also hosts the project wiki for documenting our spikes, tooling and design decision.

[![Build Status](https://travis-ci.org/ministryofjustice/noms-wmt-alpha.svg?branch=master)](https://travis-ci.org/ministryofjustice/noms-wmt-alpha.svg?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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
