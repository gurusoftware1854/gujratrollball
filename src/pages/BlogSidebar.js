import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="sidebar-widget">
        <h4>Top Blogs</h4>
        <div className="blog-post">
          <div className="post-thumb">
            <Link href="/roll_ball_strategies">
              <img src="/assets/img/blog/Strategies.webp" style={{ width: '125px', height: '80px' }} alt="Roll Ball Strategies" />
            </Link>
          </div>
          <div className="post-cnt">
            <h5>
              <Link href="/roll_ball_strategies">Roll Ball Strategies: How to Master the Game</Link>
            </h5>
            <span><i className="bi bi-calendar3"></i> 20 August, 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <div className="post-thumb">
            <Link href="/choose_gear_for_roll_ball">
              <img src="/assets/img/blog/Choose.webp" style={{ width: '125px', height: '80px' }} alt="Choose Gear for Roll Ball" />
            </Link>
          </div>
          <div className="post-cnt">
            <h5>
              <Link href="/choose_gear_for_roll_ball">How to Choose the Right Gear for Roll Ball</Link>
            </h5>
            <span><i className="bi bi-calendar3"></i> 25 August, 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <div className="post-thumb">
            <Link href="/exploring_roll_ball_basics">
              <img src="/assets/img/blog/Guide.webp" style={{ width: '170px', height: '80px' }} alt="Exploring Roll Ball Basics" />
            </Link>
          </div>
          <div className="post-cnt">
            <h5>
              <Link href="/exploring_roll_ball_basics">Exploring the Basics of Roll Ball: A Comprehensive Guide</Link>
            </h5>
            <span><i className="bi bi-calendar3"></i> 5 August, 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <div className="post-thumb">
            <Link href="/roll_ball_rules_regulations">
              <img src="/assets/img/blog/Rules.webp" style={{ width: '108px', height: '80px' }} alt="Roll Ball Rules and Regulations" />
            </Link>
          </div>
          <div className="post-cnt">
            <h5>
              <Link href="/roll_ball_rules_regulations">Roll Ball Rules and Regulations</Link>
            </h5>
            <span><i className="bi bi-calendar3"></i> 10 August, 2024</span>
          </div>
        </div>
        <div className="blog-post">
          <div className="post-thumb">
            <Link href="/training_tips_for_roll_ball">
              <img src="/assets/img/blog/Training.webp" style={{ width: '177px', height: '80px' }} alt="Training Tips for Roll Ball" />
            </Link>
          </div>
          <div className="post-cnt">
            <h5>
              <Link href="/training_tips_for_roll_ball">Training Tips for Roll Ball Players: Improve Your Skills</Link>
            </h5>
            <span><i className="bi bi-calendar3"></i> 15 August, 2024</span>
          </div>
        </div>
      </div>

      <div className="sidebar-widget">
        <div className="social-follow">
          <h4>Follow On</h4>
          <ul className="social-share">
            <li><Link  href="https://www.facebook.com/rollball.gujarat/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            {/* <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li> */}
            <li><Link href="https://www.instagram.com/roll_ball_gujarat_india/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
            {/* <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li> */}
          </ul>
        </div>
      </div>

      <div className="widget-banner">
        <img src="/assets/img/widget-banner.webp" alt="Widget Banner" />
        <div className="banner-inner">
          <h2>Any Question Call Now.</h2>
          <Link href="tel:+919376171443" style={{paddingBottom: '35px'}} >+91 93761 71443</Link>
<Link href="tel:+918905970089">+91 89059 70089</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
