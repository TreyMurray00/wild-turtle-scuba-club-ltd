import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Wild Turtle Scuba Club',

  projectId: 'ufihjryx',
  dataset: 'production',

  basePath: '/studio', // Essential for embedded routing
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
