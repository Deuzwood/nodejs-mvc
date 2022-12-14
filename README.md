# Node.js MVC Template

This is a template for a Node.js web application built using the Model-View-Controller (MVC) pattern.

## Installation

To use this template, clone the repository and install the necessary dependencies:

```
git clone https://github.com/Deuzwood/nodejs-mvc.git
cd nodejs-mvc
npm install
```

## Usage

To start the application, run the following command:
```
npm start
```
This will start the application server on your local machine, and you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

## Directory Structure

The directory structure for this template is as follows:

- /controllers: This directory is used to store the controller files for your application. A controller is responsible for handling incoming requests, manipulating data if necessary, and then returning a response to the client.
- /cypress: This directory is used to store the test files for your application. Cypress is a popular testing tool for web applications, so this directory is used to store test files that are run using the Cypress testing framework.
- /models: This directory is used to store the model files for your application. A model represents the data that your application works with, and is typically used to interact with the database.
- /public: This directory is used to store static assets such as images, CSS files, and JavaScript files that are served directly to the client.
- /routes: This directory is used to store the route files for your application. A route is responsible for defining the endpoints of your application, and mapping them to the appropriate controller actions.
- /views: This directory is used to store the view files for your application. A view is responsible for rendering the user interface, and is typically written using a templating engine. Here EJS.
- app.js: This file is the entry point for your application, and is responsible for setting up the necessary dependencies, configuring the application, and starting the application server.
