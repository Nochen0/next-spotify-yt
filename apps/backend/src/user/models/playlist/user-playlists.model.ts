import { Field, ObjectType } from "type-graphql"
import { UserPlaylist } from "./user-playlist.model"

@ObjectType()
export class UserPlaylists {
  @Field(() => [UserPlaylist])
  items!: UserPlaylist[]
}
