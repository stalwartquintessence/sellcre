// Home.tsx
import { useState, useEffect } from 'react';
import DrawerMenu from '../components/DrawerMenu';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="logo">
          <img src="/assets/logo.svg" alt="SellCRE logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#"><img src="assets/lock.svg" alt="Lock icon" />Login</a></li>
            <li><button className="try-btn">Try for Free</button></li>
          </ul>
        </nav>
        <button className="menu-btn" onClick={toggleMenu}>
          <img src="assets/menu-icon.svg" alt="Menu icon" />
        </button>
        <DrawerMenu isOpen={isMenuOpen} toggleDrawer={toggleMenu} />
      </header>

      <main>
        <section className="hero">
          <div className='content'>
            <p className='main'>
              <strong>Sell CRE Faster</strong> with OMs & Ads created in <strong>minutes</strong>
            </p>
            <p className='sub'>
              Create beautiful Commercial Real Estate Offering Memorandums, Flyers & Ads in minutes with our AI powered platform
            </p>
            <div className='foot'>
              <button className="try-btn">Try for Free<img src='assets/right-arrow.svg' alt='Right arrow icon' /></button>
              <div className="foot-bottom">
                <img className='play-btn' src="/assets/demo-btn.svg" alt="Play button" onClick={() => console.log('watching')} />
                <p className='foot-text'>Watch Demo</p>
              </div>
            </div>
          </div>
          <img className='hero-img' src="/assets/hero-image.svg" alt="Man with a tablet" />
        </section>
        <section className='property-types'>
          <div className='heading'>
            <p id='p1'>Create OMs and Ads For</p>
            <p id='t1'>Various Real Estate Property Types</p>
          </div>
          <div className='types'>
            <ul>
              <div>
                <img src="assets/retail.svg" alt="Retail" />
                <p>Retail</p>
              </div>
              <div>
                <img src="assets/multi-family.svg" alt="Multi-family" />
                <p>Multi-Family</p>
              </div>
              <div>
                <img src="assets/office.svg" alt="Office" />
                <p>Office</p>
              </div>
              <div>
                <img src="assets/warehouse.svg" alt="Warehouse" />
                <p>Industrial</p>
              </div>
              <div>
                <img src="assets/hotel.svg" alt="Hotel" />
                <p>Hotel</p>
              </div>
              <div>
                <img src="assets/land.svg" alt="Land" />
                <p>Land</p>
              </div>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <p className='footer-title'>Sample OMs created with our platform</p>
          <div className='om-list'>
            <div className='om-child'>
              <div>
                <img src="assets/om1.svg" alt="OM" />
                <h2>Retail OM</h2>
                <p>strip centers, street retail, vehicle related, and more.</p>
              </div>
              <button className="sample-btn">View Sample Template</button>
            </div>
            <div className='om-child'>
              <div>
                <img src="assets/om2.svg" alt="OM" />
                <h2>Multi-Family OM</h2>
                <p>garden, low-rise, mid-rise, high-rise.</p>
              </div>
              <button className="sample-btn">View Sample Template</button>
            </div>
            <div className='om-child'>
              <div>
                <img src="assets/om3.svg" alt="OM" />
                <h2>Office OM</h2>
                <p>all classes of office buildings, loft/creative, medical.</p>
              </div>
              <button className="sample-btn">View Sample Template</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;