import Container, { Service } from "typedi"
import mercurius from "mercurius"
import { FastifyConfig } from "../fastify/fastify-config"
import { buildSchema } from "type-graphql"
import { GraphQLSchema } from "graphql"
import { PlaylistResolver } from "../playlist/playlist.resolver"
import { YoutubeResolver } from "../youtube/youtube.resolver"
import { UserResolver } from "../user/user.resolver"
import { FastifyRequest } from "fastify"

@Service()
export class MercuriusConfig {
  constructor(private fastifyConfig: FastifyConfig) {}

  private readonly resolvers: any = [
    PlaylistResolver,
    YoutubeResolver,
    UserResolver,
  ]

  private context(req: FastifyRequest) {
    return {
      token: req.headers.authorization,
    }
  }

  async makeSchema() {
    return buildSchema({
      resolvers: this.resolvers,
      container: Container,
    })
  }

  addMercuriusPlugin(schema: GraphQLSchema) {
    this.fastifyConfig.addPlugin({
      plugin: mercurius,
      options: {
        schema,
        context: this.context,
        jit: 1,
      },
    })
  }
}
