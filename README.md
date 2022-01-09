# Sales Representatives Service

## Description
It is a RESTful API with a three endpointd using Node.js with express.js framework. This API
will take some parameters and query the provided MongoDB instance in order to create a response of the requested format.

## Tech Stack

* express - Node.js web application framework
* mongoose - MongoDB object modelin for Node.js
* lodash - Utilities functions library for iterating arrays, objects & strings
* winston - Simple and universal logging library

## Settings
You must copy the `.env.example` to ` .env` in the root of the project

* `NODE_ENV` = you can use `test`,` development` or `production`
* According to your `NODE_ENV` preference, set your server and host configurations.
* `{DEV|PROD|TEST}_HOST` = set the host on which you want to run the app, by default `localhost`, in production, by default `127.0.0.1`.
* `{DEV|PROD|TEST}_PORT` = set the port on which you want to run the app, by default `3000`, in test, by default `3200`.
* `DB_USERNAME` = please fill this value with database information.
* `DB_PASSWORD` = please fill this value with database information.
* `DB_NAME` = please fill this value with database information.
* `DB_HOST` = please fill this value with database information.
* `DB_PORT` = please fill this value with database information.

## Getting Started

Use the package manager [npm](https://www.npmjs.com/) to install project.

### 1) Clone the project

```bash
  git clone https://github.com/berkbuyukdurak/restful-api-case-study.git
```

### 2) Install the dependencies

```bash
    cd restful-api-case-study
    
    npm install
```

## Run the Project
The API Can be run locally with development mode or normal mode

```bash
# Normal node application mode
npm run start
# Development mode with Nodemon
npm run startDev
```

## Tests
This API has unit and integration tests inside ./app/tests path. The test can be conducted using Jest with:

```bash
npm test
```

### Test Results
```bash
Test Suites: 7 passed, 7 total
Tests:       29 passed, 29 total
Snapshots:   0 total
Time:        6.779 s
Ran all test suites.
```

## Countries API
| Method                       | Description                                                     | Required Fields
| ---------------------------- | --------------------------------------------------------------- | ------------------------ 
| GET /countries               | Returns all countries or returns countries by their regions     |  region                       | **

## Example Requests

#### Using query parameter to return all countries:
Send GET request to `/countries/?region=all`.

#### Request body to return all countries:

```json
{
    "region":"all"
}
```

#### Expected Response:

Response body below with Http Status Code 200 and message OK.

```json
[
    {
        "name": "Japan",
        "region": "Apac"
    },
    {
        "name": "Sweden",
        "region": "Europe"
    },
    {
        "name": "United Kingdom",
        "region": "Europe"
    },
    {
        "name": "China",
        "region": "Apac"
    },
    {
        "name": "France",
        "region": "Europe"
    },
    {
        "name": "Morocco",
        "region": "MEA"
    },
    {
        "name": "Kenya",
        "region": "MEA"
    },
    {
        "name": "United Arab Emirates",
        "region": "MEA"
    },
    ...
]
```

#### Using query parameter to return countries by their region:
Send GET request to get countries in the America region `/countries/?region=America`.

#### Request body to return countries by their region:

```json
{
    "region":"America"
}
```

#### Expected Response:

Response body below with Http Status Code 200 and message OK.

```json
[
    {
        "name": "Equador",
        "region": "America"
    },
    {
        "name": "United States",
        "region": "America"
    },
    {
        "name": "Guatemala",
        "region": "America"
    },
    ...
]
```

#### Invalid Request for Countries API

region=all is case insensitive but other regions are not.

#### Using query parameter to return countries by their region:
Send GET request to get countries in the America region `/countries/?region=america`.

#### Request body to return countries by their region:

```json
{
    "region":"america"
}
```

#### Expected Response:

Response body below with Http Status Code 400 and message Bad Request.

```json
{
    "statusCode": 400,
    "message": "Request values are case sensitive!"
}
```

## Salesrep API
| Method                       | Description                                                     | Required Fields
| ---------------------------- | --------------------------------------------------------------- | ------------------------ 
| GET /salesrep                | Returns all countries or returns countries by their regions     |  None                       | **


## Optimal API
| Method                       | Description                                                     | Required Fields
| ---------------------------- | --------------------------------------------------------------- | ------------------------ 
| GET /optimal                | Returns all countries or returns countries by their regions     |  None                       | **
