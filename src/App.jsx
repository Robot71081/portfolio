import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"



function App() {
 

  return (
    <>
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <div className="absolute inset-0 bg-[url('/src/bg1.jpg')] opacity-20"></div>


    <Header/>
      <Routes>

      
      <Route path="/" element={<Projects/>}/>
      <Route  path="/about"element={<About/>}/>
      <Route  path="/projectDetails/:id"element={<ProjectDetails/>}/>
      </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
    </>
  )
}

export default App
