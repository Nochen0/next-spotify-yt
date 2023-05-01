import { ColorsService } from "../colors/colors.service"
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql"
import { Service } from "typedi"
import { Playlist } from "./models/playlist/playlist.model"
import { PlaylistService } from "./playlist.service"

@Service()
@Resolver(() => Playlist)
export class PlaylistResolver {
  constructor(
    private playlistService: PlaylistService,
    private colorsService: ColorsService
  ) {}

  @FieldResolver(() => String)
  async color(@Root() playlist: Playlist) {
    return this.colorsService.getPlaylistColor(playlist.id)
  }

  @Query(() => Playlist)
  playlist(@Arg("id") id: string, @Ctx("token") token: string) {
    return this.playlistService.getPlaylist({ id, token })
  }

  @Mutation(() => Boolean)
  async followPlaylist(@Arg("id") id: string, @Ctx("token") token: string) {
    await this.playlistService.followPlaylist({ id, token })
    return true
  }

  @Mutation(() => Boolean)
  async unfollowPlaylist(@Arg("id") id: string, @Ctx("token") token: string) {
    await this.playlistService.unfollowPlaylist({ id, token })
    return true
  }
}
