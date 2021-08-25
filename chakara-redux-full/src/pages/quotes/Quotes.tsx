import { useQuery } from 'react-query'
import { animeQuotesAPI } from '~/apis'
import { Button, List, ListItem, Text } from '@chakra-ui/react'

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
        <Button onClick={() => refetch()}>refetch</Button>
        <List spacing="3.5">
          {data.map((quote) => (
            <ListItem key={quote.quote}>
              <Text color="teal">[{quote.anime}]</Text>
              <Text fontSize="small">{quote.character}</Text>
              <Text color="gray.600">{quote.quote}</Text>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

  return <>error or idle</>
}
