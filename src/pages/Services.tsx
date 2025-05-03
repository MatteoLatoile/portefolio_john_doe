import Banner from "../assets/images/banner.jpg"
import Card from 'react-bootstrap/Card';
import Brush from "../assets/images/icon/brush.svg"
import Code from "../assets/images/icon/code-slash.svg"
import Search from "../assets/images/icon/search.svg"
import Footer from "../composants/Footer/Footer";

const Services = () => {
  return (
    <div>
      <img style={{
        overflow:"hidden",
        width:"100%"
      }} src={Banner} alt="" />

      <div style={{
        maxWidth:"500px",
        width:"100%",
        margin:"auto",
        borderBottom:"4px solid #0d6efd",
        textAlign:"center",
        marginTop:"20px"
      }}>
        <h2>Mon offre de services</h2>
        <p>Voici les présations sur lesquelles je peux intervenir</p>
      </div>


      <div style={{
        maxWidth: '1000px',
        width:"100%",
       margin:"auto",
       display:"flex",
       justifyContent:"space-evenly",
       marginTop:"30px",
       marginBottom:"30px"
      }}>
        <Card style={{width:"18rem"
         }}>
        <Card.Img style={{
          width:"30%",
          margin:"auto",
          marginTop:"30px",
          marginBottom:"30px"

        }} variant="center" src={Brush}/>
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>UX Design</Card.Title>
          <Card.Text>
          L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations. L’objectif est de rendre l’expérience utilisateur la plus fluide et agréable possible.
          </Card.Text>
        </Card.Body>
            </Card>

            <Card style={{width:"18rem"
         }}>
        <Card.Img style={{

            width:"30%",
            margin:"auto",
            marginTop:"30px",
            marginBottom:"30px"

        }} variant="center" src={Code} />
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>Développement web</Card.Title>
          <Card.Text>
          Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
          </Card.Text>
        </Card.Body>
            </Card>

            <Card style={{width:"18rem"
         }}>
        <Card.Img style={
          {
            width:"30%",
          margin:"auto",
          marginTop:"30px",
          marginBottom:"30px"
          }
        } variant="center" src={Search} />
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>Référencement</Card.Title>
          <Card.Text>
          Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est d’attirer un maximum de visiteurs qualifiés sur le site.
          </Card.Text>
        </Card.Body>
            </Card>
      </div>
      <Footer />
    </div>
  )
}

export default Services