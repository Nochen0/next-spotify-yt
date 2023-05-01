import { Service } from "typedi"
const youtubesearchapi = require("youtube-search-api")

@Service()
export class YoutubeService {
  async getSongUrl(keywords: string[]) {
    const str = keywords.join(",")
    const result = await youtubesearchapi.GetListByKeyword(str, false, 1)
    if (!result.items.length) return null
    const url = `https://youtube.com/watch?v=${result.items[0].id}`
    return { url }
  }
}
