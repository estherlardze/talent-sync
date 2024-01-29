import {
  Navbar,
  FAQ, 
  Features, 
  Footer, 
  Header, 
  Sponsors, 
  Team, 
  WhyChooseUs
} from './components/index'

const App = () => {
  return(
   <div className='w-[94%] mx-[3%] sm:w-[92%] sm:mx-[4%] '>
    <Navbar/>
    <Header/>
    <Features/>
    <Sponsors/>
    <WhyChooseUs/>
    <Team/>
    <FAQ/>
    <Footer/>
   </div>
  )
}

export default App