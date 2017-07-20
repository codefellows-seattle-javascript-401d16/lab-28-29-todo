#### Feature Tasks
Create the following components and structure them according to the following diagram.  

```
App
  NoteCreateForm
  NoteList
    NoteItem

```
###### App Component
* The app component manages the entire **application state**.
* The state contains a notes array
* each note that gets added has the following data
  * `id`: contains the result of `uuid.v1()`
  * `editing`: false by default
  * `completed`: false by default
  * `content`: user provided content

###### NoteCreateForm Component
* `onSubmit` the NoteCreateForm adds a note to the application state

###### NoteList Component
* displays an unordered list of NoteItem components

###### NoteItem
* displays the notes content
* displays a delete button
  * `onClick` the note gets removed from the application state

#### Test
* Tested NoteCreateForm
  * Tested the onChange handler
  * Tested the onSubmit handler
* Tested NoteItem
  * Tested the NoteItem's functionality defined to remove a note from the App's state
