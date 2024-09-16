# Habit Tracker

## Overview
A simple React app backed by Java Spring Boot application and Postgres database, which allows a user to create and manage their daily habits and track their overall habit goals. 

## Pre-requisites
### Frontend
- Node JS 20.x

### Backend
- Java 17.x
- Docker

## How to Launch Application 
### Backend
1. Start Postgres Database Docker container
```
docker compose up -d    
```

2. Run the following command on terminal or command line
```
 ./mvnw spring-boot:run    
```

### Frontend
1. Install dependencies
```
npm install
```

2. Run application
```
npm start
```


## Running Backend APIs
Execute API requests using Swagger at the following URL:
http://localhost:8080/swagger-ui/index.html