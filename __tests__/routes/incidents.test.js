const request = require('supertest');
const db = require('../../data/db-config');
const server = require('../../server');
const Incidents = require('../../api/incidents/incidentsModel');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

it('correct env var', () => {
  expect(process.env.NODE_ENV).toBe('test');
});