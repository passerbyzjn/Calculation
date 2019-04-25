/*index.js*/
  var foothidden = document.getElementById('footer');
  foothidden.setAttribute('class','hidden');
  window.scrollTo(0, 0);
  var todovalue;
  var complete = new Array();
  var all = new Array();
  var newtodo;
  var todolistid=0;
  var activenum;

 function enter(event) {
   todovalue = document.getElementsByClassName('new-todo');
   newtodo = todovalue[0].value;
   if (newtodo=="") {
     return false;
   }
     if (event.keyCode == 13) {
       insertdiv();
       document.getElementsByClassName('new-todo')[0].value="";
     }
   }

 function insertdiv(){
   var maincss = document.getElementsByClassName("main")[0];
   maincss.style.cssText="display:table;";
   var todolist = document.createElement('li');
   todolist.innerHTML = '<div class = "view"><input class="toggle" type="checkbox" onclick="check()"><label>'+ newtodo +'</label><button class = "destroy"></button></div><input class="edit" value="'+ newtodo +'">';
   todolistid = todolistid + 1;
   todolist.id = todolistid ;
   var list = document.getElementById('mylist')
   list.insertBefore(todolist,list.childNodes[0]);
   activeitem();
   footadd();
 }

 function footadd(){
   activeitem();
   if (activenum > 0) {
       foothidden.setAttribute('class','footer');
     }
     else {
       foothidden.setAttribute('class','hidden');
     }
   }
// list "x" button实现删除:事件委托方法
   var oUI = document.getElementById("mylist");
   oUI.onclick = function(ev){
     var ev = ev || window.event;
     var target =  ev.target ||  ev.scrElement;
     if (target.nodeName.toLowerCase() == 'button'){
         oUI.removeChild(target.parentNode.parentNode);
         activeitem();
         footadd();
     }
   }
// list "x" button实现删除

   function activeitem(){
     activenum = document.getElementsByClassName('view').length;
     var footid = document.getElementsByTagName('strong')[0];
     footid.innerHTML = activenum;
   }

// list "O" checkbox实现更改class:事件委托方法

     // function check(){
       // var completedcheck = document.getElementById('mylist');
       // var ev = ev || window.event;
       // var target =  ev.target ||  ev.scrElement;
       // if (target.nodeName.toLowerCase() == 'input'){
         // if (checkbox.checked == true){
           // target.parentNode.parentNode.class = "completed";
         // }
         // else {
           // target.parentNode.parentNode.class = "view";
         // };
       // }
       // else {
         // return false;
       // }
     // }

   // var oUI = document.getElementById("mylist");
   // oUI.onclick = function(ev){
     // var ev = ev || window.event;
     // var target =  ev.target ||  ev.scrElement;
     // if (target.nodeName.toLowerCase() == 'button'){
         // oUI.removeChild(target.parentNode.parentNode);
     // }
   // }

   // var active = document.getElementsByClassName("view").length;
