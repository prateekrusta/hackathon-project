import '../../assets/css/navbar.css';
// import LogoMain from '../../assets/logos/logo-main.png';
// import { Link } from 'react-router-dom';
import BannerPhoto from '../../assets/images/banner-photo.png';

const Banner = () => {
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  return (
    <div className='banner-main' id='home'>
      <div className='banner-main-inner'>
        <div className='banner-left'>
          <div className='main-heading'>
            Promoting <span className='hellospanner'>&</span> Supporting Female{' '}
            <span className='hellospanner'>Entrepreuners</span>, Bringing Them{' '}
            <span className='hellospanner'>Together</span>.{' '}
          </div>
          <div className='sub-heading'>
            Adya, an initiative to promote and support aspiring as well as
            established rural women entrepreneurs. Adya enables
            partnerships between Rural women and existing ventures.
          </div>

          <div className='button-banner-cont'>
            <a href={`${URL}/#about`}>
              <button className='button-banner'>
                Read More &nbsp;<i class='fa-solid fa-circle-chevron-down'></i>
              </button>
            </a>
            <a href={`${URL}/#contact`}>
              <button className='button-banner'>
                Contact Us &nbsp;<i class='fa-solid fa-message'></i>
              </button>
            </a>
          </div>
        </div>
        <div className='banner-right'>
          <img className='banner-photo' src={BannerPhoto}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
