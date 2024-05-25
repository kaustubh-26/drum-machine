import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Drum from './components/Drum';
import { RootState } from './app/store';
import { changeDisplay } from './features/clip/clipSlice';
import React from 'react';

function App() {

  const clips = useSelector((state: RootState) => state.clips);
  const displayText = useSelector((state: RootState) => state.display);
  const dispatch = useDispatch();

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = clips.find((clip) => clip.key === e.key.toUpperCase());
    if(clip) {
      (document.getElementById(clip.key) as HTMLAudioElement).play().catch(console.error);
      dispatch(changeDisplay(clip.description));
    }
    else {
      return;
    }
  }

  return (
    <>
      <div id='content-wrapper'>
        <div id="content">
        <div className="row">
          <div id='drum-machine' onKeyDown={playAudio}>
            {
              clips.map((clip) => (
                <Drum clip={clip} key={clip.key}/>
              ))
            }
          </div>
          <div id='display-container'>
            <div id="display">
              {displayText}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
