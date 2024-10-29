import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getSiteUrl } from '../utils/siteUrl';



const Blog = () => {
  const siteUrl = getSiteUrl(); 

  const ogImageUrl = `${siteUrl}/assets/img/blog-og.webp`;

  return (
    <Layout>
   
   <Head>
        <meta name="description" content="Explore the Gujarat Roll Ball Association blog for the latest articles, news, and insights on Roll Ball. Stay updated with industry trends, events, and expert opinions." />
        <meta name="keywords" content="Gujarat Roll Ball Blog, Roll Ball News, Roll Ball Insights, Gujarat Sports, Roll Ball Articles, Latest Updates, Roll Ball Events" />
        <meta name="author" content="Gujarat Roll Ball Association" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        <meta property="og:title" content="Gujarat Roll Ball Association Blog - Latest Articles, News & Insights" />
        <meta property="og:description" content="Read the latest blog posts from the Gujarat Roll Ball Association. Discover articles, updates, and insights about Roll Ball and our community efforts." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`${siteUrl}/Blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gujarat Roll Ball Association" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gujarat Roll Ball Association Blog - Latest Articles, News & Insights" />
        <meta name="twitter:description" content="Stay informed with the Gujarat Roll Ball Association blog. Read articles and updates about Roll Ball, industry trends, and community activities." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@GujaratRollBall" />
        <meta name="twitter:creator" content="@GujaratRollBall" />

        
        <title> Blog - Latest Articles, News & Insights | Gujarat Roll Ball Association</title>
      </Head>


      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-inner">
                  <h1>Blog</h1>
                  <span>
                    <Link  href="/">Home<i className="fas fa-angle-right"></i></Link>Blog
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-blog grid sec-mar">
        <div className="container">
          <div className="row g-4">
            {/* Existing Blog Post */}
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <Link  href="/roll_ball_strategies">
                    <img src="/assets/img/blog/Strategies.webp" style={{ height: '275px' }} alt="Roll Ball Strategies" />
                  </Link>
                </div>
                <div className="news-cnt">
                  <span>20 August, 2024</span>
                  <h3>
                    <Link  href="/roll_ball_strategies">Roll Ball Strategies: How to Master the Game</Link>
                  </h3>
                  <div className="view-btn">
                    <Link  href="/roll_ball_strategies">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* New Blog Post 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <Link  href="/choose_gear_for_roll_ball">
                    <img src="/assets/img/blog/Choose.webp" style={{ height: '275px' }} alt="Choosing Gear for Roll Ball" />
                  </Link>
                </div>
                <div className="news-cnt">
                  <span>25 August, 2024</span>
                  <h3>
                    <Link  href="/choose_gear_for_roll_ball">How to Choose the Right Gear for Roll Ball</Link>
                  </h3>
                  <div className="view-btn">
                    <Link  href="/choose_gear_for_roll_ball">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* New Blog Post 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <Link  href="/exploring_roll_ball_basics">
                    <img src="/assets/img/blog/Guide.webp" style={{ height: '275px' }} alt="Exploring Roll Ball Basics" />
                  </Link>
                </div>
                <div className="news-cnt">
                  <span>05 August, 2024</span>
                  <h3>
                    <Link  href="/exploring_roll_ball_basics">Exploring the Basics of Roll Ball: A Comprehensive Guide</Link>
                  </h3>
                  <div className="view-btn">
                    <Link  href="/exploring_roll_ball_basics">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* New Blog Post 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <Link  href="/roll_ball_rules_regulations">
                    <img src="/assets/img/blog/Rules.webp" style={{ height: '275px' }} alt="Roll Ball Rules and Regulations" />
                  </Link>
                </div>
                <div className="news-cnt">
                  <span>10 August, 2024</span>
                  <h3>
                    <Link  href="/roll_ball_rules_regulations">Roll Ball Rules and Regulations: What You Need to Know</Link>
                  </h3>
                  <div className="view-btn">
                    <Link  href="/roll_ball_rules_regulations">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* New Blog Post 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="single-post">
                <div className="post-thumbnail">
                  <Link  href="/training_tips_for_roll_ball">
                    <img src="/assets/img/blog/Training.webp" style={{ height: '275px' }} alt="Training Tips for Roll Ball" />
                  </Link>
                </div>
                <div className="news-cnt">
                  <span>15 August, 2024</span>
                  <h3>
                    <Link  href="/training_tips_for_roll_ball">Training Tips for Roll Ball Players: Improve Your Skills</Link>
                  </h3>
                  <div className="view-btn">
                    <Link  href="/training_tips_for_roll_ball">View Details</Link>
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

export default Blog;
