let arrayTranscript = [];
let arrayErrorLogs = [];
document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        var speech;
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;;

        const recognition = new SpeechRecognition();
        // recognition.interimResults = true;
        // recognition.continuous = true;
        recognition.continuous = false;
        recognition.lang = 'hi-In';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        var color = '';
        let myText = document.getElementById('time');
        let textArea = document.getElementById('stttext');
       
        recognition.onresult = function (event) {
            color = event.results[0][0].transcript;
            console.log('Speech text : ', color);
            color = color.includes('plus') ? '+919821960726' : color;
            textArea.placeholder = '';
            textArea.value = color;
            textArea.innerHTML = color;
            textArea.innerText = color;
            if(event.results[0][0].confidence > 0.0) {
                arrayTranscript.push({color : color,conf : event.results[0][0].confidence, success: true});
            } else {
                arrayTranscript.push({color : color,conf : event.results[0][0].confidence, success: false});
            }
            console.log('Confidence: ' + event.results[0][0].confidence);
            // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
        }
        recognition.onspeechend = function (event) {
            recognition.stop();
        }
        recognition.onnomatch = function (event) {
            // document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Sorry!, I didnt recognize your speech.';
        }

        recognition.onerror = function (event) {
            console.log('Error',event);
            arrayErrorLogs.push(event);
            // document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Type or Say something ...';
            recognition.stop();

        }
        recognition.onend = function (event) {
           
            recognition.start();
            // console.log('SpeechRecognition.onend');
        }

        // setTimeout(()=>{
        //     new Audio('./LU.mp3').play();
        // }, 10000);

        // setTimeout(()=>{
        //     new Audio('./FirstU.wav').play();
        // }, 20000);

        // setTimeout(()=>{
        //     new Audio('./FourthU.mp3').play();
        // }, 30000);
        let playFirst = true;
                // repeat with the interval of 2 seconds
        let timerId = setInterval(() =>{
            if(playFirst) {
                new Audio('./FirstU.mp3').play();
            } else {
                new Audio('./Namaskar Sir.mp3').play();
            }
        playFirst = !playFirst;
        // myText.innerText = arrayTranscript[arrayTranscript.length -1];
        // console.log(arrayTranscript[arrayTranscript.length -1], arrayTranscript.length);
        console.log('All Array', arrayTranscript, arrayTranscript.length);
        console.log('Error Array', arrayErrorLogs );
        }, 2500);

        // after 5 seconds stop
        setTimeout(() => { clearInterval(timerId); 
        console.log('Final Array',arrayTranscript);
        console.log('Final Error Array', arrayErrorLogs );
    }, 10800000);
 
    }
});