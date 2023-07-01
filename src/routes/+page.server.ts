import { error } from '@sveltejs/kit'
import httpStatus from 'http-status'

import type { PageServerLoad } from './$types'

export const ssr = true

export const load: PageServerLoad = async ({ url, request }) => {
  const data = {
    code: request.headers.get('X-Code') ?? url.searchParams.get('code') ?? '0',
    from: request.headers.get('X-Original-URI') ?? url.searchParams.get('from'),
    namespace: request.headers.get('X-Namespace'),
    serviceName: request.headers.get('X-Service-Name'),
    servicePort: request.headers.get('X-Service-Port'),
    id: request.headers.get('X-Request-ID')
  }

  const code = Number.parseInt(data.code, 10)

  if (!(code && httpStatus[code] && code >= 400 && code < 600)) {
    return
  }

  throw error(code, {
    message: String(httpStatus[code]),
    from: data.from
  })
}
