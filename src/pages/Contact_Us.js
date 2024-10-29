import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { getSiteUrl } from '../utils/siteUrl';



const Contact_Us = () => {
  const siteUrl = getSiteUrl(); 

  const ogImageUrl = `${siteUrl}/assets/img/contact-og.webp`;


  const containerStyles = {
    padding: '20px',
  };

  const contactFormStyles = {
    maxWidth: '100%',
    marginTop: '20px',
  };

  return (
    <Layout>
 <Head>
        <meta name="description" content="Get in touch with the Gujarat Roll Ball Association for inquiries, support, and feedback. We're here to assist with all Roll Ball-related questions and issues." />
        <meta name="keywords" content="Contact Gujarat Roll Ball Association, Roll Ball Gujarat Contact, Gujarat Sports Contact, Roll Ball Support, Roll Ball Inquiries" />
        <meta name="author" content="Gujarat Roll Ball Association" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        <meta property="og:title" content="Contact Gujarat Roll Ball Association - Get Support and Inquiries" />
        <meta property="og:description" content="Reach out to the Gujarat Roll Ball Association for inquiries, support, and feedback related to Roll Ball activities and events." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`${siteUrl}/Contact_Us`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gujarat Roll Ball Association" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gujarat Roll Ball Association - Get Support and Inquiries" />
        <meta name="twitter:description" content="Get in touch with the Gujarat Roll Ball Association for support and inquiries about Roll Ball activities in Gujarat. We are here to help." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@GujaratRollBall" />
        <meta name="twitter:creator" content="@GujaratRollBall" />

     
        
        <title>Contact Gujarat Roll Ball Association - Get Support and Inquiries</title>
      </Head>

      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-inner">
                  <h1>Contact Us</h1>
                  <span>
                    <Link href="/">Home<i className="fas fa-angle-right"></i></Link>Contact Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area sec-mar">
        <div className="container" style={containerStyles}>
          <div className="row g-4">
            <div className="col-md-5 col-xl-5">
              <div className="office-information">
                <h2>Talk To Our Best Consultant.</h2>
                <div className="single-information">
                  <div className="bg-shape">
                    <img src="/assets/img/info-shape.png" alt="Background Shape" />
                  </div>
                  <div className="icon">
                    <i><img src="/assets/img/icons/location.png" style={{ width: '44px' }} alt="Location Icon" /></i>
                  </div>
                  <div className="info-cnt">
                    <h6>Location</h6>
                    <p>A/4, Ganesh Kunj Society, Nr. Ambika Nagar, Odhav, Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <div className="single-information">
                  <div className="bg-shape">
                    <img src="/assets/img/info-shape.png" alt="Background Shape" />
                  </div>
                  <div className="icon">
                    <i><img src="/assets/img/icons/mobile.png" style={{ width: '44px' }} alt="Mobile Icon" /></i>
                  </div>
                  <div className="info-cnt">
                    <h6>Phone</h6>
                    <p>Dharmesh Parmar (President, R.B.A.G): <a href="tel:+919376171443">+91 93761 71443</a></p>
                    <p>Divyesh Gohel (General Secretary): <a href="tel:+918905970089">+91 89059 70089</a></p>
                  </div>
                </div>
                <div className="single-information">
                  <div className="bg-shape">
                    <img src="/assets/img/info-shape.png" alt="Background Shape" />
                  </div>
                  <div className="icon">
                    <i><img src="/assets/img/icons/envelope.png" style={{ width: '44px' }} alt="Envelope Icon" /></i>
                  </div>
                  <div className="info-cnt">
                    <h6>Email</h6>
                    <a href="mailto:gujaratrollballass@gmail.com">gujaratrollballass@gmail.com</a><br />
                    <a href="mailto:divyeshgoheldd@gmail.com">divyeshgoheldd@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-xl-7">
              <div className="contact-form" style={contactFormStyles}>
                <h3>Write A Message</h3>
                <form action="#" method="post">
                  <input type="text" name="name" placeholder="Your Full Name" />
                  <input type="email" name="email" placeholder="Your Email" />
                  <input type="text" name="phone" placeholder="Your Phone" />
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea name="message" cols="30" rows="10" placeholder="Write Message"></textarea>
                  <div className="button--wrap">
                    <button type="submit" className="eg-btn btn--primary golf-btn mx-auto">
                      Submit Now <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map">
        <div className="container-fluid g-0">
          <div className="map">
            <div className="row g-0">
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58750.56259844622!2d72.60417307149362!3d23.02707056107021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b29cc12b1f%3A0x5f0cd36300152abe!2sROLL%20BALL%20ASSOCIATION%20OF%20GUJARAT!5e0!3m2!1sen!2sin!4v1724822761355!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact_Us;
