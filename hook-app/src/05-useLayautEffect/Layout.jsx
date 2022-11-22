import useCounter from '../hooks/useCounter'
import useFetch from '../hooks/useFetch'
import LoadingQuote from '../03-examples/LoadingQuote'
import Quote from '../03-examples/Quote'

const Layout = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>breaking Bad Quotes</h1>
      <hr />

      {isLoading ?
          <LoadingQuote />
          :
          <Quote quote={quote} author={author}/>
      }

      <button
        className='btn btn-primary'
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  )
}

export default Layout