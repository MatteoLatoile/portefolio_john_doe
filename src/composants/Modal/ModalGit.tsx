import "./modal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cat from "./Desktop_John_Doe_Modale.png";
import Box from "./icon/box.svg";
import Card from "./icon/card-text.svg";
import Geo from "./icon/geo-alt (1).svg";
import Profil from "./icon/person-fill.svg";
import Follower from "./icon/people.svg";
import { useEffect, useState } from "react";

const ModalGit = () => {
  const [toggle, setToggle] = useState(false)

  const [datas, setDatas] = useState({});

  const getData = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setDatas(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: "50%" }}>
              <img src={Cat} width={"90%"} alt="profile" />
            </div>

            {/* Information */}
            <div style={{ width: "50%" }}>
              {/* Profil */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Profil} alt="profil icon" />
                <a href={datas.html_url} target="_blank" rel="noreferrer">{datas.name || datas.login}</a>
              </div>
              <hr />

              {/* Localisation */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Geo} alt="location icon" />
                <p style={{ margin: 0 }}>{datas.location || "Non renseignée"}</p>
              </div>
              <hr />

              {/* Description */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Card} alt="description icon" />
                <p style={{ margin: 0 }}>{datas.bio || "Aucune bio"}</p>
              </div>
              <hr />

              {/* Repositories */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Box} alt="repo icon" />
                <p style={{ margin: 0 }}>Repositories : {datas.public_repos}</p>
              </div>
              <hr />

              {/* Followers */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Follower} alt="followers icon" />
                <p style={{ margin: 0 }}>Followers : {datas.followers}</p>
              </div>
              <hr />

              {/* Following */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={Follower} alt="following icon" />
                <p style={{ margin: 0 }}>Following : {datas.following}</p>
              </div>
              <hr />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setToggle(false)} variant="secondary">Fermer</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalGit;
