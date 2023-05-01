import fetch from "node-fetch"
import { SpotifyError } from "src/types/spotify-error.type"
import { Service } from "typedi"
import { TrackInput } from "./dto/track-input.dto"
import { UserPlaylists } from "./models/playlist/user-playlists.model"
import { UserTracks } from "./models/track/user-tracks.model"

@Service()
export class UserRepository {
  private getHeaders(token: string) {
    return {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    }
  }

  async getCurrentUsersPlaylists(token: string) {
    const headers = this.getHeaders(token)
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers,
    })
    const jsonResponse = (await response.json()) as UserPlaylists | SpotifyError
    if (!response.ok) {
      throw new Error((jsonResponse as SpotifyError).error.message)
    }
    return jsonResponse as UserPlaylists
  }

  async getUsersSavedTracks(token: string) {
    const headers = this.getHeaders(token)
    const response = await fetch("https://api.spotify.com/v1/me/tracks", {
      headers,
    })
    const jsonResponse = (await response.json()) as UserTracks | SpotifyError
    if (!response.ok) {
      throw new Error((jsonResponse as SpotifyError).error.message)
    }
    return jsonResponse as UserTracks
  }

  async saveTrack({ token, id }: SaveTrackInput) {
    const headers = this.getHeaders(token)
    await fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      headers,
      method: "PUT",
    })
    return true
  }

  async unsaveTrack({ token, id }: TrackInput) {
    const headers = this.getHeaders(token)
    await fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      headers,
      method: "DELETE",
    })
    return true
  }
}
