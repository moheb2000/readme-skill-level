const { Hono } = require('hono');
const { cors } = require('hono/cors');

const v1 = require('./routes/v1');

const app = new Hono({ strict: false });

app.use('/*', cors());

app.route('/v1', v1);

app.notFound(c => {
  return c.json({
    error: 'Not found',
  }, 404);
});

export default app;
