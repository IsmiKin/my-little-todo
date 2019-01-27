const request = require("supertest")
const app = require("../src/app")

describe("GET /", () => {

  it("dummy test", () => {
     expect(true).toBe(true)
  })

  it("respond with something", done => {
    request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200)
            done()
          })
  })
})
