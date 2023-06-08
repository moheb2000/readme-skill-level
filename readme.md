# Readme Skill Level
This project aims to show the percentage of your skills in different programming languages and add it to your GitHub readme.

Hono is used to create the API and it's configured to deploy on cloudflare worker but you can also deploy it on vercel, deno deploy, etc based on [hono documentation](https://hono.dev/).

## Add skill to your readme
For adding your skill levels in your Github readme add following line to your readme.md file:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=javascript,js,75)](https://github.com/moheb2000/readme-skill-level)
```
The result is:

![Custom background](./screenshots/single-skill.png)

Change the value of `?l=javascript,js,75` to whatever you need. You need to pass all three options here to show your skill correctly. Add your skill like this: `?l=<skill_name>,<skill_icon>,<skill_level_percentage>`. For skill icons add the name of icon from [Skill Icons pack](https://github.com/tandpfun/skill-icons).

> **Warning**
> If you don't provide all these three options You will encounter an error. If you don't want to use icon or Skill Icons pack doesn't have an icon for your skill use your skill like this: `?l=javascript,,75`.

## Add multiple skills
If you want to add multiple skills, Add the following lines to your readme.md file:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&l=javascript,js,55)](https://github.com/moheb2000/readme-skill-level)
```
The result is:

![Custom background](./screenshots/multiple-skills.png)
## Theming
You can change some of colors in final svg.
> **Warning**
> Keep in mind that you need to use hex colors for colors and you should provide it with **6 characters and without #** like this: `dd3737` and therefore `#dd3737` or `222` isn't valid for the API.
### Change background color
For changing background color use these codes:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bg_color=00005B)](https://github.com/moheb2000/readme-skill-level)
```
The result is:

![Custom background](./screenshots/custom-background.png)
### Change border color
For changing border color use these codes:
```md
[![My Skill Levels](https://readme-skill-level.moheb2000.workers.dev/v1?l=html,html,90&l=css,css,75&bd_color=00005B)](https://github.com/moheb2000/readme-skill-level)
```
The result is:

![Custom border](./screenshots/custom-border.png)
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