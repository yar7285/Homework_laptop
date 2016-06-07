document.querySelector('.one').addEventListener('click', obj);
document.querySelector('.two').addEventListener('click', newopen);
document.querySelector('.three').addEventListener('click', property);
document.querySelector('.four').addEventListener('click', resizeto);
document.querySelector('.five').addEventListener('click', resizeby);
document.querySelector('.six').addEventListener('click', scrolby);
document.querySelector('.seven').addEventListener('click', scrolto);
document.querySelector('.eight').addEventListener('click', focus_new);
document.querySelector('.nine').addEventListener('click', print);

function obj() {
     for(var key  in window){
         console.log(window[key])
     }
 }

 function newopen() {
 window.open("https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies","new page")
 }

 function property() {
     var el = newopen();
     for(var key  in el){
         el.window.console.log(key + " " + el[key])
 }
     }

 function resizeto() {
     var k = window.open("https://www.google.com.ua/webhp?hl=uk","new page",'height=500,width=500');
     k.window.resizeTo(500,500);
 }

 function resizeby() {
     var k = window.open("https://www.google.com.ua/webhp?hl=uk","new page",'height=500,width=500');
     k.resizeBy(250,250);
     k.focus();
 }

 function scrolby() {
     var k = window.open("https://www.google.com.ua/webhp?hl=uk");
     k.window.scrollBy(100,0)
 }


function scrolto () {
    window.scrollTo(200,250);
}

function focus_new(){
    var k = window.open("", "", "height = 500px,width=500px");
     k.document.write("<p>A new window!</p>");
    k.focus();
    setTimeout(function(){
        k.blur();
    },3000);
}

function print() {
    var newWin = window.open("", "google");
     newWin.document.write("<p>This is 'myWindow'</p>");
    setTimeout(function(){
        newWin.close();
                         }, 4000);
        newWin.print();



    newWin.focus();
}
