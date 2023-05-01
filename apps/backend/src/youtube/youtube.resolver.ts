import { Arg, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { SongUrl } from "./models/song-url.model"
import { YoutubeService } from "./youtube.service"

@Service()
@Resolver()
export class YoutubeResolver {
  constructor(private youtubeService: YoutubeService) {}

  @Query(() => SongUrl, { nullable: true })
  songUrl(@Arg("keywords", () => [String]) keywords: string[]) {
    return this.youtubeService.getSongUrl(keywords)
  }
}
