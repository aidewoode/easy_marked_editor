#Introduction

A simple and easy to use markdown editor.

**This editor is not finished yet, still on development**

##Usage

The editor is depend on **Ace Editor** and **marked.js**. So before you use the editor ,you should add this dependence.

When you added those dependence,you should add a textarea element to the HTML file. Note the element must be a textarea and with the "easyMarked" id.

```
<textarea id="easyMarked"></textarea>

```

Then you should add the following to your HTML file.

```
  <link rel="stylesheet" href="....yourpath/style/easymarked.css">
  <script type="text/javascript" src="....yourpath/lib/easymarked.js"></script>
  <script type="text/javascript" charset="utf-8">
    var editor = new EasyMarked.Editor;
    editor.load();
  </script>

```

##Development

If you whant to test the application or develope it , you can clone the repository,then run the Gruntfile. It will create the files you need.

```

  $ cd easy_marked_editor
  $ npm install grunt-cli -g
  $ npm install
  $ grunt
```

Then you can open test directory ,and use browser to open the index.html file, now you can test the editor.



