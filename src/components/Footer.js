import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="footer-logo">
                <Link href="/">
                  <img src="/assets/img/logo.webp" style={{ width: '100px' }} alt="Footer Logo" />
                </Link>
                <p>
                  We offer expert assessments for Gujarat Roll Ball, providing detailed analysis and insights to enhance
                  performance and strategy for teams and players.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="row gy-5">
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <div className="social-media">
                  <h4>Find Here:</h4>
                  <ul className="social-icons">
                    <li><Link href="https://www.instagram.com/roll_ball_gujarat_india/" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
                    {/* <li><Link href="https://www.pinterest.com/" target='_blank' ><i className="fab fa-pinterest"></i></Link></li> */}
                    <li><Link href="https://www.twitter.com/" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.facebook.com/rollball.gujarat/" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul className="footer-menu">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/About_Us">About Us</Link></li>
                  <li><Link href="/Documents">Documents</Link></li>
                  <li><Link href="/Gallery">Gallery</Link></li>
                  <li><Link href="/Blog">Blog</Link></li>
                  <li><Link href="/Contact_Us">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h4>Hours of Open</h4>
                <ul className="office-time">
                  <li>Mon-Wed: 6:00am – 8:00pm</li>
                  <li>Thurs-Fri: 6:30am – 7:30pm</li>
                  <li>Sat-Sun: 6:00am – 8:00pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="number">
                  <div className="num-icon">
                    <i><img src="/assets/img/icons/phone-2.svg" alt="Phone Icon" /></i>
                  </div>
                  <div className="phone">
                    <Link href="tel:+919376171443">+91 93761 71443</Link>
                    <Link href="tel:+918905970089">+91 89059 70089</Link>
                  </div>
                </div>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="email">
                    <Link href="mailto:gujaratrollballass@gmail.com">gujaratrollballass@gmail.com</Link>
                    <Link href="mailto:divyeshgoheldd@gmail.com">divyeshgoheldd@gmail.com</Link>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>A/4, Ganesh Kunj Society, Nr. Ambika Nagar, Odhav, Ahmedabad, Gujarat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="copy-txt">
                <span>Copyright 2024 <b>Roll Ball Association OF GUJARAT</b> | Managed By : <a href="https://gurusoftware.in" target='_blank' >Guru Software</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
