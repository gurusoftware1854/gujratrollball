import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { getSiteUrl } from '../utils/siteUrl';
import Layout from "../components/Layout";
import BlogSidebar from "./BlogSidebar";

const roll_ball_rules_regulations = () => {
  const siteUrl = getSiteUrl(); 

  const ogImageUrl = `${siteUrl}/assets/img/blog/Rules.webp`;

  return (
    <Layout>

<Head>
  {/* Meta Tags for SEO */}
  <meta name="description" content="Get detailed insights into the rules and regulations of Roll Ball. Understand the official guidelines, game rules, and standard practices to play Roll Ball effectively." />
  <meta name="keywords" content="Roll Ball Rules, Roll Ball Regulations, Roll Ball Guidelines, Official Roll Ball Rules, Roll Ball Standards, Play Roll Ball, Roll Ball Game Rules" />
  <meta name="author" content="Gujarat Roll Ball Association" />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />

  {/* Open Graph Meta Tags for Social Media */}
  <meta property="og:title" content="Roll Ball Rules and Regulations: A Complete Guide" />
  <meta property="og:description" content="Dive into the comprehensive guide on Roll Ball rules and regulations. Learn about official guidelines, game rules, and how to follow standard practices in Roll Ball." />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:url" content={`${siteUrl}/roll_ball_rules_regulations`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Gujarat Roll Ball Association" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Roll Ball Rules and Regulations: A Complete Guide" />
  <meta name="twitter:description" content="Explore the rules and regulations of Roll Ball with our detailed guide. Understand the official game rules and regulations to play and enjoy Roll Ball." />
  <meta name="twitter:image" content={ogImageUrl} />
  <meta name="twitter:site" content="@GujaratRollBall" />
  <meta name="twitter:creator" content="@GujaratRollBall" />


  <title>Roll Ball Rules and Regulations: A Complete Guide</title>
</Head>

     
      <div>
        {/* Breadcrumb Section */}
        <div className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-inner">
                    <h1>
                      Roll Ball Rules and Regulations: What You Need to Know
                    </h1>
                    <span>
                      <Link href="/">
                        Home<i className="fas fa-angle-right"></i>
                      </Link>
                      <Link href="/Blog" style={{color: 'white'}} >Blogs<i className="fas fa-angle-right"></i></Link>

                      Roll Ball Rules and Regulations: What You Need to Know
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="latest-blog sec-mar">
          <div className="container">
            <div className="row">
              {/* Blog Content */}
              <div className="col-lg-8">
                <div className="blog-details">
                  <div className="thumbnail-preview">
                    <Image
                      src="/assets/img/blog/Rules.webp"
                      alt="Roll Ball Rules"
                      width={800}
                      height={400}
                    />
                  </div>
                  <div className="post-info">
                    <div className="date">
                      <span>
                        <i className="bi bi-calendar3"></i> 10 August, 2024
                      </span>
                    </div>
                  </div>

                  <h3>Essential Roll Ball Rules and Regulations for Players</h3>
                  <p>
                    Understanding the rules and regulations of Roll Ball is
                    crucial for both new and experienced players. This guide
                    provides an overview of the essential rules you need to know
                    to play effectively and fairly.
                  </p>

                  <p>
                    <strong>1. Game Duration:</strong> A standard Roll Ball
                    match consists of two halves, each lasting 15 minutes, with
                    a short break in between. Ensure you are aware of the time
                    regulations to manage your game strategy effectively.
                  </p>

                  <p>
                    <strong>2. Scoring System:</strong> Points are scored by
                    successfully getting the ball into the opposing team's goal.
                    Each goal counts as one point. The team with the most points
                    at the end of the match wins.
                  </p>

                  <p>
                    <strong>3. Fouls and Penalties:</strong> Common fouls
                    include physical contact, tripping, and obstruction.
                    Penalties for fouls may include free shots or temporary
                    exclusion from the game. Familiarize yourself with the
                    specific rules of your league or tournament.
                  </p>

                  <p>
                    <strong>4. Player Conduct:</strong> Players must maintain
                    sportsmanship and respect towards referees, opponents, and
                    teammates. Unsportsmanlike behavior, such as arguing with
                    officials or excessive aggression, can lead to penalties or
                    ejection from the game.
                  </p>

                  <div className="quate-title">
                    <h5>Key Takeaways</h5>
                  </div>

                  <div className="quate">
                    <div className="qut-left">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                      “Knowing and adhering to Roll Ball rules is fundamental to
                      enjoying the game and ensuring fair play. Stay informed
                      about the regulations and always play with integrity.”
                    </p>
                    <div className="qut-right">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>

                  <div className="blog-gallery">
                    <Image
                      src="/assets/img/blog/Rules1.webp"
                      alt="Roll Ball Regulation"
                      width={400}
                      height={400}
                      
                    />
                    <Image
                      src="/assets/img/blog/Rules2.webp"
                      alt="Roll Ball Match"
                      width={400}
                      height={400}
                    />
                  </div>

                  <p>
                    By following these rules and regulations, you can contribute
                    to a well-regulated and enjoyable Roll Ball experience.
                    Whether you are a player, coach, or fan, understanding the
                    rules helps in appreciating the game and participating more
                    effectively.
                  </p>
                </div>
              </div>

              {/* Blog Sidebar */}
              <div className="col-lg-4">
<BlogSidebar></BlogSidebar>              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default roll_ball_rules_regulations;
