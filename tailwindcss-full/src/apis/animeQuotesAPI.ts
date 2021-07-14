import { Quote } from './apis.types'
import { BASE_URL } from './apis.utils'

const getAll = {
  query: () =>
    window
      .fetch(BASE_URL + '/quotes', { method: 'GET' })
      .then<Quote[]>((res) => res.json()),
  queryKey: () => 'animeQuotes',
}

export const animeQuotesAPI = { getAll }
