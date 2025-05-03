import Banner from "../assets/images/banner.jpg"
import Card from 'react-bootstrap/Card';

const Services = () => {
  return (
    <div>
      <img style={{
        overflow:"hidden",
        width:"100vw"
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
       gap:"20px",
       marginTop:"30px"
      }}>
        <Card style={{width:"18rem"
         }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
            </Card>

            <Card style={{width:"18rem"
         }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
            </Card>

            <Card style={{width:"18rem"
         }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body style={{
          textAlign:"center"
        }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
            </Card>
      </div>
    </div>
  )
}

export default Services