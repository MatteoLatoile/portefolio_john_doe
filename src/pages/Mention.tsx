import { Accordion } from "react-bootstrap"
import Footer from "../composants/Footer/Footer"
import "../css/mention.css"
import AccordionMention from "../composants/MentionAccordion/AccordionMention"

const Mention = () => {
  return (
    <div>
      <div style={{
        maxWidth:"500px",
        width:"100%",
        margin:"auto",
        borderBottom:"4px solid #0d6efd",
        textAlign:"center",
        marginTop:"20px"
      }}>
        <h2>Mentions légales</h2>
      </div>
      <div style={{height:"100vh"}}>
        <br /><br /><br />
      <AccordionMention/>
      </div>
      <Footer/>
    </div>
  )
}

export default Mention