import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const csvExchangeFileUploadSchema = z.object({
  file: z
    .custom<File>((val) => val instanceof File, {
      message: "Please upload a valid file",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => file.type === "text/csv" || file.name.endsWith(".csv"), {
      message: "File must be a CSV (.csv)",
    }),
})

export type CsvExchangeFileUpload = z.infer<typeof csvExchangeFileUploadSchema>
