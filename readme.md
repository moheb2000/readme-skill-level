<div align="center">

# Readme Skill Level
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=javascript,js,100)](https://github.com/moheb2000/readme-skill-level)


![Last commit](https://img.shields.io/github/last-commit/moheb2000/readme-skill-level?style=flat-square)
![Code size](https://img.shields.io/github/languages/code-size/moheb2000/readme-skill-level?style=flat-square)
![License](https://img.shields.io/github/license/moheb2000/readme-skill-level?style=flat-square)
![Version](https://img.shields.io/github/package-json/v/moheb2000/readme-skill-level?style=flat-square)

</div>

This project aims to show the percentage of your skills in different programming languages and add it to your GitHub readme.

Hono is used to create the API and it's configured to deploy on cloudflare worker but you can also deploy it on vercel, deno deploy, etc based on [hono documentation](https://hono.dev/).

## Add skill to your readme
For adding your skill levels in your Github readme add following line to your readme.md file:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=javascript,js,75)](https://github.com/moheb2000/readme-skill-level)
```

<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=javascript,js,75)](https://github.com/moheb2000/readme-skill-level)

</details>

Change the value of `?l=javascript,js,75` to whatever you need. You need to pass all three options here to show your skill correctly. Add your skill like this: `?l=<skill_name>,<skill_icon>,<skill_level_percentage>`. For skill icons add the name of icon from [Skill Icons pack](https://github.com/tandpfun/skill-icons).

> **Warning**
> If you don't provide all these three options You will encounter an error. If you don't want to use icon or Skill Icons pack doesn't have an icon for your skill use your skill like this: `?l=javascript,,75`.

## Add multiple skills
If you want to add multiple skills, Add the following lines to your readme.md file:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&l=javascript,js,55)](https://github.com/moheb2000/readme-skill-level)
```

<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&l=javascript,js,55)](https://github.com/moheb2000/readme-skill-level)

</details>

## Theming
You can customize the color scheme of your language skill card with these options:
### Options
- `bg_color` - Card's background. Default: `FFFFFF`
- `bd_color` - Card's border color. Default: `CCE5D5`
- `t_color` - title color (SKILLS). Default: `444444`
- `l_color` - Language name color. Default: `444444`
- `bar_color` - Bar chart color. Default: `6DD594`
- `bar_bg_color` - Bar chart background color. Default: `6DD594`
> **Warning**
> Keep in mind that you need to use hex colors for colors and you should provide it with **6 characters and without #** like this: `dd3737` and therefore `#dd3737` or `222` isn't valid for the API.
### Examples
#### bg_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bg_color=FDF0D5)](https://github.com/moheb2000/readme-skill-level)
```

<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bg_color=FDF0D5)](https://github.com/moheb2000/readme-skill-level)

</details>

#### bd_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bd_color=00005B)](https://github.com/moheb2000/readme-skill-level)
```

<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bd_color=00005B)](https://github.com/moheb2000/readme-skill-level)

</details>

#### t_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&t_color=006D77)](https://github.com/moheb2000/readme-skill-level)
```

<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&t_color=006D77)](https://github.com/moheb2000/readme-skill-level)

</details>

#### l_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&l_color=006D77)](https://github.com/moheb2000/readme-skill-level)
```


<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&l_color=006D77)](https://github.com/moheb2000/readme-skill-level)

</details>

#### bar_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bar_color=FB8500)](https://github.com/moheb2000/readme-skill-level)
```


<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bar_color=FB8500)](https://github.com/moheb2000/readme-skill-level)

</details>

#### bar_bg_color
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bar_bg_color=FDF0D5)](https://github.com/moheb2000/readme-skill-level)
```


<details>
<summary>Show result</summary>

[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bar_bg_color=FDF0D5)](https://github.com/moheb2000/readme-skill-level)

</details>

## Self deployment
You can deploy this project on cloudflare workers. Create a worker in yout account and run following commands:
```
git clone https://github.com/moheb2000/readme-skill-level.git
```
Go to project root directory and install dependencies:
```
npm i
```
Change `wrangler.toml` based on your worker and run this command to deploy the API:
```
npm run deploy
```
After running this command, You may need to login to your cloudflare accounts and after that your self deployed API is ready.

For deployment on other platforms read [hono documentation](https://hono.dev/).
