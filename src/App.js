
import Header from "./components/Header/Header"
import SomeSweet from "./components/Header/SomeSweet"
import Torts from "./components/Header/Torts"
import Cupcakes from "./components/Header/Cupcakes"
import Advertising from "./components/Header/Advertising"
export default function App() {
  return(
    <div className="App">
      <Header />
      <main>
        <SomeSweet />
        <Torts />
        <Cupcakes />
        <Advertising />
      </main>
    </div>
  )
}