import { z } from "zod"
import dotenv from "dotenv"

dotenv.config()

const envSchema = z.object({
  PORT: z
    .string()
    .refine(
      (port) => parseInt(port) > 0 && parseInt(port) < 65536,
      "Invalid port number"
    ),
  BASE_URL: z
    .string()
    .refine(
      (url) => url.startsWith("http") || url.startsWith("https"),
      "Invalid URL format"
    ),
})

type Env = z.infer<typeof envSchema>

export const ENV: Env = envSchema.parse(process.env)
