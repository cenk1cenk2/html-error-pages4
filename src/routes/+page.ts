import { error } from '@sveltejs/kit'
import httpStatus from 'http-status'

import type { PageLoad } from './$types'

export const ssr = true

export const load: PageLoad = async ({ url }) => {
  const code = Number.parseInt(url.searchParams.get('code') ?? '0', 10)

  if (!(code && httpStatus[code] && code >= 400 && code < 600)) {
    return { code: 'WTF', message: 'Nothing to see here' }
  }

  throw error(code, {
    message: String(httpStatus[code]),
    from: url.searchParams.get('from')
  })
}
