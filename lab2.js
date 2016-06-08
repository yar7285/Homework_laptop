function urlArgs() {     // created a new function;
    var args = {};  // created a new variable:object,empty;
    var query = document.location.search.substring(1);  // created new variable query, which will be search querystring URL with 1-st index to end;
    var pairs = query.split("&"); // created new variable pairs, which will be record string in the array,and if string has '&',array will share coma;

    for(var i = 0;i < pairs.length; i++) { // created new cycle;
        var pos = pairs[i].indexOf('='); // created new variable , which will be return number of the element in array,if don't have return -1;
        if(pos == -1) continue; // if element don't have '=' ,pos == -1 ,cycle continue;
        var name = pairs[i].substring(0,pos);// created new variable , which have URL with 0 index to ,pos === number, pos index,don't include pos;
        var value = pairs[i].substring(pos+1);// variable value ,have URL with 0 position to pos+1, include '=';
        value = decodeURIComponent(value); // rewrite value , record in variable decoding element value;
        args[name] = value; // recording in object, property name.
        }
    return args; // return  object;
}
