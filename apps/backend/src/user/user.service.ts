import { Service } from "typedi"
import { TrackInput } from "./dto/track-input.dto"
import { UserRepository } from "./user.repository"

@Service()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getCurrentUsersPlaylists(token: string) {
    return this.userRepository.getCurrentUsersPlaylists(token)
  }

  getUsersSavedTracks(token: string) {
    return this.userRepository.getUsersSavedTracks(token)
  }

  saveTrack(input: TrackInput) {
    return this.userRepository.saveTrack(input)
  }

  unsaveTrack(input: TrackInput) {
    return this.userRepository.unsaveTrack(input)
  }
}
