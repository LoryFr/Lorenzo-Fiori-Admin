import type { CollectionConfig } from 'payload'
import { schema } from './schema'

export const Media: CollectionConfig = {
    admin: {
        useAsTitle: 'alt',
    },
    access: {
        read: () => true,
    },
    slug: 'media',
    fields: schema,
    upload: true
}