import { Session } from "next-auth"
import { useSession } from "next-auth/react"

export type AppSession = {
  data: Session & {
    accessToken: string
  }
}

export const useAppSession = () => {
  const { data } = useSession() as unknown as AppSession
  return data
}
