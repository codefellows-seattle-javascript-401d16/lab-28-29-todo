# Lab 28-29-30

401 JS --  Lab 28 Todo
===


## Requirements  

#### Feature Tasks
Create the following components and structure them according to the following diagram.  
```
App
  NoteCreateForm
  NoteList
    Noteitem
```
###### App Component
* The app component should manage the entire **application state**.
* The state should contain a notes array
* each note thats added should have the following data
  * `id`: allways should contain the result of `uuid.v1()`
  * `editing`: false by default
  * `completed`: false by default
  * `content`: user provided content

###### NoteCreateForm Component
* `onSubmit` the NoteCreateForm should add a note to the application state

###### NoteList Component
* should display an unordered list of NoteItem components

###### NoteItem
* should display the notes content
* should display a delete button
  * `onClick` the note should be removed from the application state

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's functionality defined to remove a note from the App's state

####  Documentation  
Write a description of the project in your README.md
