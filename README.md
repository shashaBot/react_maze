# Mario Maze
A dockerized react application for Mario maze game.

## How to play
1. Select the the dimensions of the maze grid.
2. Try to collect all mushrooms in minimum number of steps.
3. Voila! Your score is displayed along with your status when you clear the field.

## Demo
![Demo](https://raw.githubusercontent.com/shashaBot/react_maze/master/resources/demo.gif)

## How to develop
1. Fork and clone using `git clone`
2. `npm install` in root directory to install dependencies.
3. `npm run start` to start the development server with file watch mode on.
4. Make changes and see your results instantly on `localhost:3000`.

## How to install (from Docker Image)
`docker pull shashabot/react_maze_image-prod`

[Docker Image](https://hub.docker.com/r/shashabot/react_maze_image-prod)

## How to install (with docker-compose)
1. Fork and clone your forked repository.
2. Run `npm run docker:prod:run` for production build.

## Linting
Use `npm run lint` to start it manually.
Note: Automatic linting set up with React Webpack dev server with "ESLint" and "Prettier".
