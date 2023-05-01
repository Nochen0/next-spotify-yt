import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Image {
  @Field()
  url!: string
}
