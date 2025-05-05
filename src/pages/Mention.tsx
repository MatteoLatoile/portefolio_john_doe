import Footer from "../composants/Footer/Footer"
import "../css/mention.css"
import AccordionMention from "../composants/MentionAccordion/AccordionMention"
import { Helmet } from 'react-helmet';



const Mention = () => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mention</title>
      </Helmet>
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