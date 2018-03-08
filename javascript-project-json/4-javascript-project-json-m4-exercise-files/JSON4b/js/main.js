// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        
        for (var i = 0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first); 
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);
            
            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        }
        
        var myString = "";
        for (var i = 0; i < myStuff.presidents.length; i++) {
            var x = i + 1; 
            myString += "<br>President " + x + " was "; 
            myString += myStuff.presidents[i].first + " ";
            myString += myStuff.presidents[i].last + " ";
            
            myString += "He served from " + myStuff.presidents[i].served + " with ";
            myStuff.vicepresidents[i].first + " "; 
            myStuff.vicepresidents[i].last + " ";
            
            
        }
        document.getElementById('message').innerHTML = myString; 
        
    
    } // end if
} // end function

