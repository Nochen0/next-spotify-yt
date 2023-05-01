import { Service } from "typedi"
import fastify from "fastify"
import { Plugin } from "../types/plugin.type"
import { FastifyConfig } from "./fastify-config"

@Service()
export class FastifyService {
  private app = fastify()

  constructor(private fastifyConfig: FastifyConfig) {}

  private async listen(port = 4000) {
    await this.app.listen({ port })
  }

  private async registerPlugins(plugins: Set<Plugin>) {
    for (const { plugin, options } of plugins) {
      await this.app.register(plugin, options)
    }
  }

  async start() {
    await this.registerPlugins(this.fastifyConfig.getPlugins)
    await this.listen()
  }
}
