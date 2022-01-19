var typing, kudosGiving, narratingExplaining, standUpSpeaking, thinking;
let isShowTyping = true, isShowKudosGiving = true, isShowNarratingExplaining = true, isShowStandUpSpeaking = true, isShowThinking = true, isShowMic = false, isSpeak = false;

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
 
        // 1. Speak all new responses.
        setTimeout(() => {
            if(document.getElementsByTagName('body')[0].childNodes){ 
                console.log('ALL ELEMENTS ', document.getElementsByTagName('body')[0].childNodes);
            } 
            let initialChildren = 0;
            setTimeout(() => { 
                let rwWidgetContainer = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild; 
                document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild.fontWeight = 'bold';
                document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.lastChild.onclick = () => {
                    isShowMic = !isShowMic; 
                }; 
                var color = '';
                // console.log('Form ',document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild);
                // console.log('Form Text Area',document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild);
                let textArea = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild;
               
                recognition.onresult = function(event) { 
                color = event.results[0][0].transcript; 
                console.log('Speech text : ',color);
                color = color.includes('plus') ? '+919821960726' : color;
                textArea.placeholder = '';
                textArea.value = color;
                textArea.innerHTML = color;
                textArea.innerText = color;
                console.log('Confidence: ' + event.results[0][0].confidence);
                console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                }
                recognition.onspeechend = function(event) {
                recognition.stop();
                }
                recognition.onnomatch = function(event) {
                    document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Sorry!, I didnt recognize your speech.';
                }

                recognition.onerror = function(event) {
                document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Type or Say something ...';
                recognition.stop();
                
                }
                recognition.onend = function(event) {
                    recognition.start();
                    // console.log('SpeechRecognition.onend');
                  }

                let length = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes.length;
                console.log(document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes);
                if(document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes) {
                   
                    // let textAreaNew = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[2].lastChild.childNodes[1];
                    console.log('Text Area New',textArea);
                    textArea.style.height = '22px';
                    textArea.style.left = '28px';
                    textArea.style.position = 'absolute';

                    let sender = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[2];
                    let img = document.createElement('img');
                    img.src = './assets/icon.png';
                    img.style.borderRadius = '50%';
                    img.style.width = '35px';
                    img.style.position = 'absolute';
                    img.style.left = '0px';
                    console.log('SENDER',sender);
                    sender.appendChild(img);
                    setInterval(function () {
                    
                        let diff = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - length;
                        let element = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes[document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - 1];
                        let TEXT = element.textContent;
                        let index = document.getElementsByTagName('body')[0].childNodes[15].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - 1;
                        
                        // //             // element.appendChild(img);
                        // element.style.display = 'block';
                       
                        if (TEXT && TEXT.length) {
                            speakCurrentResponse(TEXT, index,element);
                        }
    
                        initialChildren = diff - initialChildren;
                    }, 1000);
                }
            }, 500)
        }, 10);
        // 2. Change GIFs activity via responses. 
        // 2.1. Accessed all GIFs.
        narratingExplaining = document.querySelector('#narratingOrExplaining');
        standUpSpeaking = document.querySelector('#standUpSpeaking');
        thinking = document.querySelector('#thinking');
        typing = document.querySelector('#typing');
        kudosGiving = document.querySelector('#kudosGiving');
        // 2.2. Hide all GIFs except standing with silient.
        // narratingExplaining.style.display = 'none';
        // standUpSpeaking.style.display = 'none';
        // thinking.style.display = 'inline-block';
        // typing.style.display = 'none';
        oneGIFShowOtherHide(true, false, false, false, false); 
    }
});

function oneGIFShowOtherHide(think, explain, type, speak, celebrate) {
    if (think) {
        thinking.style.display = 'inline-block';
        narratingExplaining.style.display = 'none';
        standUpSpeaking.style.display = 'none';
        typing.style.display = 'none';
        kudosGiving.style.display = 'none';
        console.log('Thinking', think, explain, type, speak, celebrate);
    }
    if (explain) {
        narratingExplaining.style.display = 'inline-block';
        standUpSpeaking.style.display = 'none';
        thinking.style.display = 'none';
        typing.style.display = 'none';
        kudosGiving.style.display = 'none';
        console.log('Explaining', think, explain, type, speak, celebrate);
    }
    if (type) {
        narratingExplaining.style.display = 'none';
        standUpSpeaking.style.display = 'none';
        thinking.style.display = 'none';
        typing.style.display = 'inline-block';
        kudosGiving.style.display = 'none';
        console.log('Typing', think, explain, type, speak, celebrate);
    }
    if (speak) {
        narratingExplaining.style.display = 'none';
        standUpSpeaking.style.display = 'inline-block';
        thinking.style.display = 'none';
        typing.style.display = 'none';
        kudosGiving.style.display = 'none';
        console.log('stanupSpkeaing', think, explain, type, speak, celebrate);
    }
    if (celebrate) {
        narratingExplaining.style.display = 'none';
        standUpSpeaking.style.display = 'none';
        thinking.style.display = 'none';
        typing.style.display = 'none';
        kudosGiving.style.display = 'inline-block';
        console.log('Kudos', think, explain, type, speak, celebrate);
    }
    console.log('Plan', think, explain, type, speak, celebrate);
}

function speakContent(text) {
    let VOICE = speechSynthesis.getVoices() ? speechSynthesis.getVoices()[4] : null;
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = VOICE ? VOICE : null;
    if (VOICE) {
        speechSynthesis.speak(utterThis)
    }
    // VOICE ?  window.speechSynthesis.speak(utterThis) : null;
    return utterThis ? utterThis : null;
}
 
let globalIndexes = [];
let doctors = ["Dr Aman Kumar", "Dr Anand Misra", "Dr Arshad Akeel", "Dr Arup Sahu", "Dr Frank Detterbeck", "Dr Jennifer Possick", "Dr Mark David Siegel", "Dr Jonathan Puchalski"];
var myTimeout;
function myTimer() {
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
    myTimeout = setTimeout(myTimer, 500);
}

function speakCurrentResponse(TEXT, index, element) {
    // console.log(globalIndexes, globalIndexes.includes(index));
    let VOICE;
    if (speechSynthesis.getVoices()) {
        // console.log(speechSynthesis.getVoices());
        VOICE = speechSynthesis.getVoices()[12];
    }
    if(TEXT == `नमस्कार सर, मैं UTL` || TEXT == `Thanks सर, आपने बैटरी बैकअप के` || TEXT == `ठीक है सर` || TEXT == `जी सर, और कुछ पूछना`) {
        TEXT = '';
        console.log('My Voice text');
    }
    console.log('TEXT', TEXT, 'LENGTH',!TEXT.length);

    if (!globalIndexes.includes(index) && VOICE && TEXT.length) {
        console.log(index, 'uttarence text',TEXT);
  

        // utterThis.onend =  function() { 
        //     clearTimeout(myTimeout); 
        //     oneGIFShowOtherHide(true, false, false, false, false);
        // }
        
        // <audio src="./assets/Custom Indian Human Audios/FirstU.mp3"></audio>
        // <audio src="./assets/Custom Indian Human Audios/SecondU.mp3"></audio>
        // <audio src="./assets/Custom Indian Human Audios/ThirdU.mp3"></audio>
        // <audio src="./assets/Custom Indian Human Audios/FourthU.mp3"></audio>
        let audio;
        if(TEXT.startsWith(`नमस्कार सर, मैं UTL`) && TEXT.length > 20) {
            audio = new Audio('./assets/Custom Indian Human Audios/FU.mp3');
        }
        if (TEXT.startsWith(`Thanks सर, आपने बैटरी बैकअप के`)) {
            audio = new Audio('./assets/Custom Indian Human Audios/SU.mp3');
        }
        if (TEXT.startsWith(`जी सर, और कुछ पूछना`)) {
            audio = new Audio('./assets/Custom Indian Human Audios/FourthU.mp3');
        }
        if (TEXT.startsWith(`ठीक है सर`)) {
            audio = new Audio('./assets/Custom Indian Human Audios/LU.mp3');
        }
        
        audio.play();
        oneGIFShowOtherHide(false, false, false, true, false);
        element.style.display = 'block';  

        console.log(audio.ended,'Ended', audio.currentTime);
        audio.autoplay = true;
        audio.onended = function(){
          audio.remove() //Remove when played.
          oneGIFShowOtherHide(true, false, false, false, false);
        };
        // setTimeout(()=>{
                         
        // },500); 
        globalIndexes.push(index);
    }
}
