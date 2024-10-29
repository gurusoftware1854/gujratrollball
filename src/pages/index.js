import React from 'react'
import Head from 'next/head';
import Link from 'next/link';


import Layout from '../components/Layout'
import Script from 'next/script';
import Highlights from './Highlights';
import { getSiteUrl } from '../utils/siteUrl';
import Image from 'next/image';
import HeroSlider from './HeroSlider';



const index = () => {
  const siteUrl = getSiteUrl(); 

  const ogImageUrl = `${siteUrl}/assets/img/main-og.webp`; 

  return (
    <Layout>

<Head>
        {/* Meta Tags for SEO */}
        <meta
          name="description"
          content="Welcome to the Gujarat Roll Ball Association, promoting Roll Ball sport across Gujarat. Stay updated with news, tournaments, and resources for players, coaches, and fans."
        />
        <meta
          name="keywords"
          content="Gujarat Roll Ball Association, Roll Ball Gujarat, Roll Ball Tournaments, Gujarat Sports, Roll Ball Events, Roll Ball Training, Roll Ball Community, Roll Ball News"
        />
        <meta name="author" content="Gujarat Roll Ball Association" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Gujarat Roll Ball Association - Promoting Roll Ball in Gujarat" />
        <meta
          property="og:description"
          content="Join the Gujarat Roll Ball community. Explore resources, tournaments, and the latest Roll Ball updates from around Gujarat."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gujarat Roll Ball Association" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gujarat Roll Ball Association - Promoting Roll Ball in Gujarat" />
        <meta
          name="twitter:description"
          content="Discover Roll Ball tournaments, news, and resources with the Gujarat Roll Ball Association. Stay informed and get involved in the sport."
        />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@GujaratRollBall" />
        <meta name="twitter:creator" content="@GujaratRollBall" />

        {/* Favicon */}
        <link rel="icon" href="/path/to/favicon.ico" />

        <title>Gujarat Roll Ball Association - Home</title>
      </Head>
      

 <HeroSlider></HeroSlider>

      <div className="about-area two sec-mar">
      <div className="container">
        <div className="row gx-4">
          <div className="col-xl-6">
            <div className="about-left two">
              <img src="/assets/img/about.webp" alt="Gujarat Roll Ball Association" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-right two">
              <div className="title two">
                <span>About Us</span>
                <h2>Championing Roll Ball Excellence in Gujarat for Over 20 Years</h2>
              </div>
              <p>Welcome to the Gujarat Roll Ball Association, a beacon of excellence in the world of Roll Ball. With over two decades of experience, we have been at the forefront of promoting and nurturing talent in this thrilling sport. Our commitment to fostering a strong and vibrant community has led to the development of top-tier athletes and a deep love for the game across the region.</p>
              <div className="about-content-inner">
                <div className="inner-left">
                  <h3>Empowering Athletes and Building a Legacy</h3>
                  <p>At the Gujarat Roll Ball Association, we believe in the power of sports to transform lives. Our programs are designed to inspire, challenge, and equip players with the skills they need to excel on the court and beyond. Join us in our mission to continue growing the sport of Roll Ball, one champion at a time.</p>
                </div>
                <div className="inner-play">
                  <img src="/assets/img/about2.webp" alt="Gujarat Roll Ball Video" />
                  {/* Uncomment the following code if you want to include a video play button
                  <div className="play-btn">
                    <a className="popup-video" href="https://www.youtube.com/watch?v=0O2aH4XLbto">
                      <i className="fas fa-play"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="button--wrap button--wrap-two">
                <Link className="eg-btn btn--primary golf-btn mx-auto" href="/About_Us">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      


    <div className="course-layout sec-mar-top" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 or2">
              <div className="course-wrapper">
                <div className="title two">
                  <span>Roll Ball Events and Achievements</span>
                  <h2>Discover Our Champion-Making Journey</h2>
                </div>
                <p>
                  The Gujarat Roll Ball Association is proud to be at the forefront of developing and nurturing talent in the sport of Roll Ball. We have been organizing and participating in numerous championships, showcasing the skills and determination of our players.
                </p>

                <div className="play-ground">
                  <div className="man">
                    <h5>Selection Highlights</h5>
                    <ul>
                      <li>Selection of Potential Players for Mini National and East Zone Roll Ball Championship</li>
                      <li>7th Mini and Sub-Junior Inter District Roll Ball Championship Concludes in Ahmedabad</li>
                      <li>The 4th edition of the Super Mini and Junior Roll Ball Championship was concluded in Surat</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <span>Our Achievements</span> We are proud to have hosted and participated in several prestigious events, continually contributing to the growth of Roll Ball in Gujarat.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="right-top">
                <video
  src="/assets/img/slider/Roll-ball.mp4"
  style={{ width: '100%', height: '577px', objectFit: 'cover' }}
  controls 
  loop 
  muted 
  autoPlay 
>
  Your browser does not support the video tag.
</video>

                  <div className="shape">
                    <img src="/assets/img/shape.png" alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     <Highlights></Highlights>
     

     <div className="restaurant-area" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 or2">
              <div className="restaurant-left">
                <h2>Team Achievements</h2>
                <ul className="field-points">
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-14 boys won silver medal 2014</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-17 Boys won bronze medal 2015</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-11 Girls won bronze medal 2015</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U–11 Boys & Girls won bronze medal 2016</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-17 Boys & Girls won bronze medal 2016</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-17 Boys won the Silver medal in 2017</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-17 Girls won the Silver medal in 2017</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-11 Boys team won the National Championship in 2016 & 2018</li>
                  <li><i className="bi bi-check2-circle"></i> Runners up for Men’s Gujarat Roll Ball Team in Federation Cup 2018</li>
                  <li><i className="bi bi-check2-circle"></i> Runners up for Women’s Gujarat Roll Ball Team in Federation Cup 2018</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-14 boys won silver 2014</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-17 boys bronze 2015</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-17 boys won silver 2016</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-14 boys won gold</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-17 girls won silver</li>
                  <li><i className="bi bi-check2-circle"></i> SGFI Roll Ball Gujarat U-19 boys won bronze medal 2017</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-14 boys won silver medal 2022</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-11 girls won gold medal 2023</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-14 girls won gold medal 2023</li>
                  <li><i className="bi bi-check2-circle"></i> Gujarat U-14 boys won bronze medal 2023</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
                <div class="about-right">
                    <div class="right-top">
                        <img src="assets/img/ar.webp" alt="" />
                        <div class="shape">
                            <img src="assets/img/shape.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>

      <div class="restaurant-area" style={{ paddingTop: '120px' }}>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-xl-6 or1">
                <div class="restaurant-images">
                    <div class="img-1">
                        <img src="assets/img/in2.webp" alt="" />
                    </div>
                    <div class="img-2">
                        <img src="assets/img/in.webp" alt="" />
                    </div>
                    <div class="img-3">
                        <img src="assets/img/ind3.webp" alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6 or2">
                <div class="restaurant-left">
                    <h2>Individual Achievements</h2>
                    <ul class="field-points">
                        <li><i class="bi bi-check2-circle"></i> B.A. Kargil represented Team India for South Asian Roll Ball Championship 2017, where Team India lifted the cup as Winners.</li>
                        <li><i class="bi bi-check2-circle"></i> Gaurav Das represented India in the Junior International Tournament.</li>
                        <li><i class="bi bi-check2-circle"></i> Manisha Pradhan Boro represented Women’s Team India for the 3rd Asian Roll Ball Championship 2019, where Team India stood as Winners.</li>
                        <li><i class="bi bi-check2-circle"></i> Mr. Bhumidhar Barman was the Manager of Team India for the 3rd Asian Roll Ball Championship 2019.</li>
                        <li><i class="bi bi-check2-circle"></i> B.A. Kargil is part of the Indian Squad for the upcoming 5th World Cup being held in Chennai, India.</li>
                        <li><i class="bi bi-check2-circle"></i> Mr. Bhumidhar Barman is the Manager for Men’s Team representing India in the 5th World Cup 2019 at Chennai, India.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>



<div className="benifit-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-7">
              <div className="title white text-center">
                <span>Benefits</span>
                <h2>Core Elements of Roll Ball</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="single-benifit">
                <div className="icon">
                  <Image src="/assets/img/icons/benifit-icon-1.png" alt="Speed" width={100} height={100} />
                </div>
                <h4>Speed</h4>
                <p>Speed fuels the action, enabling players to seize scoring chances and outmaneuver opponents.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-benifit">
                <div className="icon">
                  <Image src="/assets/img/icons/benifit-icon-2.png" alt="Balance" width={100} height={100} />
                </div>
                <h4>Balance</h4>
                <p>Balance ensures stability and control, crucial for executing precise movements during play.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-benifit">
                <div className="icon">
                  <Image src="/assets/img/icons/benifit-icon-3.png" alt="Accuracy" width={100} height={100} />
                </div>
                <h4>Accuracy</h4>
                <p>Accuracy in passing and shooting determines the success of plays and contributes to effective gameplay.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-benifit">
                <div className="icon">
                  <Image src="/assets/img/icons/benifit-icon-4.png" alt="Teamwork" width={100} height={100} />
                </div>
                <h4>Teamwork</h4>
                <p>Teamwork fosters communication and trust, essential for synchronized team strategies and success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <span>Our Moments</span>
              <h2>Discover the Highlights of Our Journey</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <a><Image src="/assets/img/hg1.webp" alt="Moment 1" width={500} height={275} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <a><Image src="/assets/img/hg2.webp" alt="Moment 2" width={500} height={275} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <a><Image src="/assets/img/hg3.webp" alt="Moment 3" width={500} height={275} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="latest-blog sec-mar-top sec-pad-bottom" style={{ backgroundColor: '#093668', paddingTop: '120px' }}>
      <div className="container">
        <div className="row">
          <div className="title text-center">
            <span style={{ color: '#FFF' }}>Affiliations & Recognitions</span>
            <h2 style={{ color: 'white' }}>Celebrating Our Achievements and Partnerships</h2>
          </div>
        </div>
        <div className="row g-4" style={{textAlign : 'center' , justifyContent : 'center' , display : 'flex' }} >
        <div className="col-md-4 col-lg-2">
            <div className="single-post">
              <div className="post-thumbnail">
                <a>
                  <Image src="/assets/img/maha.png" alt="Recognition 1" width={300} height={200} style={{ borderRadius: '10px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="single-post">
              <div className="post-thumbnail">
                <a>
                  <Image src="/assets/img/3.webp" alt="Recognition 1" width={300} height={200} style={{ borderRadius: '10px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="single-post">
              <div className="post-thumbnail">
                <a>
                  <Image src="/assets/img/4.webp" alt="Recognition 2" width={300} height={200} style={{ borderRadius: '10px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="single-post">
              <div className="post-thumbnail">
                <a>
                  <Image src="/assets/img/1.webp" alt="Recognition 3" width={300} height={200} style={{ borderRadius: '10px' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="single-post">
              <div className="post-thumbnail">
                <a>
                  <Image src="/assets/img/3.webp" alt="Recognition 4" width={300} height={200} style={{ borderRadius: '10px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="latest-blog sec-mar-top sec-pad-bottom">
      <div className="container">
        <div className="row">
          <div className="title text-center">
            <span>Latest Blogs</span>
            <h2>Here is Our Latest Blogs</h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Popular Post Section */}

<div className="col-md-6 col-lg-4">
  <div className="popular-post">
    <h3>Top Blogs</h3>
    <div className="postes">
      <div className="post-list">
        <h4>
          <Link href="/exploring_roll_ball_basics">
            Exploring the Basics of Roll Ball: A Comprehensive Guide
          </Link>
        </h4>
        <span>05 August, 2024</span>
      </div>
      <div className="post-list">
        <h4>
          <Link href="/roll_ball_rules_regulations">
            Roll Ball Rules and Regulations: What You Need to Know
          </Link>
        </h4>
        <span>10 August, 2024</span>
      </div>
      <div className="post-list">
        <h4>
          <Link href="/training_tips_for_roll_ball">
            Training Tips for Roll Ball Players: Improve Your Skills
          </Link>
        </h4>
        <span>15 August, 2024</span>
      </div>
    </div>
    <div className="button--wrap">
      <Link href="/Blog" className="eg-btn btn--primary golf-btn mx-auto">
        View All Post <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  </div>
</div>


          {/* Blog Post 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="single-post">
              <div className="post-thumbnail">
                <Link href="/roll_ball_strategies">
                  <Image
                    src="/assets/img/blog/Strategies.webp"
                    alt="Roll Ball Strategies"
                    width={400}
                    height={275}
                    style={{ borderRadius: '10px' }}
                  />
                </Link>
              </div>
              <div className="news-cnt">
                <span>20 August, 2024</span>
                <h3>
                  <Link href="/roll_ball_strategies">Roll Ball Strategies: How to Master the Game</Link>
                </h3>
                <div className="view-btn">
                  <Link href="/roll_ball_strategies">View Details</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="single-post">
              <div className="post-thumbnail">
                <Link href="/choose_gear_for_roll_ball">
                  <Image
                    src="/assets/img/blog/Choose.webp"
                    alt="Choose Right Gear for Roll Ball"
                    width={400}
                    height={275}
                    style={{ borderRadius: '10px' }}
                  />
                </Link>
              </div>
              <div className="news-cnt">
                <span>25 August, 2024</span>
                <h3>
                  <Link href="/choose_gear_for_roll_ball">How to Choose the Right Gear for Roll Ball</Link>
                </h3>
                <div className="view-btn">
                  <Link href="/choose_gear_for_roll_ball">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />
    </Layout>
  );
};


export default index