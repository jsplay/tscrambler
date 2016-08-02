/**
 * Created by Jay Dee on 02/08/16.
 */

var tags = ["b", "i", "sup", "sub", "ins", "u", "strike", "tt", "big", "small"];

function scramble(inputString) {
    var out = "";
    for (var i=0; i < inputString.length; i++) {
        r =  Math.floor(Math.random() * tags.length);
        out += "<" + tags[r] + ">" + inputString[i] + "</" + tags[r] + ">";
    }
    document.getElementById("myoutput").value = out;
    document.getElementById("myoutput2").innerHTML = out;
}