import { Field, Int, ObjectType } from "type-graphql"
import { UserTrackItem } from "./user-track-item.model"

@ObjectType()
export class UserTracks {
  @Field(() => Int)
  total!: number

  @Field(() => [UserTrackItem])
  items!: UserTrackItem[]
}
