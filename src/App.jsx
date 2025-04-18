import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Interface from './components/Interface'
import Sections from './components/Sections'
import PlayIntro from './components/PlayIntro'

function App() {
  const [introStep, setIntroStep] = useState(3);
  const [audioVol, setAudioVol] = useState();

  return (
    <>
      <Interface navBar={introStep == 0} audioVol={audioVol} />
      {introStep ?
        <PlayIntro state={[introStep, setIntroStep]} />
        :
        <>
          <Background />
          <Sections setAudioVol={setAudioVol} />
        </>
      }
    </>
  )
}

export default App
