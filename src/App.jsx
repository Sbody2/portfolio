import { useSelector } from 'react-redux'
import './App.css'
import Background from './components/Background'
import Interface from './components/Interface'
import Sections from './components/Sections'
import PlayIntro from './components/PlayIntro'

function App() {

  const { introStep } = useSelector((s) => s.page)
  return (
    <>
      <Interface />
      {introStep ?
        <PlayIntro />
        :
        <>
          <Background />
          <Sections />
        </>
      }
    </>
  )
}

export default App
