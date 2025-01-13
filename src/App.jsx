
import './App.css'
import Header from './components/header'
import Section1 from './components/section1'
import {Section2} from './components/section1'
import Section3 from './components/socialProof'
import {FeatureSection} from './components/socialProof'
import Section5 from './components/testimonial'
import SectionFaq from './components/faq'
import SectionBlog from './components/blog'
import Footer from './components/footer'
import SectionDivider from './components/SectionDivider'
// import Dropdown from './components/dropdown'
function App() {


  return (
    <>
    {/* <div className='fixed  top-[4em] left-[6em]'>
    <Dropdown/>
    </div> */}
      <div className='flex flex-col gap-20 items-center justify-between w-full'>
        <Header />
        <Section1 />
        <Section2/>
        
      </div>
      <Section3/>
      <SectionDivider/>
      <FeatureSection/>
      <Section5/>
      <SectionFaq/>
      <SectionDivider/>
      <SectionBlog/>
      <Footer/>
    </>
  )
}

export default App
