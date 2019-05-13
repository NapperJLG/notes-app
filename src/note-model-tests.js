(function(exports) {
  function storesStringAsNoteText() {
    var note = new Note('Test!');

    if (note.content !== 'Test!') {
      throw new Error("Note does not say test!");
    }
  };

  function noteCanBeReturned() {
    var note = new Note('Test2');
    if (note.readNote() !== 'Test2') {
      throw new Error("Note does not return test2");
    }
  };
  exports.noteCanBeReturned = noteCanBeReturned;
  exports.storesStringAsNoteText = storesStringAsNoteText;
})(this);

storesStringAsNoteText();
noteCanBeReturned();

//TESTS PASS!!!
