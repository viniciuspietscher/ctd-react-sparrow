import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Landing from "./Components/Landing"
import NewItem from "./Components/NewItem"
import style from "./App.module.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/new' element={<NewItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
