# Express Server

This project contains an Express server implemented with Node.js. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `express-server/src/index.js`: This file contains the implementation of the Express server with two routes. It handles adding a task to a list and retrieving the list.

- `express-server/src/app.js`: This file sets up the Express application and defines the routes.

- `express-server/package.json`: This file lists the dependencies required for the Express server and other dependencies.

- `express-server/Dockerfile`: This file is used to build a Docker image for the Express server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Express server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Express server and start the containers defined in the `docker-compose.yml` file.

- The Express server should now be running. You can access it at port `8001`.

## API Routes

The Express server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
