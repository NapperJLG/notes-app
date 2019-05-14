(function(exports) {
  var NoteListView = function (notelist) {
    this.noteList = notelist
  };

  NoteListView.prototype.renderList = function () {
    if(this.noteList.notes.length == 0) {
      return;
    };

    var htmlString = this.noteList.notes.map( note => note.content ).join('</div></li><li><div>')
    var htmlList = '<ul><li><div>' + htmlString + '</div></li></ul>'
    console.log(htmlList);
    return htmlList;
    
  };

  exports.NoteListView = NoteListView;
})(this);
