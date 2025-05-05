import "../css/portefolio.css";
import "../css/services.css";
import Banner from "../assets/images/banner.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../composants/Footer/Footer";
import ImgFreshfood from "../assets/images/portfolio/fresh-food.jpg";
import ImgAkira from "../assets/images/portfolio/restaurant-japonais.jpg";
import ImgBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import ImgSeo from "../assets/images/portfolio/seo.jpg";
import ImgApi from "../assets/images/portfolio/coder.jpg";
import ImgMaquette from "../assets/images/portfolio/screens.jpg";

const Portefolio = () => {
  return (
    <div>
      <img
        style={{
          overflow: "hidden",
          width: "100%",
        }}
        src={Banner}
        alt=""
      />

      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          margin: "auto",
          borderBottom: "4px solid #0d6efd",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <h2>Portefolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
      </div>
      {/* All the projects */}
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        {/* project 1 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgFreshfood} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Fresh Food</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Site réalisé avec PHP et MySQL
          </Card.Footer>
        </Card>
        {/* project 2 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgAkira} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Restaurant Akira</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Site réalisé avec WordPress
          </Card.Footer>
        </Card>
        {/* project 3 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgBienEtre} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Espace bien-être</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Site réalisé avec LARAVEL
          </Card.Footer>
        </Card>
        {/* project 4 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgSeo} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>SEO</Card.Title>
            <Card.Text>
              Amélioration du référencement d’un site e-commerce
            </Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Utilisation des outils SEO
          </Card.Footer>
        </Card>
        {/* project 5 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgApi} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Création d'une API</Card.Title>
            <Card.Text>Création d’une API RESTFUL publique</Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">PHP - SYMFONY</Card.Footer>
        </Card>
        {/* project 6 */}
        <Card className="cardHover" style={{ width: "30%", marginTop: "30px" }}>
          <Card.Img variant="top" src={ImgMaquette} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Maquette d’un site web</Card.Title>
            <Card.Text>Création d’un prototype d’un site</Card.Text>
            <Button className="btnSee" variant="primary">
              Voir le site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">Réalisé avec FIGMA</Card.Footer>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Portefolio;
