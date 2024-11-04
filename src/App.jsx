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
    <div className="bg-[#111827] min-h-screen">
   


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
