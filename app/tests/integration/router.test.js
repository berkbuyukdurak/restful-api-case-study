const express = require('express');
const request = require('supertest');
const bodyParser = require('body-parser');


const serverRouter = require('../../api_routes/router');
const app = require('../../app');

jest.setTimeout(100000);

/**
* Testing Undefined Routes
*/
describe("Testing the undefined routes", () => {
    it("ERROR / For the undefined route --> hello", async () => {
        const response = await request(app).get("/hello");
        expectUndefinedRoutesErrorfulResponse(response, 400);
    });
});


/**
* COUNTRIES ROUTE
* Testing with ?region=all
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> all", async () => {
        const response = await request(app).get("/countries/?region=all");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=All --> all should be case insensitive.
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> All", async () => {
        const response = await request(app).get("/countries/?region=All");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=All --> all should be case insensitive.
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> ALL", async () => {
        const response = await request(app).get("/countries/?region=ALL");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=Europe
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> Europe", async () => {
        const response = await request(app).get("/countries/?region=Europe");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=MEA
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> MEA", async () => {
        const response = await request(app).get("/countries/?region=MEA");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=America
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> America", async () => {
        const response = await request(app).get("/countries/?region=America");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=Apac
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> Apac", async () => {
        const response = await request(app).get("/countries/?region=Apac");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with ?region=APAC
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the query parameter --> APAC", async () => {
        const response = await request(app).get("/countries/?region=APAC");
        expectSuccessfulResponse(response, 200);
    });
});


/**
* Testing with request body {"region": "all"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`all`}", async () => {
        const response = await request(app).get("/countries").send({"region": "all"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "All"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`All`}", async () => {
        const response = await request(app).get("/countries").send({"region": "All"});
        expectSuccessfulResponse(response, 200);
    });
});


/**
* Testing with request body {"region": "ALL"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`ALL`}", async () => {
        const response = await request(app).get("/countries").send({"region": "ALL"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "Europe"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`Europe`}", async () => {
        const response = await request(app).get("/countries").send({"region": "Europe"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "MEA"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`MEA`}", async () => {
        const response = await request(app).get("/countries").send({"region": "MEA"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "America"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`America`}", async () => {
        const response = await request(app).get("/countries").send({"region": "America"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "Apac"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`Apac`}", async () => {
        const response = await request(app).get("/countries").send({"region": "Apac"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* Testing with request body {"region": "APAC"}
*/
describe("Testing the countries route with query parameter", () => {
    it("SUCCESS / For the request body --> {`region`:`APAC`}", async () => {
        const response = await request(app).get("/countries").send({"region": "APAC"});
        expectSuccessfulResponse(response, 200);
    });
});

/**
* ERRORS FOR Countries ENDPOINT
*/
/**
* Testing with CASE INSENSITIVE query parameter --> america
*/
describe("Testing the countries route with query parameter", () => {
    it("ERROR / For the query parameter --> america", async () => {
        const response = await request(app).get("/countries/?region=america");
        expectErrorfulResponse(response, 400);
    });
});

/**
* Testing with CASE INSENSITIVE request body {"region": "america"}
*/
describe("Testing the countries route with query parameter", () => {
    it("ERROR / For the request body --> {`region`:`america`}", async () => {
        const response = await request(app).get("/countries").send({"region": "america"});
        expectErrorfulResponse(response, 400);
    });
});

/**
* Testing POST Request to the Countries Route
*/
describe("Testing the countries route with POST Request", () => {
    it("ERROR / For the POST Request", async () => {
        const response = await request(app).post("/countries/?region=America");
        expectErrorfulResponse(response, 400);
    });
});

/**
* SALESREP Route
*/
describe("Testing the salesrep route", () => {
    it("SUCCESS / For the salesrep route", async () => {
        const response = await request(app).get("/salesrep");
        expectSuccessfulResponse(response, 200);
    });
});

/**
* OPTIMAL Route
*/
describe("Testing the optimal route", () => {
    it("SUCCESS / For the salesrep route", async () => {
        const response = await request(app).get("/optimal");
        expectSuccessfulResponse(response, 200);
    });
});







/**
 * Successful return. We only expect array in the response body.
 * @param {Object} response 
 * @param {Number} status 
 */
const expectSuccessfulResponse = (response, status) => {
    expect(response.status).toEqual(status);
    expect(Array.isArray(response.body)).toBe(true);
}

/**
 * Errorful return. We expect status code and message in the response body.
 * @param {Object} response 
 * @param {Number} status 
 */
const expectErrorfulResponse = (response, status) => {
    expect(response.status).toEqual(status);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('statusCode');
}


/**
 * Errorful return for undefined routes. We only expect message in the response body.
 * @param {Object} response 
 * @param {Number} status 
 */
const expectUndefinedRoutesErrorfulResponse = (response, status) => {
    expect(response.status).toEqual(status);
    expect(response.body).toHaveProperty('error');
}