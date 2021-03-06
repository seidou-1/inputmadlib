//Madlib

var nounInput = document.querySelector ('#noun');
var adjectiveInput = document.querySelector('#adjective');
var verbInput = document.querySelector('#verb');
var submitButton = document.querySelector('#submit-mad-lib');
var outputContainer = document.querySelector('#mad-lib-output');

if (nounInput && adjectiveInput && verbInput && submitButton && outputContainer) {
  console.log('foo');

  submitButton.addEventListener('click', function(asap){

    asap.preventDefault(); //This forces the browser to forego the default behavior after a button is clicked and instead replace it with my code below.

    var noun = nounInput.value;
    var adjective = adjectiveInput.value;
    var verb = verbInput.value;

    var outputMadlib = "Once upon a time there was a ";
    outputMadlib += noun;
    outputMadlib += " that was so ";
    outputMadlib += adjective;
    outputMadlib += " it looked like a marshmellow"
    outputMadlib += " that loved to ";
    outputMadlib += verb;
    outputMadlib += " everywhere. ";
    outputMadlib += " This madlib made no sense but the end.";

    outputContainer.textContent = outputMadlib;

    nounInput.value = "";
    adjectiveInput.value ="";
    verbInput.value = "";
    
  });
}
