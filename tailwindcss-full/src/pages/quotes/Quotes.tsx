import { useQuery } from 'react-query'
import { animeQuotesAPI } from '~/apis'

export const Quotes = () => {
  const { isFetching, isSuccess, data, refetch } = useQuery(
    animeQuotesAPI.getAll.queryKey(),
    animeQuotesAPI.getAll.query,
  )

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (isSuccess && data) {
    return (
      <div>
        Quotes
        <button className="p-2 m-2 border-2 rounded" onClick={() => refetch()}>
          refetch
        </button>
        <ol>
          {data.map((quote) => (
            <li className="flex flex-col p-2" key={quote.quote}>
              <span className="text-green-500">[{quote.anime}]</span>
              <span className="text-sm text-gray-500">{quote.character}</span>
              <span className="text-gray-700">{quote.quote}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  return <>error or idle</>
}
