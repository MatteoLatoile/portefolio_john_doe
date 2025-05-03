import Herobg from '../assets/images/hero-bg.jpg';
import Cardskills from '../composants/Cardskills/Cardskills';
import Ensavoirplus from '../composants/Ensavoirplus';
import Footer from '../composants/Footer/Footer';
import '../css/home.css'

const Home = () => {
  return (
    <div>
      <div>
        <img className='img-hero' src={Herobg} alt="" />
        <div className='div-hero'>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Developpeur web Full Stack</h2>
          <Ensavoirplus />
        </div>
        <Cardskills/>
        <Footer />
      </div>
    </div>
  )
}

export default Home