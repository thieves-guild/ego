import CircularBar from "../components/circular-progress-bar"
import RandomQuote from "../components/random-quote"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-20 gap-8">
      <h1>My daily rate</h1>
      <CircularBar />
      <RandomQuote />
    </div>
  )
}

export default Home
