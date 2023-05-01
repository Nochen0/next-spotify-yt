import { Service } from "typedi"
import fetch from "node-fetch"
import { SpotifyError } from "src/types/spotify-error.type"
import { Playlist } from "./models/playlist/playlist.model"
import { PlaylistInput } from "./dto/playlist-input.dto"

@Service()
export class PlaylistRepository {
  private getHeaders(token: string) {
    return {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    }
  }

  async getPlaylist({ token, id }: PlaylistInput) {
    const headers = this.getHeaders(token)
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers,
    })
    const jsonResponse = (await response.json()) as Playlist | SpotifyError
    if (!response.ok) {
      throw new Error((jsonResponse as SpotifyError).error.message)
    }
    return jsonResponse as Playlist
  }

  async followPlaylist({ token, id }: PlaylistInput) {
    const headers = this.getHeaders(token)
    await fetch(`https://api.spotify.com/v1/playlists/${id}/followers`, {
      headers,
      method: "PUT",
    })
  }

  async unfollowPlaylist({ token, id }: PlaylistInput) {
    const headers = this.getHeaders(token)
    await fetch(`https://api.spotify.com/v1/playlists/${id}/followers`, {
      headers,
      method: "DELETE",
    })
    return true
  }
}
