import { Field, ObjectType } from "type-graphql"
import { Followers } from "../common/followers.model"
import { Image } from "../common/image.model"
import { Owner } from "../common/owner.model"
import { PlaylistTracks } from "./playlist-tracks.model"

@ObjectType()
export class Playlist {
  @Field()
  description!: string

  @Field(() => Followers)
  followers!: Followers

  @Field()
  id!: string

  @Field(() => [Image])
  images!: Image[]

  @Field()
  name!: string

  @Field(() => Owner)
  owner!: Owner

  @Field()
  public!: boolean

  @Field(() => PlaylistTracks)
  tracks!: PlaylistTracks
}
