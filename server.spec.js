const request = require("supertest");

const server = require("./server.js");

// - use `jest` and `supertest` to write the tests.
// - Your API must be able to **create** and **delete** a _resource_ of your choosing.
// - Write a minimum of two tests per route handler.

describe("POST /api/users", () => {
  it("should return a JSON object", async () => {
    const expectedBody = { username: "Hello", password: "Test1" };

    const response = await request(server)
      .post("/api/users")
      .send(expectedBody);

    expect(response.body).not.toEqual({ no: "data" });
    expect(response.body).toEqual(expectedBody);
  });

  it("should return correct status code", async () => {
    const expectedBody = { username: "Hello", password: "Test1" };

    const response = await request(server)
      .post("/api/users")
      .send(expectedBody);

    expect(response.status).not.toEqual(500);
    expect(response.status).toEqual(200);
  });
});

describe("DELETE /api/users/:username", () => {
  it("should return a JSON object", async () => {
    const expectedBody = { username: "Hello", password: "Test1" };

    const response = await request(server).delete(
      `/api/users/${expectedBody.username}`
    );

    expect(response.body.deleted).not.toEqual({ no: "data" });
    expect(response.body.deleted).toEqual(expectedBody.username);
  });

  it("should return correct status code", async () => {
    const expectedBody = { username: "Hello", password: "Test1" };

    const response = await request(server).delete(
      `/api/users/${expectedBody.username}`
    );

    expect(response.status).not.toEqual(500);
    expect(response.status).toEqual(200);
  });
});
