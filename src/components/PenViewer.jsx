import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setAudioPause } from "../features/pageSlice"

const PenViewer = ({ name, metadata, img }) => {
    const [loaded, setLoaded] = useState(0)
    const ref = useRef()

    const dispatch = useDispatch()

    function clickHandler() {
        setLoaded(2)
        dispatch(setAudioPause({ value: true }))
    }

    function clickHandlerClose() {
        setLoaded(1)
        dispatch(setAudioPause({ value: false }))
    }

    function anmEndHandler(event) {
        if (event.type == "animationend") {
            setLoaded(0)
        }
    }

    const fadeOut = loaded == 1 ? " fadeOut" : ""

    useEffect(() => {
        if (loaded == 2) {
            ref.current.addEventListener("animationend", anmEndHandler, false);
        }
    }, [loaded])

    return (
        <>
            <button className="penViewer" target="_blank" onClick={clickHandler}>
                <img loading="lazy" src={img} />
                <p>{name}</p>
            </button>
            {loaded != 0 &&
                <>
                    <div className={`penViewerBg${fadeOut}`} onClick={clickHandlerClose} />
                    <div className={`penViewerTimer${fadeOut}`} ref={ref} />
                    <div className={`penViewerContainer${fadeOut}`}>
                        <div className="penViewerContent">
                            <iframe style={{ width: "100%", height: "100%", border: "unset" }} title={name} src={`https://codepen.io/s-body/embed/${metadata[0]}?default-tab=result&theme-id=dark`} loading="lazy" allowTransparency={true} allowFullScreen={true}>
                                See the Pen <a href={`https://codepen.io/s-body/pen/${metadata[0]}`}>
                                    {name}</a> by Federico (<a href="https://codepen.io/s-body">@s-body</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </div>
                        <div className="close">
                            <button className="close" onClick={clickHandlerClose}>╳</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default PenViewer