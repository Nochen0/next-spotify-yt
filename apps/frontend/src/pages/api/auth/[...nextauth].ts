import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const refreshAccessToken = async (token: any) => {
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: token.refreshToken,
  } as any)
  const url = `https://accounts.spotify.com/api/token?${params}`

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
    const jsonResponse = await response.json()
    if (!response.ok) throw jsonResponse

    return {
      ...token,
      accessToken: jsonResponse.access_token,
      accessTokenExpires: Date.now() + jsonResponse.expires_in * 1000,
      refreshToken: jsonResponse.refresh_token ?? token.refreshToken,
    }
  } catch (e) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

const authScopes =
  "https://accounts.spotify.com/authorize?scope=playlist-read-private,playlist-read-collaborative,playlist-modify-private,playlist-modify-public,user-follow-modify,user-follow-modify,user-top-read,user-read-recently-played,user-library-modify,user-library-read,user-read-email,user-read-private"

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: authScopes,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user,
        }
      }
      if (Date.now() < token.accessTokenExpires) return token

      return refreshAccessToken(token)
    },
    async session({ session, token }: any) {
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error

      return session
    },
  },
}

export default NextAuth(authOptions)
