import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    introStep: 3,
    audioVol: 0.5,
    audioMaxVol: 0.4,
    audioEnabled: true,
    audioPaused: false,
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        reset: () => {
            return initialState
        },
        setintroStep: (state, { payload }) => {
            state.introStep = payload.value
        },
        addAudioVol: (state, { payload }) => {
            state.audioVol = Math.min(state.audioMaxVol, state.audioVol + payload.value)
        },
        subAudioVol: (state, { payload }) => {
            state.audioVol = Math.max(0, state.audioVol - payload.value)
        },
        toggleAudioEnable: (state) => {
            state.audioEnabled = !state.audioEnabled
        },
        setAudioEnable: (state, { payload }) => {
            state.audioEnabled = payload.value
        },
        toggleAudioPause: (state) => {
            state.audioPaused = !state.audioPaused
        },
        setAudioPause: (state, { payload }) => {
            state.audioPaused = payload.value
        },
    }
})

export const { reset, setintroStep, addAudioVol, subAudioVol, toggleAudioEnable, setAudioEnable, toggleAudioPause, setAudioPause } = pageSlice.actions

export default pageSlice.reducer