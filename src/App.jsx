import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import { lazy, Suspense } from "react"

const AboutPage = lazy(() => import("./components/pages/AboutPage"))
const HomePage = lazy(() => import("./components/pages/HomePage"))
const AllProjectsPage = lazy(() => import("./components/pages/AllProjectsPage"))
const AllTechsPage = lazy(() => import("./components/pages/AllTechsPage"))

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />

      <Suspense fallback={<div className="min-h-screen bg-[#151616]" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about-me" element={<AboutPage />}/>

          <Route path="/projects" element={<AllProjectsPage />}/>

          <Route path="/technologies" element={<AllTechsPage />}/>
        </Routes>
      </Suspense>

      <GeneralFooter />
        
      
    </>
  )
}

export default App
