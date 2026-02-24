import { About } from "./Component/About/About";
import { Contact } from "./Component/Contact/Contact";
import { Footer } from "./Component/Footer/Footer";
import { Hero } from "./Component/Hero/Hero";
import { Navbar } from "./Component/Navbar/Navbar";
import { Portfolio } from "./Component/Portfolia/Portfolia";
import { Services } from "./Component/Services/Services";


export default function App() {
  return (
    <div className="size-full bg-black text-white overflow-x-hidden">
      
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
