const { Hono } = require('hono');
const { cors } = require('hono/cors');

const app = new Hono({ strict: false });

app.use('/*', cors());

app.notFound(c => {
  return c.json({
    error: 'Not found',
  }, 404);
});

export default app;
