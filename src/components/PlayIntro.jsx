import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setintroStep } from "../features/pageSlice";

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const HexagonTransition = ({ extraClass, clickFunction, ref, setHoverClass }) => {
    return (
        <svg ref={ref} className={`hexagonSvg${extraClass}`} viewBox="0 0 256 256" >
            {
                clickFunction ?
                    <path className="pathArea" onClick={clickFunction} vectorEffect="non-scaling-stroke"
                        onMouseEnter={() => setHoverClass(" hover")}
                        onMouseLeave={() => setHoverClass("")}
                        d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
                    :
                    <path vectorEffect="non-scaling-stroke"
                        d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
            }
        </svg>
    )
}

/*
const Hexagon = ({ extraClass = "", clickFunction, ref, timeOffset, anmA, setAnmA }) => {
    const [anmW, setAnmW] = useState(0)
    const [anmActive, setAnmActive] = useState(false)
    const [delay, setDelay] = useState(null)

    useInterval(() => {
        //console.log(anmW)
        //console.log(Math.cos(Math.PI/60 * (anmW + timeOffset)))
        setAnmW(w => (w + 1)%60)
        if (anmActive) {
            setAnmA(a => Math.min(a + 1, 20))
        } else {
            if (anmA == 0) {
                setDelay(null)
            } else {
                setAnmA(a => a - 1)
            }
        }
    }, delay)

    return (
        <>
            <svg ref={ref} className={`hexagonSvg${extraClass}`} viewBox="0 0 256 256" >
                {
                    clickFunction ?
                        <path className="pathArea" onClick={clickFunction} vectorEffect="non-scaling-stroke"
                            onMouseEnter={() => {
                                setAnmActive(true)
                                setDelay(50)
                            }}
                            onMouseLeave={() => {
                                setAnmActive(false)
                            }}
                            d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
                        :
                        <path vectorEffect="non-scaling-stroke"
                            d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
                }
            </svg>
            <h1 style={{ color: "white" }}>{Math.cos(Math.PI/60 * (anmW + timeOffset))}</h1>
        </>
    )
}
*/

const Hexagon = ({ extraClass = "", ref, timeOffset, anm: [anmA, anmT] }) => {
    return (
        <svg ref={ref} className={`hexagonSvg${extraClass}`} viewBox="0 0 256 256"
            style={{ transform: `rotate(${3.5 * (anmA / 20) * Math.cos(Math.PI / 25 * (anmT + timeOffset))}deg)` }}>
            <path vectorEffect="non-scaling-stroke"
                d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
        </svg>
    )
}

const HexagonButton = ({ extraClass = "", clickFunction, ref, timeOffset, anm: [anmA, setAnmA, anmT, setAnmT] }) => {
    const [anmActive, setAnmActive] = useState(false)
    const [delay, setDelay] = useState(null)

    useInterval(() => {
        setAnmT(t => (t + 1) % 50)
        if (anmActive) {
            setAnmA(a => Math.min(a + 1, 20))
        } else {
            if (anmA == 0) {
                setAnmT(25)
                setDelay(null)
            } else {
                setAnmA(a => a - 1)
            }
        }
    }, delay)

    return (
        <svg ref={ref} className={`hexagonSvg${extraClass}`} viewBox="0 0 256 256"
            style={{ transform: `rotate(${3.5 * (anmA / 20) * Math.cos(Math.PI / 25 * (anmT + timeOffset))}deg)` }}>
            <path className="pathArea" onClick={clickFunction} vectorEffect="non-scaling-stroke"
                onMouseEnter={() => {
                    /*
                    setAnmActive(true)
                    setIntervalID(setInterval(() => {
                        console.log(refA.current[0])
                        if (refActive.current[0]) {
                            refA.current[1](a => Math.min(a + 1, 20))
                        } else {
                            if (refA.current[0] == 0) {
                                console.log("CHE")
                                clearInterval(intervalID)
                            }
                            refA.current[1](a => a - 1)
                        }
                    }, 20))
                    */
                    setAnmActive(true)
                    setDelay(50)
                }}
                onMouseLeave={() => {
                    setAnmActive(false)
                }}
                d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Z" />
        </svg>
    )
}

const Triangle = () => {
    return (
        <svg className={`triangleSvg`} viewBox="-1.95 -1.95 18.90 18.90" transform="rotate(90)">
            <path vectorEffect="non-scaling-stroke" paintOrder="stroke"
                d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" />
        </svg>
    )
}

const PlayIntro = () => {

    const [anmA, setAnmA] = useState(0)
    const [anmT, setAnmT] = useState(0)

    const dispatch = useDispatch()
    const { introStep } = useSelector((s) => s.page)

    function playHandler() {
        dispatch(setintroStep({ value: 2 }))
    }

    function anmEndHandler(event) {
        if (event.type == "animationend") {
            dispatch(setintroStep({ value: 1 }))
            setTimeout(() => {
                dispatch(setintroStep({ value: 0 }))
            }, 200)
        }
    }

    const spyralAnm = introStep == 2 ? " spyral" : ""

    //const [hoverClass, setHoverClass] = useState("")

    const ref = useRef()

    useEffect(() => {
        //ref.current.addEventListener("animationstart", streakListener, false);
        ref.current.addEventListener("animationend", anmEndHandler, false);
    }, [])

    return (
        <div className="WH100 flexV alignC">
            {introStep > 1 &&
                <div className="hexContainer flexV alignC">
                    <HexagonButton timeOffset={6} anm={[anmA, setAnmA, anmT, setAnmT]} clickFunction={playHandler} extraClass={`${spyralAnm}`} />
                    <Hexagon       timeOffset={3} anm={[anmA, anmT]} extraClass={`${spyralAnm} hex2 noPointer`} />
                    <Triangle />
                    <Hexagon       timeOffset={0} anm={[anmA, anmT]} extraClass={`${spyralAnm} hex4 noPointer`} />
                    <Hexagon       timeOffset={0} anm={[anmA, anmT]} extraClass={`${spyralAnm} hex3 noPointer`} ref={ref} />
                    {/*
                    <HexagonTransition ref={ref1} extraClass={` hex3${hoverClass}`} />
                    <HexagonTransition ref={ref2} extraClass={` hex2${hoverClass}`} />
                    <HexagonTransition ref={ref3} extraClass={`${hoverClass}`} clickFunction={playHandler} setHoverClass={setHoverClass} />
                    */}
                </div>
            }
        </div>
    )
}
export default PlayIntro