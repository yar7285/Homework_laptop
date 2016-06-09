
var url = 'https://www.google.com.ua/search?q=dr&oq=dr&aqs=chrome..69i57j0l5.1596j0j4&sourceid=chrome&ie=UTF-8#q=%D0%B2%D0%BA';

function urlArgs(url) {     // created a new function;

    var index = url.indexOf('?');
    var args = {};  // created a new variable:object,empty;
    var query = url.substring(index);  // created new variable query, which will be search querystring URL with 1-st index to end;
    var pairs = query.split("&"); // created new variable pairs, which will be record string in the array,and if string has '&',array will share coma;

    for(var i = 0;i < pairs.length; i++) { // created new cycle;
        var pos = pairs[i].indexOf('='); // created new variable , which will be return number of the element in array,if don't have return -1;
        if(pos == -1) continue; // if element don't have '=' ,pos == -1 ,cycle continue;
        var name = pairs[i].substring(0,pos);// created new variable , which have URL with 0 index to ,pos === number, pos index,don't include pos;
        var value = pairs[i].substring(pos+1);// variable value ,have URL with 0 position to pos+1, include '=';
        value = decodeURIComponent(value); // rewrite value , record in variable decoding element value;
        args[name] = value; // recording in object, property name.
        }
    console.log(url)
    return console.log (args); // return  object;
}
urlArgs(url);
