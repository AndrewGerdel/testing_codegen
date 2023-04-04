const request = require('supertest');
const app = require('../app');
const http = require('http');

describe('GET /health', () => {
  let server;

  beforeAll(() => {
    server = http.createServer(app);
    server.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 200 status', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toEqual(200);
  });
});
