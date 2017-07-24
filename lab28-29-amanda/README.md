This is a simple React form styled with created and exported Sass partials. The front end routes use react-router-dom. The application is structured  into modules, the application is in a lift state to lift to better control one way data flow

The directory includes:

README.md -- with a documention about your lab
.babelrc -- with all dependencies and dev-dependencies
.eslintrc -- with the class .eslintrc file
.gitignore -- with a robust gitignore
.eslintignore -- with the class .eslintignore
yarn.lock -- with the yarn lockfile
package.json -- with all dependencies and dev-dependencies
webpack.config.js -- with webpack config
src/ -- containing the front end code
src/main.js -- containing the entire app
src/style -- containing your sass
src/style/main.scss -- for importing and including reset and base
src/style/_vars.scss -- sass variables
src/style/_reset.scss -- sass reset
src/style/_base.scss -- base styles
src/style/_layout.scss -- layout styles
Feature Tasks

The app component manages the entire application state.
The state should contain a notes array and
each note added should has the following data
id: a result of uuid.v1()
* editing: false by default
* completed: false by default
* content: user provided content
* onSubmit the NoteForm adds a note to the application state
* displays an unordered list of NoteItem components
* displays the notes content
* displays a delete button
onClick: note is removed from the application state
