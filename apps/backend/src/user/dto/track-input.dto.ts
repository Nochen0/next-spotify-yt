import { IsNotEmpty } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class TrackInput {
  @Field()
  @IsNotEmpty()
  id!: string

  @Field()
  @IsNotEmpty()
  token!: string
}
