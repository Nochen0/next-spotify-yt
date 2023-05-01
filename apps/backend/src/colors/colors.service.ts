import { Service } from "typedi"
import { colors, variations } from "./colors"
import { ColorsRepository } from "./colors.repository"

@Service()
export class ColorsService {
  constructor(private colorRepository: ColorsRepository) {}

  private randomColor() {
    const colorIndex = Math.floor(Math.random() * colors.length)
    const variatonIndex = Math.floor(Math.random() * variations.length)
    return `${colors[colorIndex]}.${variations[variatonIndex]}`
  }

  async getPlaylistColor(id: string) {
    const color = await this.colorRepository.findPlaylistColor(id)
    if (color) return color
    const newColor = this.randomColor()
    await this.colorRepository.createPlaylistColor(id, newColor)
    return newColor
  }
}
