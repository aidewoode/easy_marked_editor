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

  describe("When click the toolbar button", function() {
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, true, document.defaultView, 0,0,0,0,0, false,
                        false,false,false,0,null);
    it ("should add indicator of bold after click bold button", function() {
      editor.setValue("");
      var boldButton = document.querySelector("span.fa-bold");
      boldButton.dispatchEvent(event);
      expect(editor.getUnformattedValue().trim()).toBe("****");
    });

    it ("should add indicator of italic after click italic button", function() {
      editor.setValue("");
      var italicButton = document.querySelector("span.fa-italic");
      italicButton.dispatchEvent(event);
      expect(editor.getUnformattedValue().trim()).toBe("**");
    });

    it ("should add indicator of link after click link button", function() {
      editor.setValue("");
      var linkButton = document.querySelector("span.fa-link");
      linkButton.dispatchEvent(event);
      expect(editor.getUnformattedValue().trim()).toBe("[](http://)");
    });

    it ("should add indicator of picture after click picture button", function() {
      editor.setValue("");
      var pictureButton = document.querySelector("span.fa-picture-o");
      pictureButton.dispatchEvent(event);
      expect(editor.getUnformattedValue().trim()).toBe("![](http://)");
    });

    it ("should preview the formatted text after click preview button ", function() {
      editor.setValue("");
      editor.setValue("#a title");
      var previewButton = document.querySelector("span.fa-eye");
      previewButton.dispatchEvent(event);

      var previewBody = document.querySelector(".easyMarkedPreview");
      expect(previewBody.innerHTML.trim()).toBe('<h1 id="a-title">a title</h1>');
      previewButton.dispatchEvent(event);
    });

    it ("should can't click other button after click preview button", function() {
      var previewButton = document.querySelector("span.fa-eye");
      var boldButton = document.querySelector("span.fa-bold");

      editor.setValue("");
      previewButton.dispatchEvent(event);
      expect(boldButton.classList.contains("disabled")).toBe(true);

      previewButton.dispatchEvent(event);

    });
  });

});
