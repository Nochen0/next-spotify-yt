import { Field, ObjectType } from "type-graphql"
import { Owner } from "../common/owner.model"
import { PlaylistTrackItemTrack } from "./playlist-track-item-track.model"

@ObjectType()
export class PlaylistTrackItem {
  @Field()
  added_at!: string

  @Field(() => Owner)
  added_by!: Owner

  @Field(() => PlaylistTrackItemTrack)
  track!: PlaylistTrackItemTrack
}
