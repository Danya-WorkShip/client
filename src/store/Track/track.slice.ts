import { createSlice } from "@reduxjs/toolkit";

const InitialState: any[] = []

export const trackSlice = createSlice({
    name: 'track',
    initialState: InitialState,
    reducers: {
        playChoosenTrack: (state, {payload: track}) => {
            if(state.some(r => r.id === track.id))
                return
            state.push()
        }
    }
})