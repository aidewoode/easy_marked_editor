#Introduction

A simple and easy to use markdown editor.

**This editor is not finished yet, still on development**

##Usage

The editor is depend on **Ace Editor** and **marked.js**. So before you use the editor ,you should add this dependence.

When you added those dependence,you should add a textarea element to the HTML file. Note the element must be a textarea and with the "easyMarked" id.

```html
<textarea id="easyMarked"></textarea>

```

Then you should add the following to your HTML file.

```html
  <link rel="stylesheet" href="....yourpath/style/easymarked.css">
  <script type="text/javascript" src="....yourpath/lib/easymarked.js"></script>
  <script type="text/javascript" charset="utf-8">
    var editor = new EasyMarked.Editor;
    editor.load();
  </script>

```

## Configuration 

The Editor have some options , So you can set the configuration to select this options.

**The supported options:**

- toolbarBackground(string)



  the background color for the toolbar.

- toolbars(array)



  the specific toolbar items you can set(include: "bold", "italic", "link", "picture",  "preview").

- autoSync(boolean)



  By default the editor will auto set the textarea's value that from the user's input. If you set this option to false, then the editor will don't set textarea's value. 
  
  

Example:

```js
  new EasyMarked.Editor({
    toolbarBackground: "#f20",
    toolbars: ["bold", "link", "preview"],
    autoSync: false
  });
```


##Development

If you want to test the application or develope it , you can clone the repository,then run the Gruntfile. It will create the files you need.

```shell

  $ cd easy_marked_editor
  $ npm install grunt-cli -g
  $ npm install
  $ grunt
```

Then you can open test directory ,and use browser to open the index.html file, now you can test the editor.



