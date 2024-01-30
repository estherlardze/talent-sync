import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  useEffect(() => {
    AOS.init({duration: 1500 });
  }, []);

  return(
   <div className=''>
    <Navbar/>
    <div className='w-[94%] mx-[3%] sm:w-[90%] sm:mx-[5%] 2xl:w-[60%] 2xl:mx-[20%]'>
      <Header/>
      <Sponsors/>
      <WhyChooseUs/>
    </div>
    <div className='bg-black/5'>
     <Features/> 
    </div>    
    <FAQ/>
    
    <Team/>
    <Footer/>    
   </div>
  )
}

export default App