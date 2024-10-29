import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo.webp" />
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/bootstrap-icons.css" />
        <link href="assets/css/all.min.css" rel="stylesheet" />
        <link href="assets/css/fontawesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/style%EF%B9%96v=1.0.1.css" />
        <link rel="stylesheet" href="assets/css/lightbox.min.css" />
        <title>Gujarat Roll Ball Association - Promoting Excellence in Roll Ball Across the State</title>

  
      </Head>
      <Component {...pageProps} />
      <script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="assets/js/jquery-3.6.0.min.js"></script>

<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/swiper-bundle.min.js"></script>

{/* <script src="assets/js/jquery.lazy.js"></script> */}
{/* <script src="assets/js/jquery.nice-select.min.js"></script> */}

<script src="assets/js/anime.min.js"></script>

<script src="assets/js/waypoints.min.js"></script>

<script src="assets/js/jquery.counterup.min.js"></script>

{/* <script src="assets/js/lightbox.min.js"></script> */}
<script src="assets/js/lightbox-plus-jquery.min.js"></script>

<script src="assets/js/jquery.magnific-popup.min.js"></script>

<script src="assets/js/isotope.pkgd.min.js"></script>

<script src="assets/js/masonry.pkgd.min.js"></script>

{/* <script src="assets/js/custom.js"></script> */}
    </Fragment>
  );
}

export default MyApp;
