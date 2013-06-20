if(!com) var com={};
if(!com.chrisholtz) com.chrisholtz={};

//
// Dual editor library, converts any text area with whose class name
// is "dual_editor" into... well, a dual editor. The text area's width
// is halved and the other half is replaced by a div that auto-updates
// with the text typed into th text area - complete with markup.
//
com.chrisholtz.dual_editor = function()
{
  var private = {};
  // for now only grab the first
  private.textArea = document.getElementsByClassName("dual_editor")[0];

  //
  // Initialize editor elements
  //
  private.init = function()
  {
    private.layout();
    private.setEventHandler();
  };
  
  //
  // create editor display and place it side by side
  // with the text area
  //
  private.layout = function()
  {
    var editorParent      = document.createElement("div");
    private.editorDisplay = document.createElement("div");
    var editorClear       = document.createElement("div");


    // style the text area and display to be side by side
    private.textArea.style.cssFloat      = "left";
    private.textArea.style.border        = "solid 1px #ccc";
    private.textArea.style.marginRight   = "10px";
    private.textArea.style.padding       = "5px";
    private.textArea.style.width         = (private.textArea.clientWidth / 2) + "px";
    //private.textArea.style.width         = "500px";
    private.textArea.style.overflowX     = "auto";
    private.textArea.setAttribute("wrap", "soft");

    private.editorDisplay.style.overflowY = "auto";
    private.editorDisplay.style.cssFloat = "left";
    private.editorDisplay.style.display  = "block";
    private.editorDisplay.style.border   = "solid 1px #ccc";
    private.editorDisplay.style.width    = private.textArea.clientWidth + "px";
    //private.editorDisplay.style.width    = "960px";
    private.editorDisplay.style.height   = private.textArea.clientHeight + "px";
    private.editorDisplay.style.padding  = "5px";
    private.editorDisplay.setAttribute('id','display');
    editorClear.style.clear              = "both";

    // Create a div to wrap the text area and move the text area inside
    private.textArea.parentNode.insertBefore(editorParent, private.textArea);
    editorParent.appendChild(private.textArea);
    editorParent.appendChild(private.editorDisplay);
    editorParent.appendChild(editorClear);
    
    private.updateDisplay();
  };

  private.setEventHandler = function()
  {
    private.textArea.addEventListener("keyup", function(event) { private.updateDisplay(event) }, false);
  };

  private.updateDisplay = function(event)
  {
    private.editorDisplay.innerHTML = private.textArea.value;
  };

  private.init();
};

// run all this on page load.
window.addEventListener("load", function(event) {
  com.chrisholtz.dual_editor();
}, false);
