import { Field, ObjectType } from "type-graphql"
import { UserTrackItemTrack } from "./user-track-item-track.model"

@ObjectType()
export class UserTrackItem {
  @Field()
  added_at!: string

  @Field(() => UserTrackItemTrack)
  track!: UserTrackItemTrack
}
