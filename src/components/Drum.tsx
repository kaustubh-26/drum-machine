import { useDispatch } from 'react-redux'
import { AudioClip } from '../types'
import './Drum.css'
import { changeDisplay } from '../features/clip/clipSlice'

function Drum({ clip } : { clip: AudioClip}) {

  const dispatch = useDispatch();

  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.key) as HTMLAudioElement).play().catch(console.error);
    dispatch(changeDisplay(clip.description));
  }

  return (
    <button 
      className='drum-pad'
      id={`drum-${clip.key}`}
      onClick={() => playSound(clip)}>
      <audio src={clip.url} id={clip.key} className='clip' />
      {clip.key}
    </button>
  )
}

export default Drum