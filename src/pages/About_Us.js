import React from 'react';
import Link from 'next/link';
import { getSiteUrl } from '../utils/siteUrl';



import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head';


const About_Us = () => {
  const siteUrl = getSiteUrl(); 

  const ogImageUrl = `${siteUrl}/assets/img/about-og.webp`;

  return (
    
    <Layout>
  <Head>
  {/* Meta Tags for SEO */}
  <meta name="description" content="The Gujarat Roll Ball Association is dedicated to promoting and developing the sport of Roll Ball throughout Gujarat. Stay informed about upcoming tournaments, training sessions, and community events. Explore resources, rules, and guidelines for Roll Ball enthusiasts and athletes in Gujarat." />
  <meta name="keywords" content="Gujarat Roll Ball Association, Roll Ball Gujarat, Roll Ball Tournaments, Gujarat Sports, Roll Ball Training, Roll Ball Events, Roll Ball Rules, Roll Ball Community, Roll Ball Resources, Roll Ball Guidelines" />
  <meta name="author" content="Gujarat Roll Ball Association" />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />
  
  {/* Open Graph Meta Tags for Social Media */}
  <meta property="og:title" content="Gujarat Roll Ball Association - Promoting Excellence in Roll Ball Across the State" />
  <meta property="og:description" content="Join the Gujarat Roll Ball community and participate in exciting tournaments, skill development workshops, and community-building events. Discover the latest news, rules, and updates about Roll Ball in Gujarat." />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Gujarat Roll Ball Association" />
  
  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Gujarat Roll Ball Association - Promoting Excellence in Roll Ball Across the State" />
  <meta name="twitter:description" content="Explore the Gujarat Roll Ball Association's website for comprehensive resources, news, and updates on Roll Ball activities across Gujarat. Join our community today!" />
  <meta name="twitter:image" content={ogImageUrl} />
  <meta name="twitter:site" content="@GujaratRollBall" />
  <meta name="twitter:creator" content="@GujaratRollBall" />

  
  <title>About Gujarat Roll Ball Association - Our Mission, Vision & Team</title>
</Head>

      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-inner">
                  <h1>About Us</h1>
                  <span>
                    <Link href="/">Home<i className="fas fa-angle-right"></i></Link>About Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title">
                  <span>About Us</span>
                  <h2>Welcome to Gujarat Roll Ball Association</h2>
                </div>
                <div className="special-message">
                  <div className="lqt">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>
                    Our mission is to promote and support the growth of Roll Ball in Gujarat, nurturing talent and fostering sportsmanship in all our players.
                  </p>
                  <div className="rqt">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <h6>Gujarat Roll Ball Association</h6>
                </div>
                <p>
                  The Gujarat Roll Ball Association is dedicated to developing the sport of Roll Ball across the state. We provide training, organize competitions, and create opportunities for players of all ages to excel. Join us in our journey to take Roll Ball to new heights!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="right-top">
                  <Image
                    src="/assets/img/about.webp"
                    alt="About Us"
                    width={600}
                    height={400}
                  />
                  <div className="shape">
                    <Image
                      src="/assets/img/shape.png"
                      alt="Shape"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                {/* <div className="right-video-play">
                  <Image
                    src="/assets/img/about2.webp"
                    alt="About Us Video"
                    width={600}
                    height={400}
                  />
                  <div className="right-play-inner">
                    <a className="popup-video" href="https://www.youtube.com/watch?v=0O2aH4XLbto">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="club-history sec-mar-bottom">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="title text-center">
                    <span>Association History</span>
                    <h2>The Journey of Gujarat Roll Ball Association</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="history-timeline">
                    <div class="single-history">
                        <span>2018</span>
                        <div class="hisoty-inner">
                            <div class="circl-wave"></div>
                            <h4>Foundation of the Association</h4>
                            <p>The Gujarat Roll Ball Association was established with a mission to promote the sport of Roll Ball across the state. From the beginning, we aimed to nurture talent and create a strong foundation for the sport.</p>
                        </div>
                    </div>
                    <div class="single-history">
                        <span>2019</span>
                        <div class="hisoty-inner">
                            <div class="circl-wave"></div>
                            <h4>First State-Level Tournament</h4>
                            <p>In 2019, we organized our first state-level Roll Ball tournament, bringing together teams from across Gujarat to compete and showcase their skills. This event marked a significant milestone in our journey.</p>
                        </div>
                    </div>
                    <div class="single-history">
                        <span>2020</span>
                        <div class="hisoty-inner">
                            <div class="circl-wave"></div>
                            <h4>Training Academies Established</h4>
                            <p>Recognizing the need for structured training, we established several Roll Ball academies across Gujarat in 2020. These academies provide professional coaching and resources to aspiring players.</p>
                        </div>
                    </div>
                    <div class="single-history">
                        <span>2021</span>
                        <div class="hisoty-inner">
                            <div class="circl-wave"></div>
                            <h4>National Recognition</h4>
                            <p>Our efforts were recognized at the national level in 2021 when Gujarat Roll Ball teams performed exceptionally well in various national championships, earning accolades and setting new standards for the sport.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      <div className="sec-mar-top sec-pad-bottom">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <span>The Rise of Roll Ball</span>
              <h2>A New Global Sport Capturing Hearts and Minds</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-12">
              <div className="popular-post">
                <h3>Official Statement</h3>
                <div className="postes">
                  <div className="post-list">
                    <p>
                      In the words of the International governing body of the game, the International Roll Ball Federation (IRBF):
                    </p>
                    <blockquote>
                      “It is certainly not an easy task to introduce a NEW GAME into the main-flow of the sports world. What encourages us to continue with our efforts to introduce, popularize, develop, refine, and organize the new game of ROLL BALL, is the thrill and the joy, and the involvement and the fierce competitive spirit that we saw on the faces of the children who played the trial matches and the inaugural matches.
                      <br /><br />
                      ROLL BALL, a fast-growing sport of the century, has now spread its wings throughout the world. It has received attention from various people in the sports fraternity and applause from the public. Roll Ball has now become the heartthrob of all the youth.”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About_Us;
