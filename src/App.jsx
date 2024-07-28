import About from "./components/module/About"
import Aim from "./components/module/Aim"
import Banner from "./components/module/Banner"
import Skills from "./components/template/Skills"
import Business from "./components/template/Business"
import Call from "./components/template/Call"
import CallFooter from "./components/template/CallFooter"
import Strategic from "./components/template/Strategic"
import Layout from "./layout/Layout"

function App() {

  return (
    <Layout>
      <Banner/>
      <Aim />
      <Call/>
      <About/>
      <Strategic/>
      <Business/>
      <CallFooter/>
      <Skills/>
    </Layout>
  )
}

export default App
