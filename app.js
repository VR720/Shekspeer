var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#outputBox");

function getTranslationUrl(text) {
  return (
    "https://api.funtranslations.com/translate/shakespeare.json" +
    "?text=" +
    text
  );
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server; please try again sometime later");
}

function clickEvent() {
  var inputText = textInput.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEvent);
