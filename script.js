
const resultElement = document.getElementByID("result")
let recognition;


function startConverting(){
if('webkitSpeechRecoginition'in window){
    recognition = new webkitSpeechRecoginition();
    setupRecoginition()
    recognition.start()
}
}


function setupRecoginition(recognition){
    recognition.continous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onresult = function(event){
        //processResult()
        const {finalTranscript , interTranscript} +
        processResult(event.results);
        resultElement.innerHTML = finalTranscript + interTranscript;
    }
}

function processResult(result){
    let finalTranscript = '';
    let interTranscript = '';

    for(let i = 0; i <results.length; i++){
        let transcript = results[i][0].transcript;
        transcript.replace("\n","<br>")
        if(tesult[i].isFinal){
            finalTranscript += transcript;
        }else{
            interTranscript += transcript;
        }
    }
return{ finalTranscript, interTranscript}

}


function stopConverting(){
if (recognition){
    recognition.stop();
}
}