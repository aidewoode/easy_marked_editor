#Introduction

A simple and easy to use markdown editor.

**This editor is not finished yet, still on development**

##Usage

The editor is depend on **Ace Editor**, **marked.js** and **fontawsome**. So before you use the editor ,you should add this dependence.

When you added those dependence,you can add the following to your HTML file.

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



