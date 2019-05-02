# Coding Challenge
## Installation
In order to install the project, first off you should have Node.js installed on your machine.
Then, it's as simple as:
```sh
$ make install
```
or
```sh
$ npm install
```

## How to start the application?
With the installation complete, you just need to run the following command:
```sh
$ make run
```
This command will start the server on port 9000.

## Running the tests
```sh
$ make test
```

## Code
In order to simplify the application code, I chose not to add any dependencies on the client-side. The code was developed on pure JavaScript, using ES6 features supported by the latest versions of browsers. Also, to simplify the development process, I opted not to add any compile process in either CSS and JavaScript.

The unit tests were developed using Jest and they're inside the `app/js/` folder, next to all JavaScript modules.

If the application was for production, I'd consider using a compile process (for example, `babel` plugins) to support older browsers. With the build process, I'd minify and concatenate JavaScript, CSS and HTML.

We have a small performance problem in the infinite scroll, which could definitely be solved using some more advanced technique for updating the DOM, such as Virtual DOM.

In case the application has more features, it'd be a good idea to use React, which in addition to having internally implemented the Virtual DOM, still brings some concepts that facilitate the modularization and maintenance of code, such as the concept of components, states, among others.

Another idea in case of putting the application into production would be to create an API that abstracts the Giphy API. So we could keep the Giphy key on the server-side and implement caching rules to avoid many requests to the Giphy API.
