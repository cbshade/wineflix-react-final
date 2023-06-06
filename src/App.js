import "./App.css";
import Hero from "./Hero";
import WineCategories from "./WineCategories";

const App = () => {
  return (
    <div className="App">
      <header className="hero">
        <Hero />
      </header>
      <main>
        <WineCategories />
      </main>
    </div>
  )
}

export default App
