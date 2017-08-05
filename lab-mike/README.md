# Lab 28-29-30

The components in this application have the layout

App
  Dashboard
    NoteForm
    NoteList
      NoteItem
        NoteUpdateForm

The app should be started by running yarn watch or yarn build, then navigating to the appropriate end point.

A user can enter their note in the input area and click the add note button. The note is then populated into a list. As more notes get added, the list gets bigger. A note can be deleted by pressing the delete button. A note can be edited by double clicking it's content. The note changes into an input form, and we can edit the text content.

Tests are written for creating a note, updating a note and removing a note and can be run with yarn test.
