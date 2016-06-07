var btn1 = document.querySelector('.one');
 function obj() {
     for(var key  in window){
         console.log(window[key])
     }
 }
 btn1.addEventListener('click', obj);

var btn2 = document.querySelector('.two');
 function newopen() {
//window.open("https://www.google.com.ua/webhp?hl=uk","new page")
 window.open("file:///C:/Users/Yaroslav/Desktop/for%20Julia/propery.html","new page")
 }
 btn2.addEventListener('click', newopen);

var btn3 = document.querySelector('.three');
 function property() {
     var el = newopen();
     for(var key  in el){
         el.window.console.log(key + " " + el[key])
 }
     }

 btn3.addEventListener('mousedown', property, false);

var btn4 = document.querySelector('.four');
 function resizeto() {
     var k = window.open("https://www.google.com.ua/webhp?hl=uk","new page",'height=500,width=500');
     k.window.resizeTo(500,500);
 }
 btn4.addEventListener('mousedown', resizeto, false);


var btn5 = document.querySelector('.five');
 function resizeby() {
     var k = window.open("https://www.google.com.ua/webhp?hl=uk","new page",'height=500,width=500');
     k.focus(0,0);
     k.resizeBy(-100,-100);
 }
 btn5.addEventListener('mousedown', resizeby, false);

var btn6 = document.querySelector('.six');
 function scrolby() {
     var k = window.open("https://learn.javascript.ru/document","new page")//,"height=300,width=600");
     window.scrollBy(0,100);
 }
 btn6.addEventListener('click', scrolby);


document.querySelector('.seven').addEventListener('click', scrolto);
function scrolto () {
    window.scrollTo(200,250);
}
document.querySelector('.eight').addEventListener('click', focus_new);
function focus_new(){
    var k = window.open("https://www.google.com.ua/", "google")//, "height = 500px,width=500px");
    k.focus();
    setTimeout(function(){
        k.blur();
    },3000);
}


document.querySelector('.nine').addEventListener('click', print);
function print() {
    var newWin = window.open("https://www.google.com.ua/", "google", "height = 500px,width=500px");
    setTimeout(function(){newWin = window.close()}, 3000);

    newWin.focus();
}