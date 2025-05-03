import "./accordion.css"
import Accordion from 'react-bootstrap/Accordion';
import Map from "../ContactForm/icon/map (1).svg"
import Geo from "../ContactForm/icon/geo-alt.svg"
import Phone from "../ContactForm/icon/phone.svg"
import Mail from "../ContactForm/icon/envelope-at.svg"

const AccordionMention = () => {
  return (
       <div style={{
        maxWidth:"1000px",
        width:"100%",
        margin:"auto"
       }}>
         <Accordion defaultActiveKey="0">
               <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
          <p><strong>John Doe</strong></p>
        <div style={{display:"flex", alignItems:"center",gap:"8px"}}>
          <img style={{width:"2%", alignItems:"center"}} src={Map} alt="" />
          <p style={{margin:"0"}}> 40 rue Laure Diebold</p>
        </div>

        <div style={{display:"flex", alignItems:"center",gap:"8px"}}>
          <img style={{width:"2%", alignItems:"center"}} src={Geo} alt="" />
          <p style={{margin:"0"}}> 69009 Lyon, France</p>
        </div>

          <div style={{display:"flex", alignItems:"center",gap:"8px"}} className="phone">
            <img style={{width:"2%", alignItems:"center"}}  src={Phone} alt="" />
            <a style={{color:"black", textDecoration:"none"}} href="tel:1020304050">
              10 20 30 40 50
            </a>
          </div>

          <div style={{display:"flex", alignItems:"center",gap:"8px"}} className="phone">
            <img style={{width:"2%", alignItems:"center"}} src={Mail} alt="" />
            <a style={{color:"black", textDecoration:"none", marginBottom:"10px"}} href="mailto:john.doe@gmail.com">
              john.doe@gmail.com
            </a>
          </div>
          </Accordion.Body>
               </Accordion.Item>
               <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
          <p><strong>John Doe</strong></p>
          <p>91 rue de Fabourg</p>
          </Accordion.Body>
               </Accordion.Item>

               <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
               </Accordion.Item>
               
             </Accordion>
       </div>

  )
}

export default AccordionMention