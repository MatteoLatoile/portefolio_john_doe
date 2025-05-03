import "../Cardskills/card-skill.css"
import johndoe from "./john-doe-about.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';


const Cardskills = () => {
  return (
    <div className="card-skill-full">
        <div className="div-skill-right">
            <div>
              <h3 className="title-skill">A propos</h3>
            </div>
            <img src={johndoe} alt="photo de moi" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quia ex similique numquam consectetur error accusantium maiores molestias necessitatibus suscipit. Provident ab laudantium nesciunt eum eligendi corporis a dicta optio?</p>
        </div>
        <div className="div-skill-left">
            <div>
              <h3 className="title-skill">Mes compétences</h3>
            </div>
            <div>
              <p>HTML 90%</p>
             <ProgressBar style={{
                marginBottom:"20px"
                }} variant="danger" now={90} />

              <p>CSS3 80%</p>
              <ProgressBar style={{
                marginBottom:"20px"
                }} variant="info" now={80} />

              <p>JAVASCRIPT 70%</p>
              <ProgressBar style={{
                marginBottom:"20px"
                }} variant="warning" now={70} />

              <p>PHP 60%</p>
              <ProgressBar style={{
                marginBottom:"20px"
                }} variant="success" now={60} />

              <p>REACT 50%</p>
              <ProgressBar style={{
                marginBottom:"20px"
                }} variant="primary" now={50} />
          </div>
      </div>
    </div>
  )
}

export default Cardskills