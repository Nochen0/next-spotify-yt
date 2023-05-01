import { Service } from "typedi"
import { PlaylistRepository } from "./playlist.repository"
import { PlaylistInput } from "./dto/playlist-input.dto"

@Service()
export class PlaylistService {
  constructor(private playlistRepository: PlaylistRepository) {}

  getPlaylist(data: PlaylistInput) {
    return this.playlistRepository.getPlaylist(data)
  }

  followPlaylist(data: PlaylistInput) {
    return this.playlistRepository.followPlaylist(data)
  }

  unfollowPlaylist(data: PlaylistInput) {
    return this.playlistRepository.unfollowPlaylist(data)
  }
}
