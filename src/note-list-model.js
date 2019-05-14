(function(exports) {
  var NoteList = function () {
    this.notes = []
  };

  NoteList.prototype.showNotes = function () {
    return this.notes;
  };

  NoteList.prototype.addNote = function (note) {
    newnote = new Note(note);
    this.notes.push(newnote);
  };
  exports.NoteList = NoteList;
})(this);
