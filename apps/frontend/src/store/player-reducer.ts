import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Track } from "../graphql/hooks/usePlaylist"

type ActiveTrack = Pick<Track, "track"> & { url: string }

type InitialState = {
  playing: boolean
  activeTrack: ActiveTrack | null
  trackList: Track[] | null
  volume: number
  loading: { track: Track; state: boolean } | null
}

const initialState: InitialState = {
  playing: false,
  activeTrack: null,
  trackList: null,
  volume: 1,
  loading: null,
}

const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    setPlaying(state, { payload }: PayloadAction<boolean | undefined>) {
      if (payload) state.playing = payload
      else state.playing = !state.playing
    },
    setActiveTrack(
      state,
      { payload }: PayloadAction<{ track: Track; url: string }>
    ) {
      state.activeTrack = { track: payload.track.track, url: payload.url }
      if (!state.playing) state.playing = true
    },
    setLoading(
      state,
      { payload }: PayloadAction<{ track: Track; state: boolean }>
    ) {
      state.loading = payload
    },
  },
})

export const { setPlaying, setActiveTrack, setLoading } = playerSlice.actions

export default playerSlice.reducer
