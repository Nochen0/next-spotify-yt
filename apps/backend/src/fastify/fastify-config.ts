import { Plugin } from "../types/plugin.type"
import { Service } from "typedi"
import fastifyCors from "@fastify/cors"

@Service()
export class FastifyConfig {
  private plugins = new Set<Plugin>()

  constructor() {
    this.addPlugins()
  }

  private addPlugins() {
    this.addPlugin({
      plugin: fastifyCors,
      options: {
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
      },
    })
  }

  addPlugin(plugin: Plugin) {
    this.plugins.add(plugin)
  }

  get getPlugins() {
    return this.plugins
  }
}
