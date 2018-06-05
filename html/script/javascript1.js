
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
window.addEventListener('load', function (){
unhidefirstItem()
addEvent()
}, false);

function unhidefirstItem(){
  var grid_item = document.getElementsByClassName('grid-item')
  for(i=0;i < grid_item.length;i++){
    grid_item[i].children[1].style.display = "block";
  }
}

function addEvent(){
  // add click event on all div with 'button' class name
  // hideContent() function will run on click event
  var btn = document.getElementsByClassName('button')
  for(i=0;i < btn.length;i++){
    btn[i].addEventListener('click',hideContent);
  }
}

function clearElementSiblingStyle(e){
  // select all child element of div with class name of 'b_head'
    var children = e.target.parentNode.children;
    for (i = 0 ; i < children.length; i++) {
      // assign selected child node a 'button' style
    children[i].className = "button";
    }
    // assign current element 'button active' style
    e.target.className = "button active"
}

function hideContent(e){
  // run clearElementSiblingStyle() on current element
  clearElementSiblingStyle(e)
  //button>>
  var grid_item = e.target.parentNode.parentNode.children;
  if (e.target.innerText == "Python"){
    for(i=0;i < grid_item.length;i++){
      if (grid_item[i].classList.contains('lang-python')){
      grid_item[i].style.display='block';
      }
      else if (grid_item[i].className == 'b_head'){
      }
      else{
        grid_item[i].style.display='none';
      }
    }
  }
  if (e.target.innerText == "PowerShell"){
    for(i=0;i < grid_item.length;i++){
      if (grid_item[i].classList.contains('lang-powershell')){
      grid_item[i].style.display='block';
      }
      else if (grid_item[i].className == 'b_head'){
      }
      else{
        grid_item[i].style.display='none';
      }
    }
  }
if (e.target.innerText == "Output"){
    for(i=0;i < grid_item.length;i++){
      if (grid_item[i].classList.contains('lang-')){
      grid_item[i].style.display='block';
      }
      else if (grid_item[i].className == 'b_head'){
      }
      else{
        grid_item[i].style.display='none';
      }
    }
  }
}
