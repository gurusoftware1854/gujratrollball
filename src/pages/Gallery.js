import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; 
import Layout from '../components/Layout'; 
import { getSiteUrl } from '../utils/siteUrl';


const Gallery = () => {
    const siteUrl = getSiteUrl(); 
    const ogImageUrl = `${siteUrl}/assets/img/gallery-og.webp`;

  return (
    <Layout>
    <Head>
  {/* Meta Tags for SEO */}
  <meta name="description" content="Explore the stunning gallery of the Gujarat Roll Ball Association. Browse through high-quality images of events, tournaments, and community activities related to Roll Ball." />
  <meta name="keywords" content="Gujarat Roll Ball Gallery, Roll Ball Images, Roll Ball Events, Roll Ball Tournaments, Roll Ball Community, Gallery of Roll Ball Activities" />
  <meta name="author" content="Gujarat Roll Ball Association" />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />

  {/* Open Graph Meta Tags for Social Media */}
  <meta property="og:title" content="Explore Our Gallery - Gujarat Roll Ball Association" />
  <meta property="og:description" content="Browse through our gallery showcasing exciting moments from Roll Ball events, tournaments, and community activities. Experience the vibrant visuals of our sport." />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:url" content={`${siteUrl}/Gallery`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Gujarat Roll Ball Association" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Explore Our Gallery - Gujarat Roll Ball Association" />
  <meta name="twitter:description" content="Check out our gallery to view images from Roll Ball events, tournaments, and community activities. See the action and excitement captured in every shot." />
  <meta name="twitter:image" content={ogImageUrl} />
  <meta name="twitter:site" content="@GujaratRollBall" />
  <meta name="twitter:creator" content="@GujaratRollBall" />

  {/* Favicon */}
  <link rel="icon" href="/path/to/favicon.ico" />

  <title>Explore Our Gallery - Gujarat Roll Ball Association</title>
</Head>


      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-inner">
                  <h1>Gallery</h1>
                  <span>
                    <Link href="/">Home<i className="fas fa-angle-right"></i></Link>
                    Gallery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-area sec-mar">
    <div class="container"  >



        <div class="row g-2 gallery-grid">
            <div class="col-md-3 gallery-item management">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/1.webp">
                        <img src="assets/img/gallery/1.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item management">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/slider/bg1.jpg">
                        <img src="assets/img/slider/bg1.jpg" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item management">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/slider/bg5.jpg">
                        <img src="assets/img/slider/bg5.jpg" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item management">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/slider/ind3.webp">
                        <img src="assets/img/ind3.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/2.webp">
                        <img src="assets/img/gallery/2.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/3.webp">
                        <img src="assets/img/gallery/3.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/4.webp">
                        <img src="assets/img/gallery/4.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/11.webp">
                        <img src="assets/img/gallery/11.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/12.webp">
                        <img src="assets/img/gallery/12.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/13.webp">
                        <img src="assets/img/gallery/13.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/14.webp">
                        <img src="assets/img/gallery/14.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/15.webp">
                        <img src="assets/img/gallery/15.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/16.webp">
                        <img src="assets/img/gallery/16.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/17.webp">
                        <img src="assets/img/gallery/17.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/18.webp">
                        <img src="assets/img/gallery/18.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/19.webp">
                        <img src="assets/img/gallery/19.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/5.webp">
                        <img src="assets/img/gallery/5.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/6.webp">
                        <img src="assets/img/gallery/6.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/7.webp">
                        <img src="assets/img/gallery/7.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/8.webp">
                        <img src="assets/img/gallery/8.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/9.webp">
                        <img src="assets/img/gallery/9.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>
            <div class="col-md-3 gallery-item course">
                <div class="single-gallery">
                    <a data-lightbox="image1" href="assets/img/gallery/10.webp">
                        <img src="assets/img/gallery/10.webp" class="lazy myimg" alt />
                    </a>
                </div>
            </div>

        </div>
       
    </div>
</div>

    </Layout>
  );
};

export default Gallery;
