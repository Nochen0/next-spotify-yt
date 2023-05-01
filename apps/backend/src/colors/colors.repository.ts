import { Service } from "typedi"
import { PrismaService } from "../prisma/prisma.service"

@Service()
export class ColorsRepository {
  constructor(private prismaService: PrismaService) {}

  async findPlaylistColor(id: string) {
    const playlist = await this.prismaService.playlist.findUnique({
      where: { id },
    })
    if (!playlist) return null
    return playlist.color
  }

  async createPlaylistColor(id: string, color: string) {
    await this.prismaService.playlist.create({ data: { id, color } })
  }
}
