import { animeQuotesAPI } from '~/apis'

export const Quotes = () => {
  const { isFetching, isSuccess, data, refetch } =
    animeQuotesAPI.useGetAnimeQuotesQuery()

  if (isFetching) {
    return <span>Loading...</span>
  }

  if (isSuccess) {
    return (
      <>
        <button className="p-2 m-2 border-2 rounded" onClick={refetch}>
          refetch
        </button>
        <ol>
          {data?.map((quote) => (
            <li className="flex flex-col p-2" key={quote.quote}>
              <span className="text-green-500">[{quote.anime}]</span>
              <span className="text-sm text-gray-500">{quote.character}</span>
              <span className="text-gray-700">{quote.quote}</span>
            </li>
          ))}
        </ol>
      </>
    )
  }

  return <div>Quotes Page</div>
}
