import About from "./components/module/About"
import Aim from "./components/module/Aim"
import Banner from "./components/module/Banner"
import Skills from "./components/template/Skills"
import Business from "./components/template/Business"
import Call from "./components/template/Call"
import CallFooter from "./components/template/CallFooter"
import Strategic from "./components/template/Strategic"
import Layout from "./layout/Layout"
import Address from "./components/template/Address"

function App() {

  return (
    <Layout>
      <Banner/>
      <Aim />
      <Call/>
      <About/>
      <Strategic/>
      {/* <CallFooter/> */}
      <Business/>
      <Skills/>
      
            <div>
                <section className='flex text-center md:text-lg text-base tracking-tighter p-5 mt-16 justify-center'>
                    <li>
                    دیگر راهکارهای سنتی پاسخگوی نیاز کسب و کارها نیست
                    امروز هر کسب و کاری نیازمند روش های خلاقانه و نوآورانه برای رسیدن به اهداف خود می باشد.
                    </li>
                </section>
            </div>
      <Address/>
    </Layout>
  )
}

export default App
