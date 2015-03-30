var EasyMarked = {

  insertInCursorAndMoveCursor: function(text, offset) {
    var editor = this.Ace;
    editor.insert(text);

    var cursorPosition = editor.getCursorPosition();
    editor.moveCursorTo(cursorPosition.row, cursorPosition.column - (text.length- offset));
    editor.focus();

  },
  

  boldClick: function() {
    this.insertInCursorAndMoveCursor("****", 2);
  },

  italicClick: function() {
    this.insertInCursorAndMoveCursor("**", 1);
  },

  linkClick: function() {
    this.insertInCursorAndMoveCursor("[](http://)", 1);
  },

  pictureClick: function() {
    this.insertInCursorAndMoveCursor("![](http://)", 2);
  },

  previewClick: function() {
    var previewBody = document.querySelector(".easyMarkedPreview");
    var easyMarkedBody = document.querySelector("#easyMarkedBody");
    var clickButton = document.querySelectorAll(".fa");
    var previewButton = document.querySelector(".fa-eye");

    if (previewBody.style.display === "none") {
      var context = EasyMarked.Ace.getValue();
      var htmlContext = marked(context);

      easyMarkedBody.style.display = "none";

      for (var i = 0; i < clickButton.length - 1; i++) {
        clickButton[i].classList.add("disabled");
      }

      previewBody.innerHTML = htmlContext;
      previewButton.classList.add("active");
      previewBody.style.display = "block";

    } else {
      easyMarkedBody.style.display = "block";

      for (var i = 0; i < clickButton.length - 1; i++) {
        clickButton[i].classList.remove("disabled");
      }

      previewButton.classList.remove("active");
      previewBody.style.display = "none";

      this.Ace.focus();
    }

  },

  toolbar: [
    {name: "bold", className: "fa-bold", action: function() { return this.boldClick();}},
    {name: "italic", className: "fa-italic", action: function() { return this.italicClick();}},
    {name: "link", className: "fa-link", action: function() { return this.linkClick();}},
    {name: "picture", className: "fa-picture-o", action: function() { return this.pictureClick();}},
    {name: "preview", className: "fa-eye", action: function() { return this.previewClick();}}
  ],


  Editor: function() {

  },

};


EasyMarked.Editor.prototype.load = function() {
  var textarea = document.querySelector("#easyMarked");

  this.element = textarea;
  this.element.style.display = "none";

  this.createBody();
  this.loadAce();
  this.createToolbar();
  this.eventBuding();
};                    

EasyMarked.Editor.prototype.loadAce = function() {

  EasyMarked.Ace = ace.edit("easyMarkedBody");

  var editor = EasyMarked.Ace;
  editor.setTheme("ace/theme/tomorrow");
  editor.renderer.setShowGutter(false);
  editor.renderer.setPadding(10);
  editor.setHighlightActiveLine(false);
  editor.getSession().setUseWrapMode(true);
  editor.getSession().setMode("ace/mode/markdown");

};

EasyMarked.Editor.prototype.createToolbar = function() {
  var bar = document.createElement("div");
  bar.className = "easyMarkedToolBar";

  bar.style.width = this.element.style.width;

  var ul = document.createElement("ul");
  var itemsHtml = "";
  for (var i = 0; i < EasyMarked.toolbar.length ; i++) {
    itemsHtml += '<li><a ' + 'class=' + '"item' + i + '"' + '><span class="fa ' + EasyMarked.toolbar[i].className + '"></span></a></li>';
  }
  ul.innerHTML = itemsHtml;
  bar.appendChild(ul);

  this.element.parentNode.insertBefore(bar, this.element);

  ul.addEventListener("click", function(event) {
    var target = event.target.parentNode

    for (var i = 0; i < EasyMarked.toolbar.length; i++) {
      if(target.className === "item" + i) {
        EasyMarked.toolbar[i].action.apply(EasyMarked);
      }
    }
    
  }, false);

 
};

EasyMarked.Editor.prototype.createBody = function() {
  var body = document.createElement("div");
  body.id = "easyMarkedBody";

  body.style.height = this.element.style.height;
  body.style.width = this.element.style.width;

  this.element.parentNode.appendChild(body);

  var previewBody = document.createElement("div");
  previewBody.className = "easyMarkedPreview";

  previewBody.style.display = "none";
  previewBody.style.height = this.element.style.height;
  previewBody.style.width = this.element.style.width;

  this.element.parentNode.appendChild(previewBody);
  
};

EasyMarked.Editor.prototype.eventBuding = function(element) {

  var editor = EasyMarked.Ace;
  var textarea = this.element;
  var easyMarkedBody = document.querySelector("#easyMarkedBody");


  editor.getSession().on("change", function(){
    textarea.value = marked(editor.getValue());
  });

  easyMarkedBody.onkeydown = function(event) {
    // Ctrl-z for undo operation.
    if ( event.ctrlKey && event.keyCode === 90) {
      editor.getSession().getUndoManager().undo(true);
    }

    // Ctrl-y for redo operation.

    if (event.ctrlKey && event.keyCode === 89) {
      editor.getSession().getUndoManager().redo(true);
    }
  };

};

