import "./contact-form.css"

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
      {/* Formulaire de contact */}
      <div className="contact-form">
        <h3>Formulaire de contact</h3>
        <form>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre adresse email" required/>
          <input type="tel" placeholder="Votre numéro de téléphone" required />
          <input type="text" placeholder="Sujet" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* Coordonnées */}
      <div className="contact-info">
        <h3>Mes coordonnées</h3>
        <p>
          <strong>John Doe</strong><br />
          📍 40 rue Laure Diebold<br />
          📍 69009 Lyon, France<br />
          📞 10 20 30 40 50<br />
          📧 john.doe@gmail.com
        </p>
        <iframe
          src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon,+France&output=embed"
          width="100%"
          height="250"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Carte"
        ></iframe>
      </div>
    </div>
    </div>
  )
}

export default ContactForm