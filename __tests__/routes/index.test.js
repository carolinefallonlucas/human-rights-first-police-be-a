const request = require('supertest');
// Full app so we can test the 404
const server = require('../../api/app.js');

describe('index router endpoints', () => {
  beforeAll(() => {});

  describe('GET /', () => {
    it('should return json with "Hello World" and current time', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.body.api).toBe('Hello World');
    });

    it('should return 404 for /ping which is not a valid endpoint', async () => {
      jest.spyOn(global.console, 'error').mockImplementation(() => {});
      const res = await request(server).get('/ping');
      expect(res.status).toBe(404);
    });
  });
  describe('GET /protected-example with protected middleware', () => {
    it('should return error if missing id token', async () => {
      const res = await request(server).get('/protected-example');
      expect(res.status).toBe(401);
      expect(res.text).toContain('Missing idToken');
      expect(res.error.message).toBe('cannot GET /protected-example (401)');
    });

    it('should return error if id token is invalid', async () => {
      const res = await request(server)
        .get('/protected-example')
        .set('Authorization', 'Bearer 1234567890');
        expect(res.text).toContain('Jwt cannot be parsed');
        expect(res.error.message).toBe('cannot GET /protected-example (401)');
    });
  });
});
