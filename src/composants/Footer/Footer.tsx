import "./footer.css"
import {Routes, Route, Link} from 'react-router-dom';
import Services from "../../pages/Services";
import Mention from "../../pages/Mention";
import Portefolio from "../../pages/Portefolio";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";

const Footer = () => {
  return (
    <div className="bg-footer">
        <div className="div-global">
            <div className="div-footer-1">
                <h4>John Doe</h4>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <a href="callto:1020304050">1020304050</a> <br />
                <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                <div style={{
                  display:"flex",
                  gap:"8px"
                }}>
                  <a href=""><i className="fa-brands fa-square-github"></i></a>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-linkedin"></i></a>

                </div>
            </div>
            <div className="div-footer-2">
                <h4>Liens utiles</h4>
                <Link to="/home">Home</Link><br />
                <Link to="/services">Services</Link><br />
                <Link to="/portefolio">Portefolio</Link><br />
                <Link to="/contact">Contact</Link><br />
                <Link to="mention">Mentions légales</Link><br />
                <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/portefolio" element={<Portefolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/mention" element={<Mention />}></Route>
           </Routes>
            </div>
            <div className="div-footer-3">
              <h4>Mes dernières réalisations</h4>
              <p>Fresh Food</p>
              <p>Restaurant Akira</p>
              <p>Espace bien-être</p>
              <p>SEO</p>
              <p>Création d'une API</p>
              <p>Maquette d'un site</p>
            </div>
        </div> 
    </div>
  )
}

export default Footer