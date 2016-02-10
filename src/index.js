var piglatin = require('../lib/piglatin');

var areaIn = document.getElementById('input'),
    areaOut = document.getElementById('output');

function translate(text) {
  areaOut.value = piglatin(text);
}

if(areaIn.addEventListener) {
  areaIn.addEventListener('input', function(e) {
    translate(e.target.value);
  });
} else if (areaIn.attachEvent) {
  areaIn.attachEvent('onpropertychange', function(e) {
    translate(e.target.value);
  });
}

translate(areaIn.value);
areaIn.focus();
areaIn.setSelectionRange(areaIn.value.length,areaIn.value.length);
