import "./contact-form.css"
import Map from "./icon/map (1).svg"
import Geo from "./icon/geo-alt.svg"
import Phone from "./icon/phone.svg"
import Mail from "./icon/envelope-at.svg"

const ContactForm = () => {
  return (
    <div style={
        {
            maxWidth:"1000px",
            width:"100%",
            margin:"auto",
            marginTop:"30px",
            marginBottom:"30px"
        }
    }>
        <div className="contact-container">
      {/* Contact form */}
      <div className="contact-form">
        <h3>Formulaire de contact</h3>
        <form>
          <input type="text" placeholder="Votre nom" />
          <input type="email" placeholder="Votre adresse email" />
          <input type="tel" placeholder="Votre numéro de téléphone" />
          <input type="text" placeholder="Sujet" />
          <textarea placeholder="Votre message" rows="10"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* Contact details */}
      <div className="contact-info">
        <h3>Mes coordonnées</h3>
        <p><strong>John Doe</strong></p>
        <div style={{display:"flex", alignItems:"center",gap:"8px"}}>
          <img style={{width:"3%", alignItems:"center"}} src={Map} alt="" />
          <p style={{margin:"0"}}> 40 rue Laure Diebold</p>
        </div>

        <div style={{display:"flex", alignItems:"center",gap:"8px"}}>
          <img style={{width:"3%", alignItems:"center"}} src={Geo} alt="" />
          <p style={{margin:"0"}}> 69009 Lyon, France</p>
        </div>

          <div style={{display:"flex", alignItems:"center",gap:"8px"}} className="phone">
            <img style={{width:"3%", alignItems:"center"}}  src={Phone} alt="" />
            <a style={{color:"black", textDecoration:"none"}} href="tel:1020304050">
              10 20 30 40 50
            </a>
          </div>

          <div style={{display:"flex", alignItems:"center",gap:"8px"}} className="phone">
            <img style={{width:"3%", alignItems:"center"}} src={Mail} alt="" />
            <a style={{color:"black", textDecoration:"none", marginBottom:"10px"}} href="mailto:john.doe@gmail.com">
              john.doe@gmail.com
            </a>
          </div>
        
        <iframe
          src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon,+France&output=embed"
          width="100%"
          height="350"
          frameBorder="0"
          style={{ border: "0" }}
          loading="lazy"
          title="Carte"
        ></iframe>
      </div>
    </div>
    </div>
  )
}

export default ContactForm