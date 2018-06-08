
// function hidePython(obj) {
//   clearElementSiblingStyle(obj)
//   hideContent(obj)
// }
// function hidePowershell(obj) {
//   clearElementSiblingStyle(obj)
//   hideContent(obj)
// }
// function hideOutput(obj) {
//   clearElementSiblingStyle(obj)
//   hideContent(obj)
// }
function clearElementSiblingStyle(obj){
    var children = obj.parentNode.children;
    for (i = 0 ; i < children.length; i++) {
    children[i].className = "button";
    }
    obj.className = "button active"
}
function hideContent(obj){
  clearElementSiblingStyle(obj)
  var grid_item = obj.parentNode.parentNode.children;
    if (obj.innerText == "Python"){
      if (grid_item[1].className == "editor-colors lang-python"){
        grid_item[1].style.display='block'; //Python
        grid_item[2].style.display='none';  //PowerShell
        grid_item[3].style.display='none';  //Output
      }
      else{
        obj.style.display = 'none'
      }
    }
    if (obj.innerText == "PowerShell"){
      grid_item[1].style.display='none'; //Python
      grid_item[2].style.display='block';  //PowerShell
      grid_item[3].style.display='none';  //Output
    }
    if (obj.innerText == "Output"){
      grid_item[1].style.display='none'; //Python
      grid_item[2].style.display='none';  //PowerShell
      grid_item[3].style.display='block';  //Output
    }
}
