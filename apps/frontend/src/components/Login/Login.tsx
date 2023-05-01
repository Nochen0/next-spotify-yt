import { Button, Grid } from "@chakra-ui/react"
import React from "react"
import SpotifyLogo from "../UI/SpotifyLogo"
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <Grid
      placeItems="center"
      placeContent="center"
      h="100vh"
      bg="black"
      gap="150px"
    >
      <SpotifyLogo h="230px" />
      <Button
        colorScheme="whatsapp"
        rounded="full"
        py="23px"
        px="28px"
        color="black"
        onClick={() => signIn("spotify")}
      >
        Log in with spotify
      </Button>
    </Grid>
  )
}

export default Login
