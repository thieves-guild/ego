import { useQuery } from '@tanstack/react-query'
import { Quote } from '../types'

const RandomQuote = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['quote'],
    queryFn: async (): Promise<Quote> =>
      await (
        await fetch('https://stoic-quotes.com/api/quote'
        )
      ).json()
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something happened</div>

  return (
    <div>
      <p className='text-neutral-700 italic mb-2'>"{data?.text}"</p>
      <p>- {data?.author}</p>
    </div>
  )
}

export default RandomQuote