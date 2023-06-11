const { Hono } = require('hono');

const { generateSkillCard } = require('../utils/utils');

const v1 = new Hono();

v1.use('/*', async (c, next) => {
  const q = c.req.queries();
  const l = q.l || [];

  // Check l parameter validation
  l.forEach((item) => {
    const lang = item.split(',');
    if (lang.length !== 3) return c.json({ ok: false }, 400);
    return undefined;
  });

  await next();
});

v1.use('/*', async (c, next) => {
  const q = c.req.queries();
  const l = q.l || [];

  const iconsArray = [];
  l.forEach((lArray) => iconsArray.push(lArray.split(',')[1]));

  const rawData = await fetch(`https://skillicons.dev/icons?i=${iconsArray.join(',')}`, {
    cf: { cacheEverything: true },
  });
  const svgData = await rawData.text();

  c.set('iconsBuffer', svgData);

  await next();
});

v1.get('/', async (c) => {
  const {
    l,
    bg_color: bgColor,
    bd_color: bdColor,
    t_color: tColor,
    l_color: lColor,
    bar_color: barColor,
    bar_bg_color: barBgColor,
  } = c.req.queries();
  const iconsBuffer = c.get('iconsBuffer');
  c.header('Content-Type', 'image/svg+xml');

  return c.body(generateSkillCard({
    l, bgColor, bdColor, tColor, lColor, barColor, barBgColor, iconsBuffer,
  }));
});

module.exports = v1;
