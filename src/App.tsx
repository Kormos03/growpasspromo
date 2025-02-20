import './App.css'
import tiktokIcon from '/tiktok.svg';
import facebookIcon from '/facebook.svg';
import instagramIcon from '/instagram.svg';
import youtubeIcon from '/youtube.svg';

function App() {
  //A cím megváltoztatásához a Helmet komponenst használjuk
  return (
    <>
      <body>
      <img src="../../assets/logo.png" alt="Logo" />
      <div className="header">
        <div className="logo">⚛️</div>
      </div>
      <div className="content">
        <div className="tagline">GROWPASS</div>
        <div className="text-and-icons">
          <p>GrowPass e-commerce supporting site with its unique system helps people and companies to get more liquidity as you never thought before.</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={tiktokIcon} alt="TikTok" className="social-icon" />
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </div>
        </div>
        <div className="cta">Follow</div>
      </div>
      <div className="footer">
        <div className="team">The team</div>
        <div className="about">About GrowPass</div>
        <div className="social-media">Open positions</div>
      </div>
    </body>
    </>
  )
}

export default App