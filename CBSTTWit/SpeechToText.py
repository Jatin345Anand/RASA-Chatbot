import requests
import json
from Recorder import record_audio, read_audio

# Wit speech API endpoint
API_ENDPOINT = 'https://api.wit.ai/speech?v=20200513'
# https://api.wit.ai/speech?v=20170307
# https://api.wit.ai/speech?v=20210916


# Wit.ai api access token
wit_access_token = 'MCYVBGGMID7OZL5PGSDZA6ERUHY7VZ2S'
# SCPKZAL4QVTQOYINL3HAVGUOCB46OS6L
# 54DAG73REI3UZSGIAN2OXNHKAJUWI36N
def RecognizeSpeech(AUDIO_FILENAME, num_seconds = 5):
    
    # record audio of specified length in specified audio file
    record_audio(num_seconds, AUDIO_FILENAME)
    
    # reading audio
    audio = read_audio(AUDIO_FILENAME)
    
    # defining headers for HTTP request
    headers = {'authorization': 'Bearer ' + wit_access_token,
               'Content-Type': 'audio/wav'}

    # making an HTTP post request
    resp = requests.post(API_ENDPOINT, headers = headers,
                         data = audio)
    
    # converting response content to JSON format
    data = json.loads(resp.content)
    print('data',data)
    # get text from data
    text = data['text']
    
    # return the text
    return text


if __name__ == "__main__":
    text =  RecognizeSpeech('myspeech.wav', 4)
    print("\nYou said: {}".format(text))