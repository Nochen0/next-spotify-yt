import "reflect-metadata"
import Container, { Service } from "typedi"
import { FastifyService } from "./fastify/fastify.service"
import { MercuriusService } from "./mercurius/mercurius.service"

@Service()
export class Server {
  constructor(
    private fastifyService: FastifyService,
    private mercuriusService: MercuriusService
  ) {}

  async init() {
    await this.mercuriusService.config()
    await this.fastifyService.start()
  }
}

Container.get(Server).init()
