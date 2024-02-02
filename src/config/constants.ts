import { fileURLToPath } from 'node:url'
import path from 'node:path'

const BASE_URL = path.join(fileURLToPath(import.meta.url), '..', '..')

export const constants = {
  BASE_URL
}
