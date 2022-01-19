var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

let saveHandle

var Textbox = $("#textarea");
var instructions = $("#instructions");

var Content = "";
 
// recognition.continuous = true;
recognition.interimResults = true;
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  Textbox.val(Content);
};

$("#start").on("click", function (e) {
  if ($(this).text() == "Stop Recording") {
    $(this).html("Start Recording");
    $("#instructions").html("");
    recognition.stop();
  } else {
    $(this).html("Stop Recording");
    $("#instructions").html("Voice Recognition is on");
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
  }
});

$("#clear").click(function () {
    Textbox.val("");
    // $("#load").html("Load File")
    Content = ""
    // $("#start").html("Start Recording")
  });
  
  Textbox.on("input", function () {
    Content = $(this).val();
  }); 

