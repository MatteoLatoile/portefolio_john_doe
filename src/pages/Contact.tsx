
import ContactForm from "../composants/ContactForm/ContactForm"
import Footer from "../composants/Footer/Footer"
import "../css/contact.css"


const Contact = () => {
  return (
    <div>
      <div style={{
        maxWidth:"800px",
        width:"100%",
        margin:"auto",
        borderBottom:"4px solid #0d6efd",
        textAlign:"center",
        marginTop:"30px"
      }}>
        <h2>Contact</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact