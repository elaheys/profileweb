import About from "./components/module/About"
import Aim from "./components/module/Aim"
import Banner from "./components/module/Banner"
import Skills from "./components/module/Skills"
import Layout from "./layout/Layout"

function App() {

  return (
    <Layout>
      <Banner/>
      <Aim/>
      <About/>
      <Skills/>
    </Layout>
  )
}

export default App
