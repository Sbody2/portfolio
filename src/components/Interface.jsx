import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAudioPause, toggleAudioEnable } from "../features/pageSlice"

const Interface = () => {

    const { introStep, audioMaxVol, audioEnabled, audioPaused } = useSelector((s) => s.page)
    const dispatch = useDispatch()

    const audioRef = useRef()
    const audioVolRef = useRef()

    useEffect(() => {
        if (introStep == 0 && audioRef.current.paused) {
            audioRef.current.play()
        }
    }, [introStep])

    useEffect(() => {
        if (audioVolRef.current) {
            clearInterval(audioVolRef.current)
        }
        if (!audioPaused) {
            if (audioEnabled) {
                audioRef.current.play()
            }
            //dispatch(setAudioPause({ value: false }))
            //console.log("play")
            audioVolRef.current = setInterval(() => {
                if (audioRef.current.volume == audioMaxVol) {
                    clearInterval(audioVolRef.current)
                } else {
                    audioRef.current.volume = Math.min(audioMaxVol, audioRef.current.volume + 0.025)
                }
            }, 50)
        } else {
            audioVolRef.current = setInterval(() => {
                if (audioRef.current.volume == 0) {
                    audioRef.current.pause()
                    //dispatch(setAudioPause({ value: true }))
                    //console.log("pause")
                    clearInterval(audioVolRef.current)
                } else {
                    audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.025)
                }
            }, 50)
        }
    }, [audioPaused])

    function audioToggle() {
        dispatch(toggleAudioEnable())
    }

    useEffect(() => {
        if (audioRef.current.paused && audioEnabled) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [audioEnabled])

    return (
        <>
            {introStep == 0 &&
                <>
                    <div className="fadeIntro" />
                    <nav id="navbar" className="navbar">
                        <a href="#welcome-section">INICIO</a>
                        <a href="#projects">CERTIFICACIONES</a>
                        <a href="#pens">PENS</a>
                        <a href="#modding">MODDING</a>
                        <a href="#contact">CONTACTO</a>
                    </nav>
                    <div className="audio-player">
                        <button onClick={audioToggle}><i className="fa-solid fa-music"></i> Toby Fox - "KEYGEN"</button>
                    </div>
                </>
            }

            <audio id="audio-player" ref={audioRef} loop /*autoPlay={false}*/>
                {/*
                */}
                <source type="audio/ogg" src="https://deltarune.com/assets/audio/keygen_credits.ogg" />
                <source type="audio/mp3" src="https://deltarune.com/assets/audio/keygen_credits.mp3" />
            </audio>

        </>
    )
}
export default Interface