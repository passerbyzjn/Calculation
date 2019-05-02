/*index.js*/
  var foothidden = document.getElementById('footer');
  foothidden.setAttribute('class','hidden');
  window.scrollTo(0, 0);
  var newtodo;
  var todolistid=0;
  var activenum;

 function enter(event) {
   newtodo = document.getElementsByClassName('new-todo')[0].value;
   if (newtodo == "") {
     return false;
   }
     if (event.keyCode == 13) {
       insertdiv();
       clear();
       document.getElementsByClassName('new-todo')[0].value="";
     }
  }

 function insertdiv(){
   var maincss = document.getElementsByClassName("main")[0];
   maincss.style.cssText="display:table;";
   var todolist = document.createElement('li');
   todolist.innerHTML = '<div class = "view" id = "div ' + todolistid + '"><input class="toggle" type="checkbox" onclick = "check()"><label>'+ newtodo +'</label><button class = "destroy"></button></div><input class="edit" value="'+ newtodo +'">';
   todolistid = todolistid + 1;
   todolist.id = todolistid ;
   todolist.setAttribute('class','active');
   var list = document.getElementById('mylist')
   list.insertBefore(todolist,list.childNodes[0]);
   activeitemsleft();
   footadd();
 }

 function footadd(){
   activeitemsleft();
   foothidden.className = (activenum > 0) ? 'footer' : 'hidden';
   }

   var oUI = document.getElementById("mylist");
   oUI.onclick = function(ev){
     var ev = ev || window.event;
     var target =  ev.target ||  ev.scrElement;
     if (target.nodeName.toLowerCase() == 'button'){
         oUI.removeChild(target.parentNode.parentNode);
         activeitemsleft();
         footadd();
         clear();
     }
   }
 function activeitemsleft(){
     activenum = document.getElementsByClassName('view').length;
     var footid = document.getElementsByTagName('strong')[0];
     footid.innerHTML = active.length;
 }
function check(){
       var completedcheck = document.getElementById('mylist');
       var ev = ev || window.event;
       var target =  ev.target ||  ev.scrElement;
       if (target.nodeName.toLowerCase() == 'input'){
         target.parentNode.parentNode.className = (target.checked == true) ? 'completed':'active';
        }
        clear();
 }
 var active = document.getElementsByClassName('active');
 var completed = document.getElementsByClassName('completed');
 var clearbtn  = document.getElementsByClassName('clear-completed')[0];
 function clear(){
   clearbtn.className = (completed.length > 0) ? 'clear-completed':'hidden';
    }
    clearbtn.onclick = function(){
      if (completed.length > 0) {
        for (var i = completed.length - 1; i >= 0;i--) {
         completed[i].parentNode.removeChild(completed[i]);
        }
      }
      footadd();
      clear();
    }

var list = document.getElementById('mylist');

 document.getElementsByClassName('alllist')[0].onclick = function(){
    for (var i = 0;i<active.length; i++) {
      active[i].setAttribute('class','active');
    }
    for (var i = 0;i<completed.length; i++) {
      completed[i].setAttribute('class','completed');
    }
    document.getElementsByClassName('alllist')[0].setAttribute('class','alllist selected');
    document.getElementsByClassName('alive')[0].setAttribute('class','alive');
    document.getElementsByClassName('done')[0].setAttribute('class','done');
 }

 document.getElementsByClassName('alive')[0].onclick = function(){
    for (var i = 0;i<active.length; i++) {
      active[i].setAttribute('class','active');
    }
    for (var i = 0;i<completed.length; i++) {
      completed[i].setAttribute('class','completed hidden');
    }
    document.getElementsByClassName('alllist')[0].setAttribute('class','alllist');
    document.getElementsByClassName('alive')[0].setAttribute('class','alive selected');
    document.getElementsByClassName('done')[0].setAttribute('class','done');
 }

  document.getElementsByClassName('done')[0].onclick = function(){
    for (var i = 0;i<active.length; i++) {
      active[i].setAttribute('class','active hidden');
    }
    for (var i = 0;i<completed.length; i++) {
      completed[i].setAttribute('class','completed');
    }
    document.getElementsByClassName('alllist')[0].setAttribute('class','alllist');
    document.getElementsByClassName('alive')[0].setAttribute('class','alive');
    document.getElementsByClassName('done')[0].setAttribute('class','done selected');
 }

document.getElementsByTagName('label')[0].onclick = function(){
var selectall = document.getElementById('toggle-all');
var toggle = document.getElementsByClassName('toggle')
  if (selectall.checked == false) {
    for (var i = 0; i < toggle.length; i++) {
      toggle[i].checked = true;
      toggle[i].parentNode.parentNode.className='completed';
    }
  }
  else{
    for (var i = 0; i < toggle.length; i++) {
      toggle[i].checked = false;
      toggle[i].parentNode.parentNode.className='active';
    }
  }
  clear();
  activeitemsleft();
}
