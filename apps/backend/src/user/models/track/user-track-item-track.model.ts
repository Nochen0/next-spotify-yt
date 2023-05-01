import { TrackAlbum } from "../../../playlist/models/playlist/track-album.model"
import { TrackArtist } from "../../../playlist/models/playlist/track-artist.model"
import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
export class UserTrackItemTrack {
  @Field(() => TrackAlbum)
  album!: TrackAlbum

  @Field(() => [TrackArtist])
  artists!: TrackArtist[]

  @Field(() => Int)
  duration_ms!: number

  @Field()
  id!: string

  @Field()
  name!: string
}
