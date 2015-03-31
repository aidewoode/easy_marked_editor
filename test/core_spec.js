describe("When load a EasyMarked Editor", function(){
  var textarea = document.createElement("textarea");
  textarea.id = "easyMarked";
  var body = document.querySelector("body");

  body.appendChild(textarea);
  var editor = new EasyMarked.Editor;
  editor.load();

  it("should render all integrant elements", function() {
    var easyMarkedBody = document.querySelector("#easyMarkedBody");
    var easyMarkedPreview = document.querySelector(".easyMarkedPreview");
    var easyMarkedToolBar = document.querySelector(".easyMarkedToolBar");
    expect(easyMarkedBody).not.toBe(null);
    expect(easyMarkedPreview).not.toBe(null);
    expect(easyMarkedToolBar).not.toBe(null);
  });

  it("should set the formatted value to textarea element", function() {
    var testText = "**a bold text**";
    
    editor.setValue(testText);
    expect(textarea.value.trim()).toBe("<p><strong>a bold text</strong></p>");
  });

  it ("should get the formatted text by using getValue function ", function() {
    var testText = "**a bold text**";

    editor.setValue(testText);
    expect(editor.getValue().trim()).toBe("<p><strong>a bold text</strong></p>");
  });

});
