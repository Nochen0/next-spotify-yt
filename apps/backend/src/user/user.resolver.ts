import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { UserPlaylists } from "./models/playlist/user-playlists.model"
import { UserTracks } from "./models/track/user-tracks.model"
import { UserService } from "./user.service"

@Service()
@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserPlaylists)
  currentUsersPlaylists(@Ctx("token") token: string) {
    return this.userService.getCurrentUsersPlaylists(token)
  }

  @Query(() => UserTracks)
  usersSavedTracks(@Ctx("token") token: string) {
    return this.userService.getUsersSavedTracks(token)
  }

  @Mutation(() => Boolean)
  saveTrack(@Arg("id") id: string, @Ctx("token") token: string) {
    return this.userService.saveTrack({ id, token })
  }

  @Mutation(() => Boolean)
  unsaveTrack(@Arg("id") id: string, @Ctx("token") token: string) {
    return this.userService.unsaveTrack({ id, token })
  }
}
