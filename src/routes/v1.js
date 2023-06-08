const { Hono } = require('hono');

const { generateSkillCard } = require('../utils/utils');

const v1 = new Hono();

v1.use('/*', async (c, next) => {
  const { l } = c.req.queries();

  let iconsArray = [];
  for (let lArray of l) {
    iconsArray.push(lArray.split(',')[1]);
  }

  const rawData = await fetch(`https://skillicons.dev/icons?i=${iconsArray.join(',')}`);
  const svgData = await rawData.text();
  
  c.set('iconsBuffer', svgData);

  await next();
})

v1.get('/', async c => {
  const { l, bg_color, bd_color } = c.req.queries();
  const iconsBuffer = c.get('iconsBuffer') 
  c.header('Content-Type', 'image/svg+xml');

  return c.body(generateSkillCard({ l, bg_color, bd_color, iconsBuffer }));
});

module.exports = v1;
