var typing, kudosGiving, narratingExplaining, standUpSpeaking, thinking, mic;
let isShowTyping = true, isShowKudosGiving = true, isShowNarratingExplaining = true, isShowStandUpSpeaking = true, isShowThinking = true, isShowMic = false, isSpeak = false;

document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        var speech;
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;;
    
        const recognition = new SpeechRecognition();
        // recognition.interimResults = true;
        // recognition.continuous = true;
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        // recognition.onspeechstart = (event) => {
        //     console.log('Start Speaking');
        //     recognition.start();
        // }
        mic = document.querySelector('#mic');
        mic.style.display = 'none';
        // mic.classList.add("hide");
        // document.querySelector('#mic').addEventListener('click' ,function () {
                  
        // });
        
        // 1. Speak all new responses.
        setTimeout(() => {
            if(document.getElementsByTagName('body')[0].childNodes){
                // console.log('body 29', document.getElementsByTagName('body')[0].childNodes);
            }
            // let element = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes[document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - 1];
            // //             // element.appendChild(img);
            // element.style.display = 'block';
            // console.log('ELEMENT SHOWN',element);
            // mic.classList.remove("hide");
            
            let initialChildren = 0;
            setTimeout(() => {
                // console.log('Style Add',document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild);
                let rwWidgetContainer = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild;
                // console.log('Widget open close button',document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.lastChild);
                document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.fontWeight = 'bold';
                document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.lastChild.onclick = () => {
                    // console.log('Show  hide mic');
                    if(isShowMic) {
                        // mic.style.display = 'inline-block';
                    } else {
                        // mic.style.display = 'none';
                    }
                    isShowMic = !isShowMic; 
                };
                
                // function process(e) {
                //     var code = (e.keyCode ? e.keyCode : e.which);
                //     if (code == 13) { //Enter keycode
                //         console.log("Sending your Message : " + document.getElementById('txt').value);
                //     }
                // }
                
                // console.log('MIC',mic);
                mic.onclick = ()=> {
                    // console.log('clicked');
                   
                    // console.log('Ready to receive a color command.');
                    // recognition.onspeechend = function () {
                    //     recognition.stop();
                    // }
                    // recognition.onnomatch = function (event) {
                    //     document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.textContent = 'I didnt recognize that color.';
                    // }
                    // if (!isSpeak) {
                    //     console.log('Stop A...', speech);
                    //     speech = false;
                    //     recognition.stop();
                    //     // recognition.addEventListener('start', recognition.end);
                    //     console.log('Stop B...', speech)
                    // }
                    // console.log('Start A...', speech)
                    // speech = true;
                    // // recognition.stop();
                    // recognition.start();
                    // recognition.addEventListener('result', e => {
                    //     const transcript = Array.from(e.results)
                    //         .map(result => result[0])
                    //         .map(result => result.transcript)
                    //         .join('')


                    //     document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.textContent = transcript;
                    //     // document.getElementById("p").innerHTML = transcript;
                    //     console.log(transcript);
                    // });
                    // // recognition.addEventListener('end', recognition.start);
                    // console.log('Start B...', speech);
                    isSpeak = !isSpeak;
                };
                var color = '';
                // console.log('Form ',document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild);
                // console.log('Form Text Area',document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild);
                let textArea = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild;
               
                recognition.onresult = function(event) {
                    // mic.style.display = 'inline-block';
                color = event.results[0][0].transcript;
                // diagnostic.textContent = 'Result received: ' + color + '.';
                // document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = color;
                
                //   bg.style.backgroundColor = color;
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
                // document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.lastChild.click();
                // console.log('at end',color, event, document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild);
                // document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = '';
                // document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.innerHTML = color;
                // let currentText =  color; //textArea.placeholder;
                // textArea.placeholder = '';
                // textArea.value = color;
                // textArea.innerHTML = color;
                // textArea.innerText = color;
                // recognition.start();
                // console.log('At speech end');
                }
                recognition.onnomatch = function(event) {
                    document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Sorry!, I didnt recognize your speech.';
                }

                recognition.onerror = function(event) {
                document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild.placeholder = 'Type or Say something ...';
                recognition.stop();
                
                }
                recognition.onend = function(event) {
                    recognition.start();
                    // console.log('SpeechRecognition.onend');
                  }

                // const words = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.firstChild;
                // words.appendChild(p);
                textArea.onkeydown = function ()
                {
                // console.log("onkeydown", color);
                };
                textArea.onkeypress = function ()
                {
                // console.log("onkeypress", color);
                };
                textArea.onkeyup = function ()
                {
                // console.log("onkeyup", color);
                };

                textArea.onchange = function ()
                {
                // console.log("onchange", color);
                };

                textArea.onload = function ()
                {
                // console.log("onload", color);
                };
                textArea.onloadeddata = function ()
                {
                // console.log("onloadeddata", color);
                };
                textArea.onloadend = function ()
                {
                // console.log("onloadend", color);
                };
                textArea.onlostpointercapture = function ()
                {
                // console.log("onlostpointercapture", color);
                };
                textArea.onmousedown = function ()
                {
                // console.log("onmousedown", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea);
                };
                textArea.onmouseenter = function ()
                {
                // console.log("onmouseenter", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                textArea.onmouseleave = function ()
                {
                // console.log("onmouseleave", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                textArea.onmousemove = function ()
                {
                // console.log("onmousemove", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                textArea.onmouseout = function ()
                {
                // console.log("onmouseout", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                rwWidgetContainer.onmouseover = function ()
                {
                // console.log("onmouseover", color);
                // let currentText =  color; //textArea.placeholder;
                // textArea.placeholder = '';
                // textArea.value = color;
                // textArea.innerHTML = color;
                // textArea.innerText = color;
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                textArea.onmouseup = function ()
                {
                // console.log("onmouseup", color);
                // console.log('Placeholder', textArea.placeholder, ' Text Content', textArea.textContent, ' Inner HTML', textArea.innerHTML, ' innerText', textArea.innerText, ' Node Value', textArea.nodeValue, ' Value', textArea.value);
                };
                textArea.onpointerenter = function ()
                {
                // console.log("onpointerenter", color);
                };
                // console.log('Form Submit',document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.lastChild.lastChild);

                let length = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes.length;
                console.log(document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes);
                if(document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes) {
                   
                    // let textAreaNew = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[2].lastChild.childNodes[1];
                    console.log('Text Area New',textArea);
                    textArea.style.height = '18px';
                    textArea.style.left = '28px';
                    textArea.style.position = 'absolute';

                    let sender = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[2];
                    let img = document.createElement('img');
                    img.src = './assets/icon.png';
                    img.style.borderRadius = '50%';
                    img.style.width = '35px';
                    img.style.position = 'absolute';
                    img.style.left = '0px';
                    console.log('SENDER',sender);
                    sender.appendChild(img);
                    setInterval(function () {
                    
                        let diff = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - length;
                        let element = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes[document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - 1];
                        let TEXT = element.textContent;
                        let index = document.getElementsByTagName('body')[0].childNodes[13].lastChild.lastChild.firstChild.childNodes[1].childNodes.length - 1;
                        
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

function speakOptionsWithSlowRateAndPause(utterance, Options, voice) {

    // utterThis = new SpeechSynthesisUtterance(secondText);

    // utterThis.rate = 0.7;
    // console.log('Speak Options',utterance,'Options',Options)
    let synth = window.speechSynthesis;
    // synth.pause();
    for (let option of Options) {
        let utterance = new SpeechSynthesisUtterance(option);
        // utterance.rate = 0.7;
        utterance.voice = voice;
        setTimeout((

        ) => {
            // oneGIFShowOtherHide(false, false, false, );

            synth.speak(utterance);
            // synth.speak(utterance2);
            // synth.resume()
        }, 3000);
    }
   
    return utterance;
}

let globalIndexes = [];
let doctors = ["Dr Aman Kumar", "Dr Anand Misra", "Dr Arshad Akeel", "Dr Arup Sahu", "Dr Frank Detterbeck", "Dr Jennifer Possick", "Dr Mark David Siegel", "Dr Jonathan Puchalski"];
function speakCurrentResponse(Text, index, element) {

    // element.style.display = 'none';
    // console.log(globalIndexes, globalIndexes.includes(index));
    // console.log('VOICES',speechSynthesis.getVoices());
    let VOICE = speechSynthesis.getVoices() ? speechSynthesis.getVoices()[4] : null;
    // console.log('VOICE', VOICE);
    let TEXT = Text.replaceAll('/', ''); 
    TEXT = TEXT.length < 22 ? '' : TEXT;
    TEXT = TEXT.replaceAll('Dr', ' Doctor '); 
    if (!globalIndexes.includes(index) && VOICE && TEXT.length > 24) {
        // TEXT = Text.replaceAll('/', '');
        console.log(TEXT, `'`, TEXT.length, 'index', index, 'Typing', TEXT.startsWith(`Ok, trying to book your preferred slot`), 'Explaining', TEXT.startsWith(`Thanks for providing the feedbaek`), 'Celebrating', TEXT.endsWith('All the best.'));

        if (TEXT.startsWith(`Ok, trying to book your preferred slot`)) {
            // 1. Typing Activity.
            console.log('Typing Activity', TEXT.endsWith('All the best.'));
            // narratingExplaining.style.display = 'none';
            // standUpSpeaking.style.display = 'none';
            // thinking.style.display = 'none';
            // typing.style.display = 'inline-block'; 
            if (TEXT.endsWith('All the best.')) {
                // console.log('All the Best exist');
                let firstText = TEXT.substring(0, TEXT.indexOf('...'));
                let secondText = TEXT.substring(TEXT.indexOf('...') + 3);
                oneGIFShowOtherHide(false, false, true, false, false);
                let utterThis = speakContent(firstText);
                // let utterThis = new SpeechSynthesisUtterance(firstText);
                // utterThis.voice = VOICE ? VOICE : null; // speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
                // VOICE ?  window.speechSynthesis.speak(utterThis) : null;
                utterThis.onend = function (event) {
                    // console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none'; 
                        oneGIFShowOtherHide(false, false, false, false, true);
                    }, 0);
                }
                // oneGIFShowOtherHide(false, false, false, false, true);
                secondText = secondText.replaceAll('.', ',  '); 
                // setTimeout (()=>{},1000);
                utterThis = new SpeechSynthesisUtterance(secondText);
                utterThis.voice = VOICE ? VOICE : null; // speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
                VOICE ? window.speechSynthesis.speak(utterThis) : null;
                element.style.display = 'block';
                utterThis.onend = function (event) {
                    // console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none'; 
                        oneGIFShowOtherHide(true, false, false, false, false);
                    }, 0);
                }
            } else {
                TEXT = TEXT.substring(0, 136);
                oneGIFShowOtherHide(false, false, true, false, false);
                let utterThis = new SpeechSynthesisUtterance(TEXT);
                utterThis.voice = VOICE ? VOICE : null; //speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
                VOICE ? window.speechSynthesis.speak(utterThis) : null;
                element.style.display = 'block';
                utterThis.onend = function (event) {
                    // console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none'; 
                        oneGIFShowOtherHide(true, false, false, false, false);
                    }, 0);
                }
            }
        }
        else if (TEXT.startsWith('Thanks for providing') || TEXT.startsWith(`That's Great,`)) {
            // 2. Explaining Activity.
            console.log('Explaining Activity');
            // narratingExplaining.style.display ='inline-block';
            // standUpSpeaking.style.display = 'none';
            // thinking.style.display = 'none';
            // typing.style.display = 'none'; 
            if (TEXT.startsWith(`That's Great,`)) {
                TEXT = TEXT.substring(0, TEXT.indexOf('?'));
            }
            TEXT = TEXT.replaceAll('.', ',  ');
            oneGIFShowOtherHide(false, true, false, false, false);
            let utterThis = new SpeechSynthesisUtterance(TEXT);
            utterThis.voice = VOICE ? VOICE : null; // speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
            VOICE ? window.speechSynthesis.speak(utterThis) : null;
            element.style.display = 'block';
            // element.style.display = 'inline-block';
            utterThis.onend = function (event) {
                // console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
                setTimeout(() => {
                    // narratingExplaining.style.display = 'none';
                    // standUpSpeaking.style.display = 'none';
                    // thinking.style.display = 'inline-block';
                    // typing.style.display = 'none'; 
                    oneGIFShowOtherHide(true, false, false, false, false);
                }, 0);
            }
        }
        // else if (TEXT.startsWith('What are you looking for?') || TEXT.startsWith(`Understood`) || TEXT.startsWith(`Would you take a moment to rate me?`)) {
        //     // 3. Added pause or slow rate at options.
        //     let firstText = '', secondText = '';
        //     if (TEXT.startsWith('What are you looking for?')) {
        //         firstText = TEXT.substring(0, 25);
        //         secondText = TEXT.substring(25);
        //     }

        //     if (TEXT.startsWith(`Understood`)) {
        //         firstText = TEXT.substring(0, 35);
        //         secondText = TEXT.substring(35);
        //     }

        //     if (TEXT.startsWith(`Would you take a moment to rate me?`)) {
        //         firstText = TEXT.substring(0, 35);
        //         secondText = TEXT.substring(35);
        //     }
            
        //     oneGIFShowOtherHide(false, false, false, true, false);
        //     let utterThis = new SpeechSynthesisUtterance(firstText); 
        //     utterThis.voice = VOICE;
        //     window.speechSynthesis.speak(utterThis);
        //     // utterThis.voice = VOICE ? VOICE : null; // speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
        //     // VOICE ? window.speechSynthesis.speak(utterThis) : null;

        //     // console.log('Speak and show');
        //     // utterThis.onboundary = function (event) {
        //     //     console.log('On boundry first text', event);
        //     //     // element.style.display = 'none';
        //     // }
        //     // utterThis.onerror = function (event) {
        //     //     console.log('On error first text', event);
        //     // }
        //     // utterThis.onmark = function (event) {
        //     //     console.log('On mark first text', event);
        //     // }
        //     // utterThis.onpause = function (event) {
        //     //     console.log('On pause first text', event);
        //     // }
        //     // utterThis.onresume = function (event) {
        //     //     console.log('On resume first text', event);
        //     // }
        //     // utterThis.onstart = function (event) {
        //     //     console.log('On start first text', event);
        //     //     // element.style.display = 'inline-block';
        //     // }


        //     utterThis.onend = function (event) {
        //         console.log('Options line end' + event.elapsedTime + ' seconds.');
        //         setTimeout(() => {
        //             oneGIFShowOtherHide(false, false, false, true, false);
        //         }, 0);
        //     }
        //     utterThis = speakOptionsWithSlowRateAndPause(utterThis, secondText.split(/(?=[A-Z])/), VOICE);
        //     console.log('Text come here');
        //     oneGIFShowOtherHide(true, false, false, false, false);
        //     utterThis.onend = function (event) {
        //         console.log('Options end ' + event.elapsedTime + ' seconds.');
        //         setTimeout(() => {
        //             oneGIFShowOtherHide(true, false, false, false, false);
        //         }, 0);
        //     }
        // }
        else {
            //  By default stand up speaking activity.
            // narratingExplaining.style.display = 'none';
            // standUpSpeaking.style.display = 'inline-block';
            // thinking.style.display = 'none';
            // typing.style.display = 'none';
            if (TEXT.startsWith('Here is the list of')) {
                // if(TEXT.length === 19 || TEXT.length === 13){
                //     TEXT = '';
                // } else {
                //     TEXT = 'Here is the list of doctors, please select whom do you want to see';
                // }
                TEXT = TEXT.substring(0, TEXT.indexOf('.'));
            }

            if (TEXT.startsWith('Sorry,')) {
                TEXT = TEXT.substring(0, TEXT.indexOf('?'));
            }

            let firstText = '', secondText = '';
            if (TEXT.startsWith('Hello, What are you looking for?')) {
                firstText = TEXT.substring(0, 32);
                secondText = TEXT.substring(32);
            }

            if (TEXT.startsWith(`Understood`)) {
                firstText = TEXT.substring(0, 35);
                secondText = TEXT.substring(35);
            }

            if (TEXT.startsWith(`Thanks`) && TEXT.includes(`Would you take a moment to rate me?`)) {
                firstText = TEXT.substring(0, TEXT.indexOf('?'));
                secondText = TEXT.substring(TEXT.indexOf('?'));
            }

            TEXT = TEXT.replaceAll('.', ',  ');
            oneGIFShowOtherHide(false, false, false, true, false);
            firstText = firstText.replaceAll('.', ',  ');
            let utterThis = firstText ?  new SpeechSynthesisUtterance(firstText) : new SpeechSynthesisUtterance(TEXT);
            
            utterThis.voice = VOICE ? VOICE : null; //speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google UK English Female'; })[0];
            // {
            //             default: false,
            //             localService: true,            ​
            //             name: "Google UK English Female",
            //             voiceURI: "Google UK English Female",
            //             ​lang: 'en-US'
            // }
            VOICE ? window.speechSynthesis.speak(utterThis) : null;
            element.style.display = 'block';
            // speakOptionsWithSlowRateAndPause(utterThis, secondText.split(/(?=[A-Z])/), VOICE);
            for (let option of secondText.split(/(?=[A-Z])/)) {
              
                setTimeout((
        
                ) => {
                    console.log('OPTION : ',option);
                    utterThis = new SpeechSynthesisUtterance(option);
                    // utterance.rate = 0.7;
                    utterThis.voice = VOICE;
                    // oneGIFShowOtherHide(false, false, false, );
                    console.log('Option : ',utterThis);
                    window.speechSynthesis.speak(utterThis);
                    // synth.speak(utterance2);
                    // synth.resume()
                }, 3000);
            } 
            if (TEXT.startsWith('Hello, What are you looking for?')) {
                utterThis.onend = function (event) {
                    console.log('Utterance has finished being spoken after : FIRST ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none';
                        oneGIFShowOtherHide(true, false, false, false, false);
                    }, 6000);
                }  
            }else if (TEXT.startsWith(`Understood`)) {
                utterThis.onend = function (event) {
                    console.log('Utterance has finished being spoken after : SECOND ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none';
                        oneGIFShowOtherHide(true, false, false, false, false);
                    }, 6000);
                }
            }else if(TEXT.startsWith(`Thanks`) && TEXT.includes(`Would you take a moment to rate me?`)) {
                utterThis.onend = function (event) {
                    console.log('Utterance has finished being spoken after : THIRD ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none';
                        oneGIFShowOtherHide(true, false, false, false, false);
                    }, 4000);
                }    
            } else {
                utterThis.onend = function (event) {
                    console.log('Utterance has finished being spoken after : ALL ' + event.elapsedTime + ' seconds.');
                    setTimeout(() => {
                        // narratingExplaining.style.display = 'none';
                        // standUpSpeaking.style.display = 'none';
                        // thinking.style.display = 'inline-block';
                        // typing.style.display = 'none';
                        oneGIFShowOtherHide(true, false, false, false, false);
                    },0);
                }
            }
             
            
        }


        //   window.speechSynthesis.paused
        globalIndexes.push(index);
        // console.log(globaślIndexes);
    }
}
