import { GetServerSideProps } from "next"
import React from "react"
import usePlaylist from "../../graphql/hooks/usePlaylist"
import GradientBackground from "../../components/UI/GradientBackground"
import PageHeader from "../../components/UI/PageHeader"
import DarkerBackground from "../../components/UI/DarkerBackground"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { msToPlaytime } from "../../utils/time-utils"
import PlaylistButton from "../../components/collection/PlaylistButton"
import Head from "next/head"
import DefaultHeader from "../../components/document/DefaultHeader"
import { useRouter } from "next/router"
import Track from "../../components/Track/Track"
import TrackIndicator from "../../components/Track/TrackIndicator"

type PropTypes = {
  id: string
}

export const getServerSideProps: GetServerSideProps<PropTypes> = async ({
  query,
}) => {
  return {
    props: {
      id: query.id as string,
    },
  }
}

const Playlist: React.FC<PropTypes> = ({ id }) => {
  const { data, loading, error } = usePlaylist(id)
  const router = useRouter()

  if (error) router.replace("/404")
  if (loading || !data) return <DefaultHeader />

  return (
    <>
      <Head>
        <title>{data.playlist.name} | Spotify Playlist</title>
      </Head>
      <GradientBackground color={data.playlist.color}>
        <PageHeader
          imageUrl={data.playlist.images[0].url}
          type="Playlist"
          title={data.playlist.name}
          description={data.playlist.description}
        >
          <Link href={`/user/${data.playlist.owner.id}`} fontWeight="700">
            {data.playlist.owner.display_name}
          </Link>
          <Text transform="scale(1.3)">·</Text>
          <Text>
            {data.playlist.followers.total} like
            {data.playlist.followers.total < 2 ? "" : "s"}
          </Text>
          <Text transform="scale(1.3)">·</Text>
          <Text>
            {data.playlist.tracks.total} song
            {data.playlist.tracks.total < 2 ? "" : "s"},
          </Text>
          <Text color="rgba(255, 255, 255, 0.6)">
            {msToPlaytime(
              data.playlist.tracks.items.reduce(
                (prev, cur) => prev + cur.track.duration_ms,
                0
              )
            )}
          </Text>
        </PageHeader>
        <DarkerBackground>
          <Flex>
            <PlaylistButton id={id} name={data.playlist.name} />
          </Flex>
          <TrackIndicator />
          <Box>
            {data.playlist.tracks.items.map((item, index) => (
              <Track key={item.track.id} track={item} index={index} />
            ))}
          </Box>
        </DarkerBackground>
      </GradientBackground>
    </>
  )
}

export default Playlist
