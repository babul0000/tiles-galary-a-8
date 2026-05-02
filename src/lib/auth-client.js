import { createAuthClient } from "better-auth/react"


const baseURL = "https://tiles-galary-a-8.vercel.app"

export const authClient = createAuthClient({
    /** The base URL of the server */
    baseURL,
})

export const { signIn, signUp, useSession } = authClient