import "../Cardskills/card-skill.css"
import johndoe from "./john-doe-about.jpg"
const Cardskills = () => {
  return (
    <div className="card-skill-full">
        <div className="div-skill-right">
            <h3 className="title-skill"></h3>
            <img src={johndoe} alt="photo de moi" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quia ex similique numquam consectetur error accusantium maiores molestias necessitatibus suscipit. Provident ab laudantium nesciunt eum eligendi corporis a dicta optio?</p>
        </div>
        <div className="div-skill-left">
            <h3 className="title-skill"></h3>
        </div>
    </div>
  )
}

export default Cardskills