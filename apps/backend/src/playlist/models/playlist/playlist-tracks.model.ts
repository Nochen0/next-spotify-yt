import { Field, Int, ObjectType } from "type-graphql"
import { PlaylistTrackItem } from "./playlist-track-item.model"

@ObjectType()
export class PlaylistTracks {
  @Field(() => Int)
  total!: number

  @Field(() => [PlaylistTrackItem])
  items!: PlaylistTrackItem
}
