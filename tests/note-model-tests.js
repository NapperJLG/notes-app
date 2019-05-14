(function(exports) {
  function storesStringAsNoteText() {
    var note = new Note('Test!');

    if (note.content !== 'Test!') {
      throw new Error("Note does not say test!");
    }
  };
  storesStringAsNoteText();
})(this);

(function(exports){
  function noteCanBeReturned() {
    var note = new Note('Test2');
    if (note.readNote() !== 'Test2') {
      throw new Error("Note does not return test2");
    }
  };
  noteCanBeReturned();
})(this);
