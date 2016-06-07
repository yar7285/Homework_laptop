var pos;
var divs = document.querySelector('.f');
var button1 = document.querySelector('.btn1');
console.log(divs);
function firstbtn() {
//    var txt = document.querySelector('.get1');
//    var buttons1 = document.getElementById('e');
    if(divs.firstElementChild  === divs){
    divs.firstElementChild.setAttribute('style','background-color: red');
//        buttons1.removeAttribute('id','e');
        return;
    }
    else{
        txt.removeAttribute('style','background-color: red');
        buttons1 = document.body.children[1].children[0].id = 'e';
        return;
    }
}
button1.addEventListener('click', firstbtn);

var button2 = document.querySelector('.btn2');
function lastbtn() {
    var txt = document.querySelector('.get4');
    var buttons1 = document.getElementById('y');
    if(txt === buttons1){
    txt.setAttribute('style','background-color: red');
        buttons1.removeAttribute('id','y');
        return;
    }
    if( txt !== buttons1){
        txt.removeAttribute('style','background-color: red');
        buttons1 = document.body.children[1].children[3].id = 'y';
        return;
    }
}
button2.addEventListener('click', lastbtn);


var button3 = document.querySelector('.btn3');
function nextel() {
    var buttons = document.querySelectorAll('.get');
    var buttons1 = document.getElementById('e');
    var buttons2 = document.getElementById('r');
    var buttons3 = document.getElementById('t');
    var buttons4 = document.getElementById('y');
    
if(buttons[0] === buttons1){
    buttons[0].setAttribute('style','background-color: orange');
    buttons1.removeAttribute('id','e');
    return;
}
    if(buttons[1] === buttons2){
    buttons[1].setAttribute('style','background-color: orange');
    buttons[0].removeAttribute('style','background-color: orange');
    buttons[1].removeAttribute('id','r');
        return;
}
    if(buttons[2] === buttons3){
    buttons[2].setAttribute('style','background-color: orange');
    buttons[1].removeAttribute('style','background-color: orange');
    buttons[2].removeAttribute('id','t');
        return;
}
     if(buttons[3] === buttons4){
    buttons[3].setAttribute('style','background-color: orange');
    buttons[2].removeAttribute('style','background-color: orange');
    buttons[3].removeAttribute('id','y');
         return;
}
    if(buttons1 === null && buttons2 === null && buttons3 === null && buttons4 === null){
        buttons1 =document.body.children[1].children[0].id = 'e';
        buttons2 =document.body.children[1].children[1].id = 'r';
        buttons3 =document.body.children[1].children[2].id = 't';
        buttons4 =document.body.children[1].children[3].id = 'y';
        buttons[3].removeAttribute('style','background-color: orange');
        return;
    }
           
}
 button3.addEventListener('mousedown', nextel, false);




var button4 = document.querySelector('.btn4');
function previousel(e) {
    var buttons = document.querySelectorAll('.get');
    var buttons1 = document.getElementById('y');
    var buttons2 = document.getElementById('t');
    var buttons3 = document.getElementById('r');
    var buttons4 = document.getElementById('e');
    
if(buttons[3] === buttons1){
    buttons[3].setAttribute('style','background-color: orange');
    buttons1.removeAttribute('id','e');
    return;
}
    if(buttons[2] === buttons2){
    buttons[2].setAttribute('style','background-color: orange');
    buttons[3].removeAttribute('style','background-color: orange');
    buttons[2].removeAttribute('id','r');
        return;
}
    if(buttons[1] === buttons3){
    buttons[1].setAttribute('style','background-color: orange');
    buttons[2].removeAttribute('style','background-color: orange');
    buttons[1].removeAttribute('id','t');
        return;
}
     if(buttons[0] === buttons4){
    buttons[0].setAttribute('style','background-color: orange');
    buttons[1].removeAttribute('style','background-color: orange');
    buttons[0].removeAttribute('id','y');
         return;
}
     if(buttons1 === null && buttons2 === null && buttons3 === null && buttons4 === null){
        buttons1 =document.body.children[1].children[0].id = 'e';
        buttons2 =document.body.children[1].children[1].id = 'r';
        buttons3 =document.body.children[1].children[2].id = 't';
        buttons4 =document.body.children[1].children[3].id = 'y';
        buttons[0].removeAttribute('style','background-color: orange');
        return;
    }
}
 button4.addEventListener('mousedown', previousel, false);


var button5 = document.querySelector('.btn5');
   function addend(e) {
       var buttons = document.querySelector('.f');
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text5'));
       newEl.setAttribute('class','get get5');
       buttons.appendChild(newEl);
   }
 button5.addEventListener('mousedown', addend, false);


var button6 = document.querySelector('.btn6');
   function addtop(e) {
       var buttons = document.querySelector('.f');
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text0'));
       newEl.setAttribute('class','get get5');
       var next = buttons.children[0];
       buttons.insertBefore(newEl,next);
   }
 button6.addEventListener('mousedown', addtop, false);

var button7 = document.querySelector('.btn7');
   function replace(e) {
       var buttons = document.querySelector('.f');
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text0'));
       newEl.setAttribute('class','get get5');
       var next = buttons.children[3];
       buttons.replaceChild(newEl, next);
   }
 button7.addEventListener('mousedown', replace, false);

var button8 = document.querySelector('.btn8');
   function remove(e) {
       var buttons = document.querySelector('.f');
       var next = buttons.children[3];
       buttons.removeChild(next);
   }
 button8.addEventListener('mousedown', remove, false);