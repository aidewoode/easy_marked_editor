var EasyMarked = {};

EasyMarked.Editor = function() {

};

EasyMarked.toolbar = [
  {name: "bold", className: "fa-bold", action: boldClick},
  {name: "italic", className: "fa-italic", action: italicClick},
  {name: "link", className: "fa-link", action: linkClick},
  {name: "picture", className: "fa-picture-o", action: pictureClick},
  {name: "preview", className: "fa-eye", action: previewClick}
];

EasyMarked.Editor.prototype.load = function() {
  var textarea = document.querySelector("#easyMarked");

  this.element = textarea;
  this.element.style.display = "none";

  this.createBody();
  
  EasyMarked.Ace = ace.edit("easyMarkedBody");

  var editor = EasyMarked.Ace;
  editor.setTheme("ace/theme/tomorrow");
  editor.renderer.setShowGutter(false);
  editor.renderer.setPadding(10);
  editor.setHighlightActiveLine(false);
  editor.getSession().setMode("ace/mode/markdown");

  this.createToolbar();
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
        EasyMarked.toolbar[i].action();
      }
    }
  });
 
};

EasyMarked.Editor.prototype.createBody = function() {
  var body = document.createElement("div");
  body.id = "easyMarkedBody";

  body.style.height = this.element.style.height;
  body.style.width = this.element.style.width;

  this.element.parentNode.appendChild(body);

  
};

EasyMarked.Editor.prototype.eventBuding = function(element) {

};

function insertInCursorAndMoveCursor(text, offset) {
  EasyMarked.Ace.insert(text);

  var cursorPosition = EasyMarked.Ace.getCursorPosition();
  EasyMarked.Ace.moveCursorTo(cursorPosition.row, cursorPosition.column - (text.length- offset));
  EasyMarked.Ace.focus();

}


function boldClick() {
  insertInCursorAndMoveCursor("****", 2);
}

function italicClick() {
  insertInCursorAndMoveCursor("**", 1);
}

function linkClick() {
  insertInCursorAndMoveCursor("[](http://)", 1);
}

function pictureClick() {
  insertInCursorAndMoveCursor("![](http://)", 2);
}

function previewClick() {
//
}




