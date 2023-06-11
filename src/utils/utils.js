const VERTICAL_MARGIN = 16;
const HORIZONTAL_MARGIN = 16;

const addStyles = (barColor) => {
  const cardStyles = `
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700');

      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      @keyframes growWidthAnimation {
        from {
          width: 0;
        }

        to {
          width: 100%;
        }
      }

      text {
        font-family: Ubuntu, sans-serif;
        text-transform: uppercase;
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
      }

      .title {
        font-size: 16px;
        font-weight: 700;
      }

      .icon {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
      }

      .language {
        font-size: 12px;
        font-weight: 500;
      }

      .level {
        filter: drop-shadow(0 5px 5px #${barColor}66);
      }

      .lang-progress {
        animation: growWidthAnimation 0.6s ease-in-out forwards;
      }
    </style>
  </defs>
  `;

  return cardStyles;
};

const generateSingleSkill = (name, level, index, iconsBuffer, lColor, barColor, barBgColor) => {
  // Validate level
  let levelPercentage = level;
  if (Number.isNaN(level)) levelPercentage = '100';
  if (parseInt(level, 10) < 0) levelPercentage = '0';
  if (parseInt(level, 10) > 100) levelPercentage = '100';

  const iconX = HORIZONTAL_MARGIN;
  // 16 = skill title font size,
  // 32 = margin between title and skill svg,
  // 48 = space between skills,
  const iconY = VERTICAL_MARGIN + 16 + 32 + 48 * index;

  // 32 = skill icon width,
  // 16 = margin between icon and skill name,
  const nameX = iconX + 32 + 16;
  // 12 = skill name font size
  const nameY = iconY + 12;

  const levelX = nameX;
  // 32 = skill icon height,
  // 10 = skill bar height,
  const levelY = iconY + 32 - 10;

  const skillSvg = `
  <g transform="translate(${iconX}, ${iconY})">
    <svg class="icon" width="32" height="32" viewBox="${(48 + 8.25) * index} 0 48 48" fill="none" style="animation-delay: ${300 + 200 * index}ms;">
      ${iconsBuffer}
    </svg>
  </g>

  <g transform="translate(${nameX}, ${nameY})">
    <text style="animation-delay: ${300 + 200 * index}ms;" class="language" fill="#${lColor}">${name}</text>
  </g>

  <g transform="translate(${levelX}, ${levelY})">
    <rect width="300" height="10" rx="5" ry="5" fill="#${barBgColor}" />
    <svg width="${(levelPercentage / 100) * 300}">
      <rect style="animation-delay: ${300 + 200 * index}ms;" height="10" rx="5" ry="5" fill="#${barColor}" class="level lang-progress" />
    </svg>
  </g>
  `;

  return skillSvg;
};

const generateSkillList = (l, iconsBuffer, lColor, barColor, barBgColor) => {
  let skillListSvg = '';
  for (let i = 0; i < l.length; i += 1) {
    const lang = l[i].split(',');
    skillListSvg += generateSingleSkill(
      lang[0],
      lang[2],
      i,
      iconsBuffer,
      lColor,
      barColor,
      barBgColor,
    );
  }

  return skillListSvg;
};

const generateSkillCard = (obj) => {
  const l = obj.l || [];

  const hexReg = /^[0-9A-F]{6}$/i;
  const bgColor = hexReg.test(obj.bgColor) ? obj.bgColor : 'FFF';
  const bdColor = hexReg.test(obj.bdColor) ? obj.bdColor : 'CCE5D5';
  const tColor = hexReg.test(obj.tColor) ? obj.tColor : '444';
  const lColor = hexReg.test(obj.lColor) ? obj.lColor : '444';
  const barColor = hexReg.test(obj.barColor) ? obj.barColor : '6DD594';
  const barBgColor = hexReg.test(obj.barBgColor) ? obj.barBgColor : 'E4E9EF';

  const { iconsBuffer } = obj;

  // 32 = skill icon width,
  // 16 = space between icon and language,
  // 300 = skill bar width,
  const svgWidth = HORIZONTAL_MARGIN * 2 + 32 + 16 + 300;

  // 16 = skill title font size,
  // 32 = margin between title and skill svg,
  // 48 = space between skills,
  // 32 = last skill icon height,
  // l.length - 1 = index of the last language,
  const svgHeight = VERTICAL_MARGIN * 2 + 16 + 32 + 48 * (l.length - 1) + 32;

  const cardSvg = `
  <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
    ${addStyles(barColor)}
    <rect width="100%" height="100%" rx="10" ry="10" fill="#${bgColor}" stroke="#${bdColor}" stroke-opacity="1" />

    <g transform="translate(${HORIZONTAL_MARGIN}, ${VERTICAL_MARGIN + 16})">
      <text x="0" y="0" class="title" fill="#${tColor}">skills</text>
    </g>
    ${generateSkillList(l, iconsBuffer, lColor, barColor, barBgColor)}
  </svg>
  `;

  return cardSvg;
};

module.exports = {
  generateSkillCard,
};
