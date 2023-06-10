import CircularBar from "../components/circular-progress-bar"
import RandomQuote from "../components/random-quote"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-20 space-y-8">
      <h1>Performix | Measurify</h1>
      <CircularBar />
      <RandomQuote />
    </div>
  )
}

export default Home
