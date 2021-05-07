var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputField = document.querySelector("#translate-output");

//function to construct a GET request
function urlConstructor(text) {
    return "https://api.funtranslations.com/translate/yoda.json?text=" + text;
}

//function which performs fetch call
function clickHandler(text) {

    fetch(urlConstructor(text))
    .then(function responseHandler(response) {return response.json()})
    .then (function sendJSON(json){outputField.innerText =  json.contents.translated})
    .catch((error) => {
        console.log(error);
    });
}

btnTranslate.addEventListener("click", function clickHandler(){(
    
    clickHandler(txtInput.value)
});