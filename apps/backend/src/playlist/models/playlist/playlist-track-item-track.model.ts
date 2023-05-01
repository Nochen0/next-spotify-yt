import { Field, Int, ObjectType } from "type-graphql"
import { TrackAlbum } from "./track-album.model"
import { TrackArtist } from "./track-artist.model"

@ObjectType()
export class PlaylistTrackItemTrack {
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
