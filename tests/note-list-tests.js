(function(exports) {
  function createsNotesArray() {
    var notelist = new NoteList;
    if(notelist.notes.length !== 0) {
      throw new Error("Empty notes array not created!")
    };
  };
  createsNotesArray();

})(this);

function listsNotesInArray() {
  var notelist = new NoteList;
  notelist.notes = ['walk dog', 'eat stuff'];
  if(notelist.showNotes() !== notelist.notes) {
    throw new Error("notes not listed")
  };
};
listsNotesInArray();

function createsAndStoresNotes(){
  var notelist = new NoteList;
  notelist.addNote("this is my note");
  if(notelist.notes[0].content !== "this is my note") {
    throw new Error("this is not the right note!");
  };
};
createsAndStoresNotes();
