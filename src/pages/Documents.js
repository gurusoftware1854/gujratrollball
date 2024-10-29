// pages/documents.js

import styles from "../styles/Documents.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { getSiteUrl } from "../utils/siteUrl";
const Documents = () => {
  const siteUrl = getSiteUrl();

  const ogImageUrl = `${siteUrl}/assets/img/doc-og.webp`;

  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Access essential documents related to the Gujarat Roll Ball Association. Find reports, guidelines, and other important resources for Roll Ball enthusiasts and participants."
        />
        <meta
          name="keywords"
          content="Gujarat Roll Ball Documents, Roll Ball Guidelines, Roll Ball Reports, Important Documents, Roll Ball Resources"
        />
        <meta name="author" content="Gujarat Roll Ball Association" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        <meta
          property="og:title"
          content="Access Essential Documents and Resources from Gujarat Roll Ball Association"
        />
        <meta
          property="og:description"
          content="Explore the document repository of the Gujarat Roll Ball Association. Access important reports, guidelines, and resources for Roll Ball enthusiasts."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`${siteUrl}/Documents`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gujarat Roll Ball Association" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Access Essential Documents and Resources from Gujarat Roll Ball Association"
        />
        <meta
          name="twitter:description"
          content="Find important documents, reports, and guidelines related to Roll Ball at the Gujarat Roll Ball Association. Stay informed with our comprehensive resources."
        />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@GujaratRollBall" />
        <meta name="twitter:creator" content="@GujaratRollBall" />

        <title>
          Access Essential Documents and Resources from Gujarat Roll Ball
          Association
        </title>
      </Head>

      <div class="breadcrumb">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-wrapper">
                <div class="breadcrumb-inner">
                  <h1>Documents</h1>
                  <span>
                    <Link href="/">
                      Home<i class="fas fa-angle-right"></i>
                    </Link>
                    Documents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.galleryArea}>
        <div className="container">
          <div class="row">
            <div class="title text-center">
              <span>Documents</span>
              <h2>Important Documents and Resources</h2>
            </div>
          </div>

          <div className={styles.tableWrapper} >
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Title</th>
                  <th>Information</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Amended Rule & Regulation of RBFI</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>RBFI New Amended Memorandum of Association</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Name of the State Association</td>
                  <td>Gujarat Roll Ball Association</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Address</td>
                  <td>
                    H.No: 36, Anupam Path, Geetanagar, PO Bamunimaidan,
                    Guwahati, 781021
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Contact</td>
                  <td>
                    9101534238
                    <br />
                    assamrollballassociation@gmail.com
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Registration Certificate</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Memorandum of Association and Rule & Regulation</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Recognition / Affiliation of National body</td>
                  <td>Roll Ball Federation of India</td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Recognition / Affiliation of State Government. Sports
                    Authority of Assam
                  </td>
                  <td>Sports Authority of Assam</td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    Recognition / Affiliation of State Olympic Association
                  </td>
                  <td>NIL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>PAN Card</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr >
                  <td>12</td>
                  <td>Bank Details</td>
                  <td>
                    Account Number: 786xxxxxxxx415
                    <br />
                    Bank Name: Bank of Baroda
                    <br />
                    RTGS / NEFT IFSC Code: BARB0VJRGBR
                    <br />
                    Branch: R G B Road Branch, Guwahati - 781021
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Date of last election held along with the Report</td>
                  <td>NIL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Name & Contact Details of Office Bearers</td>
                  <td>
                    <table>
                      <thead>
                        <tr>
                          <th>Position</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Mob No</th>
                          <th>Mail id</th>
                          <th>Tenure till</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>President</td>
                          <td>Mifatauddin Ahmed</td>
                          <td>Zoo Road, Geetanagar, Geetanagar</td>
                          <td>9435115818</td>
                          <td>sales.jdassam@gmail.com</td>
                          <td>4 years</td>
                        </tr>
                        <tr>
                          <td>Secretary</td>
                          <td>Bhumidhar Barman</td>
                          <td>Zoo Road, Geetanagar, Geetanagar</td>
                          <td>9101534238</td>
                          <td>bhumidhar1972@gmail.com</td>
                          <td>4 years</td>
                        </tr>
                        <tr>
                          <td>Treasurer</td>
                          <td>Suman Deka</td>
                          <td>Zoo Road, Geetanagar, Geetanagar</td>
                          <td>6001568543</td>
                          <td>sd.sumandeka@gmail.com</td>
                          <td>4 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    Name & Contact Details of State Association Committee (Copy
                    of letter to be posted)
                  </td>
                  <td>Bhumidhar Barman, Mobile No-9101534238</td>
                  <td></td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    Any court case, against any Committee Members, Players, or
                    Officials
                  </td>
                  <td>No</td>
                  <td></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Any Government employee in the association</td>
                  <td>No</td>
                  <td></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Any Committee Member above 70 years</td>
                  <td>No</td>
                  <td></td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>International Players List</td>
                  <td>B.A. Kargil, Alisha Farhan, Manisha Boro</td>
                  <td></td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Officials List with Address Email id & Mobile no.</td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>
                    Calendar for State & Division Championship to be held in
                    2024 along with venue.
                  </td>
                  <td>
                    4th Super Mini & Junior Roll Ball Inter-District
                    <br />
                    7th Mini & Sub-Junior Roll Ball Inter-District
                    <br />
                    3rd Senior Inter-District Roll Ball Tournament
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>
                    Annual Audited Accounts for last 3 financial years along
                    balance sheet (As audited by C.A. in CAG’s panel) Note:
                    Annual report for preceding year to be uploaded by 1st
                    October of the current year. (Copy of letter to be posted)
                  </td>
                  <td></td>
                  <td>
                    <a href="">
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                      PDF
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>23</td>
                  <td>
                    Name and contact details of the firm which audited accounts.
                  </td>
                  <td>Ankit Agarwal</td>
                  <td></td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>
                    Affiliation criteria of District /Clubs units along with
                    details of voting rights of each unit.
                  </td>
                  <td>Seven Members Executive Committee</td>
                  <td></td>
                </tr>

                <tr>
                  <td>25</td>
                  <td>
                    Name of the affiliated / Recognized District units with
                    their Contact Details
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>
                    Name and Contact details of President & Secretary of
                    affiliated/recognized District units.
                  </td>
                  <td>
                    Nalbari - Jogesh Kalita (President), Champak Baishya (GS)
                    <br />
                    Guwahati - Deepak Nath (President), Bhumidhar Barman (GS)
                    <br />
                    Dibrugarh - Kishore Das (President), Dwjish Sharma (GS)
                    <br />
                    Kamrup(R) - Triken Medhi (President), Swapan Paul (GS)
                    <br />
                    Kamrup(M) - Priyatanu Barua (President), Suman Deka (GS)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>
                    Details of State Championships conducted during the last
                    five years
                  </td>
                  <td>
                    The A.R.B.A organizes multiple District-level events
                    annually.
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Details in respect of national events held in State</td>
                  <td>All total 4 National organized and hosted</td>
                  <td></td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>
                    Details of International Events conducted during the last
                    five years
                  </td>
                  <td>nil</td>
                  <td></td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>
                    Details of coaching camps organized including venue, date
                    and list of participants.
                  </td>
                  <td>Kamrup R, Nalbari, Dibrugarh, Goalpara, Guwahati</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
</div>
          
          
          
<div className={styles.tableWrapper} >
<br></br>
            <div>
              <h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
                (U 11, Boys Group Competition / Selection Trial Information)
              </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat</p>
             </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>N.</th>
                  <th>Participating Teams</th>
                  <th>Names</th>
                  <th>No. of Players</th>
                  <th>Name of Officials</th>
                  <th>1st Place Team</th>
                  <th>2nd Place Team</th>
                  <th>3rd Place Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AHMEDABAD CITY</td>
                  <td>ANAND KAPADIYA</td>
                  <td>10</td>
                  <td></td>
                  <td>1st Place Team</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>AHMEDABAD RURAL</td>
                  <td>PRAVIN GAMARA</td>
                  <td>12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>GANDHINAGAR CITY</td>
                  <td>BHARGAV AYAR</td>
                  <td>12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>3rd Place Teams</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>GANDHINAGAR RURAL</td>
                  <td>DEEP RAVAL</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>SURAT CITY</td>
                  <td>VISHAL SHARMA</td>
                  <td>12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>SURAT RURAL</td>
                  <td>KETAN TREVEDI</td>
                  <td>12</td>
                  <td></td>
                  <td>2nd Place Team</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>VADODARA CITY</td>
                  <td>ARJUN MAKAVANA</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>VADODARA RURAL</td>
                  <td>ARPAN JOSHI</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>KUTCH</td>
                  <td>ANKUR DAVADA</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>MAHESANA</td>
                  <td>GAURANAG PAREKH</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>JUNAGADH</td>
                  <td>VAJUBHAI BARAD</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>RAJKOT CITY</td>
                  <td>PUSHPABEN RATHOD</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
</div>

<div className={styles.tableWrapper} >

<br></br>
            <h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
            (U 11, Girls Group Competition / Selection Trial Information)                                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat</p>

              <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>No. of Players</th>
      <th>Names</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>10</td>
      <td>ANAND KAPADIYA</td>
      <td></td>
      <td>1st Place Team</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>12</td>
      <td>PRAVIN GAMARA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>12</td>
      <td>BHARGAV AYAR</td>
      <td></td>
      <td></td>
      <td>2nd Place Team</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>08</td>
      <td>DEEP RAVAL</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place Teams</td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>12</td>
      <td>VISHAL SHARMA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>12</td>
      <td>KETAN TREVEDI</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>08</td>
      <td>ARJUN MAKAVANA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>08</td>
      <td>ARPAN JOSHI</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>08</td>
      <td>ANKUR DAVADA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>08</td>
      <td>VAJUBHAI BARAD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>08</td>
      <td>PUSHPABEN RATHOD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

</div>

<div className={styles.tableWrapper} >

<br></br>
     
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(U 14, Boys Group Competition / Selection Trial Information)                                                                                                  
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat</p>
              <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>No. of Players</th>
      <th>Names</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>10</td>
      <td>ANAND KAPADIYA</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>12</td>
      <td>PRAVIN GAMARA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>12</td>
      <td>BHARGAV AYAR</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>08</td>
      <td>DEEP RAVAL</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>12</td>
      <td>VISHAL SHARMA</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>12</td>
      <td>KETAN TREVEDI</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>08</td>
      <td>ARJUN MAKAVANA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>08</td>
      <td>ARPAN JOSHI</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>08</td>
      <td>ANKUR DAVADA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>08</td>
      <td>VAJUBHAI BARAD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>08</td>
      <td>PUSHPABEN RATHOD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


</div>
<div className={styles.tableWrapper} >

<br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(U 14, Girls Group Competition / Selection Trial Information)              
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujara</p>
              <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>No. of Players</th>
      <th>Names</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>10</td>
      <td>ANAND KAPADIYA</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>12</td>
      <td>PRAVIN GAMARA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>12</td>
      <td>BHARGAV AYAR</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>08</td>
      <td>DEEP RAVAL</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>12</td>
      <td>VISHAL SHARMA</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>12</td>
      <td>KETAN TREVEDI</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>08</td>
      <td>ARJUN MAKAVANA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>08</td>
      <td>ARPAN JOSHI</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>08</td>
      <td>ANKUR DAVADA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>08</td>
      <td>VAJUBHAI BARAD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>08</td>
      <td>PUSHPABEN RATHOD</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


</div>
<div className={styles.tableWrapper} >


<br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(U 17, Boys Group Competition / Selection Trial Information)                                                                                                  
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat</p>

              <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>Names</th>
      <th>No. of Players</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>ANAND KAPADIYA</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>PRAVIN GAMARA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>BHARGAV AYAR</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>DEEP RAVAL</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>VISHAL SHARMA</td>
      <td>12</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>KETAN TREVEDI</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>ARJUN MAKAVANA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>ARPAN JOSHI</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>ANKUR DAVADA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>VAJUBHAI BARAD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>PUSHPABEN RATHOD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
              </table>

</div><div className={styles.tableWrapper} >


              <br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(U 17, Girls Group Competition / Selection Trial Information)                                                                                                  
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
Name of the Association –Roll Ball Association of Gujarat
</p>
<table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>Names</th>
      <th>No. of Players</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>ANAND KAPADIYA</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>PRAVIN GAMARA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>BHARGAV AYAR</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>DEEP RAVAL</td>
      <td>08</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>VISHAL SHARMA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>KETAN TREVEDI</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>ARJUN MAKAVANA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>ARPAN JOSHI</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>ANKUR DAVADA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>VAJUBHAI BARAD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>PUSHPABEN RATHOD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

</div>
<div className={styles.tableWrapper} >

              <br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(Senior Boys Group Competition / Selection Trial Information)                                                                                                  
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>

<table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>Names</th>
      <th>No. of Players</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>ANAND KAPADIYA</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>PRAVIN GAMARA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>BHARGAV AYAR</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>DEEP RAVAL</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>VISHAL SHARMA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>KETAN TREVEDI</td>
      <td>12</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>ARJUN MAKAVANA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>ARPAN JOSHI</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>ANKUR DAVADA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>VAJUBHAI BARAD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>PUSHPABEN RATHOD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

</div>
<div className={styles.tableWrapper} >


<br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(Senior Girls Group Competition / Selection Trial Information)                                                                                                  
                                                                                            
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>

<table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>Names</th>
      <th>No. of Players</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>ANAND KAPADIYA</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>PRAVIN GAMARA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>BHARGAV AYAR</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td>3rd Place</td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>DEEP RAVAL</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>VISHAL SHARMA</td>
      <td>12</td>
      <td></td>
      <td>1st Place</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>KETAN TREVEDI</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td>2nd Place</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>ARJUN MAKAVANA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>ARPAN JOSHI</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>ANKUR DAVADA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>VAJUBHAI BARAD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>PUSHPABEN RATHOD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

</div>

<div className={styles.tableWrapper} >

<br></br>
<h4>State Competition Information, 2018-19 <p  style={{color: 'rgb(14 66 119)', marginBottom : '0px' }} >
(Any other state levelCompetition)
                                                                                            
                                                                                 
                                                                                  
            </p></h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>


<table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      <th>Participating Teams</th>
      <th>Names</th>
      <th>No. of Players</th>
      <th>Officials</th>
      <th>1st Place Team</th>
      <th>2nd Place Team</th>
      <th>3rd Place Teams</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>AHMEDABAD CITY</td>
      <td>ANAND KAPADIYA</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>AHMEDABAD RURAL</td>
      <td>PRAVIN GAMARA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>GANDHINAGAR CITY</td>
      <td>BHARGAV AYAR</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>GANDHINAGAR RURAL</td>
      <td>DEEP RAVAL</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>SURAT CITY</td>
      <td>VISHAL SHARMA</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>SURAT RURAL</td>
      <td>KETAN TREVEDI</td>
      <td>12</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>VADODARA CITY</td>
      <td>ARJUN MAKAVANA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>VADODARA RURAL</td>
      <td>ARPAN JOSHI</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td>KUTCH</td>
      <td>ANKUR DAVADA</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td>JUNAGADH</td>
      <td>VAJUBHAI BARAD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>11</td>
      <td>RAJKOT CITY</td>
      <td>PUSHPABEN RATHOD</td>
      <td>08</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
<div className={styles.tableWrapper} >

<br></br>


<h4>Meetings Information, 2018-19</h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>


<table className={styles.table}>
  <thead>
    <tr>
      <th>Meeting Place</th>
      <th>Date</th>
      <th>Agenda of Meeting</th>
      <th>Present Members</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AHMEDABAD</td>
      <td>18-9-2018</td>
      <td>PLANNING FOR U-11 NATIONAL CHAMPIONSHIP</td>
      <td>13</td>
    </tr>
    <tr>
      <td>VADODARA</td>
      <td>19-4-2019</td>
      <td>FOR NEXT YEAR PLANNING: STATE CHAMPIONSHIP, REFEREE SEMINAR, SUMMER VACATION CAMP, AND DEVELOPING NEW DISTRICTS</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
</div><div className={styles.tableWrapper} >

<br></br>

<h4>RBFI National, SGFI National, AIU & International Championshiporganized by State Association
</h4>
<br></br>
<table className={styles.table}>
  <thead>
    <tr>
      <th>Years</th>
      <th>National / International Championship</th>
      <th>Date</th>
      <th>Venue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2015</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2016</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2017</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2018</td>
      <td>10th Mini Roll Ball National Championship 2018</td>
      <td>14TH NOVEMBER TO 17TH NOVEMBER</td>
      <td>VADODARA, GUJARAT</td>
    </tr>
  </tbody>
</table>
</div>
<div className={styles.tableWrapper} >


<br></br>
<h4>State Participating in National Competitions Information, 2018-19
</h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>



<table className={styles.table}>
  <thead>
    <tr>
      <th>Event</th>
      <th>Boy Team</th>
      <th>No. of Players</th>
      <th>Place</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RBFI National</td>
      <td>U 11 Group, Boys</td>
      <td>12</td>
      <td>VADODARA, GUJARAT</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>U 11 Group, Girls</td>
      <td>12</td>
      <td>VADODARA, GUJARAT</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>U 14 Group, Boys</td>
      <td>12</td>
      <td>PUNE, MAHARASHTRA</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>U 14 Group, Girls</td>
      <td>12</td>
      <td>PUNE, MAHARASHTRA</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>U 17 Group, Boys</td>
      <td>12</td>
      <td>RAJASTHAN</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>U 17 Group, Girls</td>
      <td>12</td>
      <td>RAJASTHAN</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>Senior Group, Boys</td>
      <td>10</td>
      <td>KARNATAKA</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>Senior Group, Girls</td>
      <td>08</td>
      <td>KARNATAKA</td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>Federation Cup, Boys</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>RBFI National</td>
      <td>Federation Cup, Girls</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 14 Group, Boys</td>
      <td>12</td>
      <td>CHHATTISGARH</td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 14 Group, Girls</td>
      <td>12</td>
      <td>CHHATTISGARH</td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 17 Group, Boys</td>
      <td>12</td>
      <td>CHHATTISGARH</td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 17 Group, Girls</td>
      <td>12</td>
      <td>CHHATTISGARH</td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 19 Group, Boys</td>
      <td>12</td>
      <td>MAHARASHTRA</td>
    </tr>
    <tr>
      <td>SGFI National</td>
      <td>U 19 Group, Girls</td>
      <td>12</td>
      <td>MAHARASHTRA</td>
    </tr>
    <tr>
      <td>AIU National</td>
      <td>Boys</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>AIU National</td>
      <td>Girls</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
<div className={styles.tableWrapper} >

<br></br>
<h4>
International Players Information, 2018-19
</h4>
              <p style={{marginBottom : '15px'}}>Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>
<table className={styles.table}>
  <thead>
    <tr>
      <th>SR</th>
      <th>Players Name (Full Name)</th>
      <th>Event</th>
      <th>Date</th>
      <th>Venue</th>
      <th>Place</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>CHETAN DONDA</td>
      <td>ASIAN CUP</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>

<div className={styles.tableWrapper} >

<br></br>
<h4>
District Information, 2018-19
</h4>
              <p style={{marginBottom : '15px'}}>
              Before 30thApril 2019 all State Associations must send the information as per table given below
              Name of the Association –Roll Ball Association of Gujarat
</p>


<table className={styles.table}>
  <thead>
    <tr>
      <th>District Name (Full Name)</th>
      <th>Member</th>
      <th>Address</th>
      <th>Contact No.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AHMEDABAD CITY (DHARMESH PARMAR)</td>
      <td>YES</td>
      <td>A/66, GANESH KUNJ SOC, ODHAV, AHMEDABAD</td>
      <td>9376171443</td>
    </tr>
    <tr>
      <td>AHMEDABAD RURAL (HARDIK PARIKH)</td>
      <td>YES</td>
      <td>B/28, ASHIRWAD NAGAR, GAYTRY SCHOOL, NIKOL GAM, AHMEDABAD</td>
      <td>9998884825</td>
    </tr>
    <tr>
      <td>GANDHINAGAR CITY (D.K.PARMAR)</td>
      <td>YES</td>
      <td>PLOT.NO.540/2, SECTOR:7, GANDHINAGAR</td>
      <td>9724387223</td>
    </tr>
    <tr>
      <td>GANDHINAGAR RURAL (DEEP RAVAL)</td>
      <td>YES</td>
      <td>OM LAND MARK SCHOOL, MOTA CHILODA, GANDHINAGAR</td>
      <td>9909369506</td>
    </tr>
    <tr>
      <td>SURAT CITY (DIVYESH GOHIL)</td>
      <td>YES</td>
      <td>MOTA VARCHA SURAT CITY</td>
      <td>8905970089</td>
    </tr>
    <tr>
      <td>SURAT RURAL (KETAN TRIVEDI)</td>
      <td>YES</td>
      <td>P.P. SVANI SCHOOL, ABRAMA GAM, SURAT</td>
      <td>9909990025</td>
    </tr>
    <tr>
      <td>MAHESANA (ANAND KAPADIYA)</td>
      <td>YES</td>
      <td>R.T.O. ROAD RAJMHEL SOC, MAHESANA</td>
      <td>9724386224</td>
    </tr>
    <tr>
      <td>RAJKOT CITY (PUSHPABEN RATHOD)</td>
      <td>YES</td>
      <td>GONDAL ROAD, RAJKOT</td>
      <td>9375705005</td>
    </tr>
    <tr>
      <td>GIR-SOMNATH (VAJUBHAI BARAD)</td>
      <td>YES</td>
      <td>VERAVAD, SOMANATH ACADMY, SOMNATH</td>
      <td>9277602001</td>
    </tr>
    <tr>
      <td>KUTCH (ANKUR DAVADA)</td>
      <td>YES</td>
      <td>GANDHIDAM, KUTCH</td>
      <td>9016914280</td>
    </tr>
    <tr>
      <td>VALSAD (YOGESHBHAI)</td>
      <td>YES</td>
      <td>NARGOL, VALSAD</td>
      <td>9925107565</td>
    </tr>
    <tr>
      <td>NAVASARI (VISHAL SHARMA)</td>
      <td>YES</td>
      <td>NAVASARI GAM, NAVSARI</td>
      <td>87802483534</td>
    </tr>
    <tr>
      <td>BANASKANTHA (BHARAT SOLANKI)</td>
      <td>YES</td>
      <td>DISA GAM, BANASKANTHA</td>
      <td>8460506012</td>
    </tr>
    <tr>
      <td>KHEDA (PARESH PATEL)</td>
      <td>YES</td>
      <td>NESH GAM, DAKOR KHEDA</td>
      <td>9825187005</td>
    </tr>
    <tr>
      <td>ANAND (SANDIP PANDIYA)</td>
      <td>YES</td>
      <td>PETLAD, MOTI BRAHMAN POL, ANAND</td>
      <td>8000282494</td>
    </tr>
    <tr>
      <td>SABARKANTHA (DR.ASHOK RAVAL)</td>
      <td>YES</td>
      <td>SARDA KUNJ, HIMATNAGAR, SABARKANTHA</td>
      <td>9426049098</td>
    </tr>
    <tr>
      <td>MAHISAGAR (RASTRPAL RAJDEEP)</td>
      <td>YES</td>
      <td>LUNAVADA, MAHISAGAR</td>
      <td>7575808177</td>
    </tr>
    <tr>
      <td>PANCHMAHAL (UTSAV KAPADIYA)</td>
      <td>YES</td>
      <td>GODHARA, PANCHAMAHAL</td>
      <td>8460406189</td>
    </tr>
  </tbody>
</table>
</div>

        </div>
      </div>
    </Layout>
  );
};

export default Documents;
