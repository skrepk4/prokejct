
import Header from "./components/Header/Header"
import SomeSweet from "./components/Header/SomeSweet"
import Torts from "./components/Header/Torts"
import Cupcakes from "./components/Header/Cupcakes"
import Advertising from "./components/Header/Advertising"
import Conditers from "./components/Header/Conditers"
import Articles from "./components/Header/Articles"
import Footer from "./components/Header/Footer"
export default function App() {
  return(
    <div className="App">
      <Header />
      <main>
        <SomeSweet />
        <Torts />
        <Cupcakes />
        <Advertising />
        <Conditers />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}