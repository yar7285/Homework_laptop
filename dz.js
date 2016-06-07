var pos = 0;
var divs = document.querySelector('.f');
document.querySelector('.btn1').addEventListener('click', firstbtn);
document.querySelector('.btn2').addEventListener('click', lastbtn);
document.querySelector('.btn3').addEventListener('click', nextel);
document.querySelector('.btn4').addEventListener('click', previousel);
document.querySelector('.btn5').addEventListener('click', addend);
document.querySelector('.btn6').addEventListener('click', addtop);
document.querySelector('.btn7').addEventListener('click', replace);
document.querySelector('.btn8').addEventListener('click', remove);

function firstbtn() {
   if (divs.children.length === 0) {
        alert("There is no elements at all")
    }
    else { divs.firstElementChild.setAttribute('style','background-color: red');
         }
}
function lastbtn() {
    if (divs.children.length === 0) {
        alert("There is no elements at all")
    }
    else {
    divs.lastElementChild.setAttribute('style','background-color: red');
    }
}
function nextel() {
    if(pos !== 0) {
            pos = pos - 1;
    console.log(divs.children[pos]);
        divs.children[pos].removeAttribute('style','background-color: orange');
         pos += 1;
    }
    if(pos === divs.children.length){
        alert("Please Reastar page!!")
    }
    divs.children[pos].setAttribute('style','background-color: orange');
        pos += 1;
}
    var position = 0;
function previousel() {
    if (pos === position) {
    pos = divs.children.length-1;
        position += 10;
    }
    if(pos !== divs.children.length-1) {
            pos = pos + 1;
        divs.children[pos].removeAttribute('style','background-color: orange');
         pos -= 1;
    }
    if(pos === -1){
        alert("Please Reastar page!!")
    }
    divs.children[pos].setAttribute('style','background-color: orange');
        pos -= 1;
}
   function addend() {
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text5'));
       newEl.setAttribute('class','get');
       divs.appendChild(newEl);
   }
   function addtop() {
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text0'));
       newEl.setAttribute('class','get get5');
       var next = divs.children[0];
       divs.insertBefore(newEl,next);
   }
   function replace() {
       var newEl = document.createElement('div');
       newEl.appendChild(document.createTextNode('text0'));
       newEl.setAttribute('class','getnew');
       var next = divs.children[3];
       divs.replaceChild(newEl, next);
   }
   function remove() {
       var next = divs.children[3];
       divs.removeChild(next);
   }
