import { Service } from "typedi"
import { MercuriusConfig } from "./mercurius-config"

@Service()
export class MercuriusService {
  constructor(private mercuriusConfig: MercuriusConfig) {}

  async config() {
    const schema = await this.mercuriusConfig.makeSchema()
    this.mercuriusConfig.addMercuriusPlugin(schema)
  }
}
