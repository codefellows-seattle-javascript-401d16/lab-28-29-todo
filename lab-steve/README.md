## Lab-Steve Lab-30/DSA-04 Documentation - React Note Manager

### This app is built on the MERN stack utilizing webpack and creates a note creator and list with the ability to delete and update notes.  A note is updated by double-clicking on its content.

#### The app now includes Sass styling.

  * Installation:
    * Install Node.JS: `sudo apt-get install node`
    * Install Yarn: `sudo apt-get install yarn`
    * Clone this repository: `git clone https://github.com/0smium/lab-28-29-todo.git`
    * Navigate to the newly created 'lab-26-29-todo' folder
    * Switch to the correct branch: `git checkout lab-steve-29`
    * Navigate to the the 'lab-steve' directory
    * Install all node dependencies for the project: `yarn install`
    * Use:
      * `yarn watch`
      * Navigate to `localhost:8080` in your browser to use the app.
      * When done, in the server terminal window, type `ctrl+c` to end the server.

  * Modules:
    * webpack.config.js establishes the configuration for webpack.
    * src/main.js is the entry point for the app and defines states and outputs publicly facing HTML.
    * App components are in the src/component folder.

  * Key NPM Packages:
    * uuid: allows a unique ID to be attached to each note item
    * See package.json for all dependencies for React, webpack, and Babel.

  * Yarn Scripts:
    * "build": "webpack" - Exports static files to ./build necessary to run the app.
    * "watch": "webpack-dev-server --inline --hot" - Runs the app from memory (instead of static files).
