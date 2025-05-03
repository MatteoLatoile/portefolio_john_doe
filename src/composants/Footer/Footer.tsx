import "./footer.css"
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
            </div>
            <div className="div-footer-2">
                <h4>Liens utiles</h4>
            </div>
            <div className="div-footer-3">
            </div>
        </div>
    </div>
  )
}

export default Footer