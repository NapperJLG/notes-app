(function(exports) {
  var Note = function(content) {
    this.content = content
  };

  Note.prototype.readNote = function () {
    return this.content;
  };

  exports.Note = Note;
})(this);
