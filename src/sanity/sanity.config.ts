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
  document: {
    actions: (prev) => {
      const publishAction = prev.find((a) => a.action === 'publish');
      const deleteAction = prev.find((a) => a.action === 'delete');
      const otherActions = prev.filter((a) => a.action !== 'publish' && a.action !== 'delete');
      
      // Keep publish first (primary), but put delete immediately second so it's not hidden
      return [publishAction, deleteAction, ...otherActions].filter(Boolean) as any[];
    },
  },
})
