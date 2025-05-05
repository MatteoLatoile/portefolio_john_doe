import "./accordion.css";
import Accordion from "react-bootstrap/Accordion";
import Map from "../ContactForm/icon/map (1).svg";
import Geo from "../ContactForm/icon/geo-alt.svg";
import Phone from "../ContactForm/icon/phone.svg";
import Mail from "../ContactForm/icon/envelope-at.svg";
import Globe from "../ContactForm/icon/globe.svg";

const AccordionMention = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        width: "100%",
        margin: "auto",
      }}
    >
      {/* First Accordion */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>John Doe</strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                style={{ width: "2%", alignItems: "center" }}
                src={Map}
                alt=""
              />
              <p style={{ margin: "0" }}> 40 rue Laure Diebold</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                style={{ width: "2%", alignItems: "center" }}
                src={Geo}
                alt=""
              />
              <p style={{ margin: "0" }}> 69009 Lyon, France</p>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              className="phone"
            >
              <img
                style={{ width: "2%", alignItems: "center" }}
                src={Phone}
                alt=""
              />
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="tel:1020304050"
              >
                10 20 30 40 50
              </a>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              className="phone"
            >
              <img
                style={{ width: "2%", alignItems: "center" }}
                src={Mail}
                alt=""
              />
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginBottom: "10px",
                }}
                href="mailto:john.doe@gmail.com"
              >
                john.doe@gmail.com
              </a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* second accordion */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>John Doe</strong>
            </p>
            <p>91 rue de Fabourg Saint-Honoré, 75008 Paris</p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                style={{ width: "2%", alignItems: "center" }}
                src={Globe}
                alt=""
              />
              <a href="">www.alwaysdata.com</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
                {/* third accordion */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>
              Le site à été réaliser par John Doe, étudiant au{" "}
              <a href="">Centre européen de Formation</a>
            </p>
            <br />
            <br />
            <p style={{ fontStyle: "italic" }}>
              Les images utilisées sur ce site sont libres de droits et on été
              obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a>
            </p>{" "}
            <br />
            <br />
            <p>
              La favicon de ce site à été fournie par{" "}
              <a href="https://www.flaticon.com/">John Doe Icons erstellt von Freepik - Flaticon</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionMention;
