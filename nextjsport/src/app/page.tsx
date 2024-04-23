
import Navbar from "./component/navbar";
import Heros from "./component/home";
import Education from "./component/Education";
import Contact from "./component/contact"
import Feedback from "./component/feedback";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div >

      
      <hr/>
      <Heros />
      <hr />
      <Education />
      <hr/>
      <Contact />
      <hr/>
      <Feedback/>
      <hr/>
      <Footer/>

    </div>
  )

}
