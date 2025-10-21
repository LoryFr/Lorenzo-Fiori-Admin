import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export const VercelBlob = vercelBlobStorage({
    enabled: true,
    clientUploads: true,
    addRandomSuffix: true,
    collections: {
        media: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN,
})