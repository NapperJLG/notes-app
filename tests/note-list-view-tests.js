function storesNoteList() {

  notelist = new NoteList();
  notelist.addNote("test");
  notelistview = new NoteListView(notelist);
  if(notelistview.noteList !== notelist) {
    throw new Error("note list has not been stored!")
  };
};
storesNoteList();

function returnsSingleNoteAsHtml() {
  notelist = new NoteList
  notelist.addNote("test");
  notelistview = new NoteListView(notelist);
  if(notelistview.renderList() !== '<ul><li><div>test</div></li></ul>') {
    throw new Error("html string not rendered!")
  };
};
returnsSingleNoteAsHtml();

function returnsTwoNotesAsHtml() {
  notelist = new NoteList
  notelist.addNote("test");
  notelist.addNote("test2")
  notelistview = new NoteListView(notelist);
  if(notelistview.renderList() !== '<ul><li><div>test</div></li><li><div>test2</div></li></ul>') {
    throw new Error("html string not rendered!")
  };
};
returnsTwoNotesAsHtml();

function returnsNoListAsUndefined() {
  notelist = new NoteList
  notelistview = new NoteListView(notelist);
  if(notelistview.renderList() !== undefined) {
    throw new Error("empty list should equal undefined!")
  };
};
returnsNoListAsUndefined();
