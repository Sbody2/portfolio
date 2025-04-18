import { useEffect, useRef } from "react"

const Interface = ({ navBar, audioVol }) => {

    const audioRef = useRef()
    const audioVolRef = useRef()

    useEffect(() => {
        if (navBar && audioRef.current.paused) {
            audioRef.current.play()
        }
    }, [navBar])

    useEffect(() => {
        if (audioVolRef.current) {
            clearInterval(audioVolRef.current)
        }
        if (audioVol == 1) {
            audioRef.current.play()
            console.log("play")
            audioVolRef.current = setInterval(() => {
                if (audioRef.current.volume == 1) {
                    clearInterval(audioVolRef.current)
                } else {
                    audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.05)
                }
            }, 50)
        } else if (audioVol == -1) {
            audioVolRef.current = setInterval(() => {
                if (audioRef.current.volume == 0) {
                    audioRef.current.pause()
                    console.log("pause")
                    clearInterval(audioVolRef.current)
                } else {
                    audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.05)
                }
            }, 50)
        }
    }, [audioVol])

    function audioToggle() {
        //audioRef.current.play()
        //audioRef.current.muted = !audioRef.current.muted    
        if (audioRef.current.paused) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }

    return (
        <>
            {navBar &&
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