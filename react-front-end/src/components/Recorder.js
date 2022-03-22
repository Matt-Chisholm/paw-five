import React, { useState, useEffect } from 'react';
import './Recorder.scss';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import axios from 'axios';
import Session from "./Session";
import Tutorial from './Tutorial';
import playbtn from './images/play.png';
import pause from './images/pause.png';


export default function Recorder(props) {
  const [recordState, setRecordState] = useState(null)
  const [ audioData, setAudioData ] = useState(null)
  const [ witData, setWitData ] = useState("nothing");
  const [ viewTut, setViewTut] = useState(false);
  const [ play, setPlay ] = useState(false);
  
  

   const start = () => {
    setRecordState(RecordState.START);
    setPlay(true);
  };
 
  const stop = () => {
    setRecordState(RecordState.STOP)
    setPlay(false);
  };
 
  //audioData contains blob and blobUrl
  const onStop = (data) => {
    setAudioData(data);
    console.log('Data onStop', data);
    send(data.blob)
  };

let dog = '';
let skill = '';
const dogFinder = (witString) => {
  if (witString.includes("Birdie" || "birdie")) {
    console.log("dog set to birdie");
    dog = 'Birdie';
    return dog;
  }
  if (witString.includes("Bailee" || "bailey" || "Bailey")) {
    console.log("dog set to bailey");
    dog = 'Bailey';
    return dog;
  }
  if (witString.includes("Bolt" || "bolt" || "belt")) {
    console.log("dog set to bolt");
    dog = 'Bolt';
    return dog;
  }
}

const skillFinder = (witString) => {
  if (witString.includes("set" || "Sit" || "sit" || "Set")) {
    console.log("skill set to sit");
    skill = 'Sit';
    return skill;
  }
  if (witString.includes("Speak" || "speak")) {
    console.log("skill set to speak");
    skill = 'Speak';
    return skill;
  }
}


const send = (dataBlob) => {
  console.log("sendRequestToGlitch with data:");
  console.log("sending dataBlob",dataBlob);
  var buffer = dataBlob;

  const url = "https://api.wit.ai/speech";
  const witToken = process.env.REACT_APP_WIT_serverAccessToken; //don't put your token inline

  axios
    .post(url, buffer, {
      headers: {
        Authorization: "Bearer " + witToken,
        "Content-Type": "audio/wav"
      }
    })
    .then(witResponse => {
      console.log(witResponse.data, typeof witResponse.data);
      if (typeof witResponse.data === 'string') {
        setWitData(witResponse.data);
      }
    })
    .catch(error => {
      if (error.response){
        console.log(error.response)
        //do something

        }else if(error.request){
        console.log(error.request)
        //do something else

        }else if(error.message){
        console.log(error.message)
        //do something other than the other two
        }
    })
  }

  const recording = audioData;
 
    return (
      <div>
      <div className="recorder">
        <div className='overlay'>
        <AudioReactRecorder className="recording-view" state={recordState} onStop={onStop} backgroundColor={'rgb(255, 255, 255)'} />
        <audio
        className="audiobar"
        controls
          src={recording ? recording.url : null}
        ></audio>
        <div>
          {play === false && 
          <img src={playbtn} onClick={()=>start()} />
          }
          {play === true && 
          <img src={pause} onClick={()=>stop()} />
          }
        </div>
        </div>
      </div>
      <div className='training-details'>
      <h2 className='detail-title'>Current session details:</h2>
      <h3 className='details'>Dog you are training: {dogFinder(witData)}</h3>
      <h3 className='details'>Skill you are training: {skillFinder(witData)}</h3>
      </div>

      {dog.length > 2 && <Session name={dogFinder(witData)} /> }
      <button className='tut-button' onClick={()=>{setViewTut(!viewTut)}}>Tutorials</button>
      {viewTut === true && <Tutorial />}
      </div>
    )
};