import React from 'react';
import Container from './components/Container/Container';
import logo from "./Assets/Vector.svg";
import Searchimg from './Assets/Rectangle.png';
import MobL from './Assets/MobL.png';
import MobR from './Assets/MobR.png';
import NYT from './Assets/NYT.svg';
import Fortune from './Assets/Fortune.svg';
import Forbes from './Assets/Forbes.svg';
import Wired from './Assets/Wired.svg';
import Dashboard from './Assets/Dashboard.png';
import newsDashboard from './Assets/newsDashboard.png';
import Btn from './components/Buttons/GetStartBtn';
import BtnSecond from './components/Buttons/SecondaryBtn';
import Sridhar from './Assets/Sridhar.png';
import Vivek from './Assets/Vivek.png';
import Margo from './Assets/Margo.png';
import Bill from './Assets/Bill.png';
import CardReview from './components/CardReview';
import reviewNYT from './Assets/reviewNYT.png';
import reviewForbes from './Assets/reviewForbes.png';
import Last from './Assets/RectangleLast.png';
import frame from './Assets/Frame.svg';
import twitter from './Assets/Twitter.svg';
import fb from './Assets/Fb.svg';
import instagram from './Assets/Instagram.svg';
import linkedin from './Assets/Linkedin.svg';
import stripe from './Assets/Footer.png';
import NavBar from './components/NavBar';
import { useStyles } from './components/LandingPageStyles';

export default function LandingPage() {
    const classes = useStyles();

    return(
        <Container>
            <header className="header">
                <div className={classes.headerTop}>
                    <a className={classes.Logo} href="/" >
                        <img className={classes.LogoImg} src={logo} alt="logo"/>
                    </a>
                    <NavBar />
                </div>
            </header>                
            <main>
                <section className={classes.Search}>
                    <div className={classes.searchContainer}>
                        <div className={classes.containerInner}>
                            <h2 className={classes.title}>Real search results only. 
                                No ads ever.
                            </h2>
                            <div className={classes.TextContainer}>
                                <p className={classes.SearchText}>
                                    Created by ex-Google execs, Neeva gives you a private, ad-free search experience with only real results.
                                </p> 
                            </div>
                        </div>
                        <div className={classes.imgContent}> 
                            <img className={classes.Searchimg} src={Searchimg} alt="img" />   
                        </div>                                                     
                    </div>
                    <div className={classes.propsFirstUse}>
                    <Btn />
                    </div>
                </section>
                <section className={classes.Know}>
                    <div className={classes.KnowContainer}>
                        <div className={classes.ContainerInner}>
                                <h6 className={classes.knowTitle}>Did you know</h6>
                                <div className={classes.knowTextContainer}>
                                    <div className={classes.textBoxL}>
                                        <p className={classes.knowText}>40% of your search results are actually ads?</p>
                                    </div>                                   
                                    <div className={classes.textBoxR}>
                                        <p className={classes.knowText}>100% real results with Neeva</p>
                                    </div>
                                </div>
                                <div className={classes.MobContainer}>
                                    <img className={classes.MobImg} src={MobL} alt="Mob"/>
                                    <img className={classes.MobImg} src={MobR} alt="Mob"/>
                                </div>
                        </div>
                    </div>
                </section>
                <section className={classes.feauture}>
                    <div className={classes.featureContainer}>
                        <h6 className={classes.featureTitle}>Featured by</h6>
                    <div className={classes.featureImgContainer}>
                        <ul className={classes.ImgList}>
                            <li className={classes.ImgItem}>
                                <img className={classes.NYT} src={NYT} alt="NYT" />
                            </li>
                            <li className={classes.ImgItem}>
                                <img className={classes.Fortune} src={Fortune} alt="Fortune" /> 
                            </li>
                            <li className={classes.ImgItem}>
                                <img className={classes.Forbes} src={Forbes} alt="Forbes" />
                            </li>
                            <li className={classes.ImgItem}>
                                <img className={classes.Wired} src={Wired} alt="Wired" />   
                            </li>
                        </ul>
                    </div>
                    </div>
                </section>
                <section className={classes.board}>
                    <div className={classes.boardContainer}>
                    <div className={classes.boardImgContainer}> 
                            <img className={classes.Dashboard} src={Dashboard} alt="img" />   
                    </div>
                    <div className={classes.dashboardInfo}>
                        <h6 className={classes.dashtitle}>Did you know</h6>
                        <p className={classes.dashboardText}>1000s of trackers follow you every week?</p>
                        <h3 className={classes.dashboardTitle}>We block all trackers to keep your data safe.</h3>
                        <BtnSecond>
                            <span className={classes.billTextBtn}>See Our Bill of Rights</span>
                        </BtnSecond>
                    </div>   
                    </div>
                </section>
                <section className={classes.news}>
                    <div className={classes.newsContainer}>
                    <div className={classes.newsInfo}>
                        <h6 className={classes.dashtitle}>Did you know</h6>
                        <p className={classes.dashboardText}>You get generic results when you search?</p>
                        <h3 className={classes.dashboardTitle}>We let you pick the news sources you trust and retailers you love.</h3>
                        <BtnSecond propsClassName={classes.class_secondary_props}>                     
                            <span className={classes.dashboardTextBtn}>See All Features</span>
                        </BtnSecond>
                    </div>   
                    <div className={classes.newsImgContainer}> 
                        <img className={classes.newsDashboard} src={newsDashboard} alt="img" />   
                    </div>                    
                    </div>
                </section>
                <section className={classes.join}>
                    <div className={classes.joinContainer}>
                        <h1 className={classes.joinTitle}>Join search designed for you, not advertisers.</h1>
                        <div className={classes.BtnJoinContainer}>
                        <Btn  propsClassName={classes.class_from_props} />
                        </div>
                    </div>
                </section>
                <section className={classes.experts}>
                    <div className={classes.expertsContainer}>
                        <div className={classes.expertsTextContainer}>
                            <p className={classes.expertsText}>Created and backed<br/> by former Google executives</p>
                            <h3 className={classes.expertsTitle}>From the experts who know<br/> search best.</h3>
                            <BtnSecond propsClassName={classes.class_third_props}>
                            <span className={classes.expertsTextBtn}>Our Story</span>
                            </BtnSecond>
                        </div>
                        <div className={classes.expertsImgContainer}>
                            <ul className={classes.expertsList}>
                                <div className={classes.wrapChildFirst}>
                                <li className={classes.expertsItem}>
                                    <article className={classes.card}>
                                        <div className={classes.cardThumb}>
                                            <img className={classes.cardImg} src={Sridhar} alt="Sridhar"/>
                                        </div>
                                        <div className={classes.cardContent}> 
                                            <p className={classes.expertsName}>Sridhar Ramaswamy</p>
                                            <p className={classes.expertsPosition}>CEO & Cofounder at Neeva, ex-SVP at Google</p>

                                        </div>
                                    </article>
                                </li>
                                <li className={classes.expertsItem}>
                                    <article className={classes.card}>
                                        <div className={classes.cardThumb}>
                                         <img className={classes.cardImg} src={Vivek} alt="Vivek"/>
                                        </div>
                                        <div className={classes.cardContent}> 
                                            <p className={classes.expertsName}>Vivek Raghunathan</p>
                                            <p className={classes.expertsPosition}>Cofounder at Neeva, ex-VP at Google, Youtube</p>

                                        </div>
                                    </article>
                                </li>
                                </div>
                                <div className={classes.wrapChildSecond}>
                                <li className={classes.expertsItem}>
                                    <article className={classes.card}>
                                        <div className={classes.cardThumb}>
                                         <img className={classes.cardImg} src={Margo} alt="Margo"/>
                                        </div>
                                        <div className={classes.cardContent}> 
                                            <p className={classes.expertsName}>Margo Georgiadis</p>
                                            <p className={classes.expertsPosition}>Ex-President of Google Americas</p>

                                        </div>
                                    </article>
                                </li>
                                <li className={classes.expertsItem}>
                                    <article className={classes.card}>
                                        <div className={classes.cardThumb}>
                                         <img className={classes.cardImg} src={Bill} alt="Bill"/>
                                        </div>
                                        <div className={classes.cardContent}> 
                                            <p className={classes.expertsName}>Bill Coughran</p>
                                            <p className={classes.expertsPosition}>Ex-SVP of Search at Google</p>
                                        </div>
                                    </article>
                                </li>
                                </div>
                            </ul>                            
                        </div>
                    </div>
                </section>
                <section className={classes.reviews}>
                    <div className={classes.reviewsContainer}>
                        <h4 className={classes.reviewsTitle}>Why people love Neeva</h4>
                        <ul className={classes.reviewsList}>
                            <CardReview >
                                <p className={classes.reviewsText}>
                                    “Neeva makes it so much easier to focus on what I want to read now that I don't have to dodge all the ads.”
                                </p>
                                <p className={classes.reviewsAuthor}>Jeanie S.</p>
                                <p className={classes.reviewsPos}>retired</p>
                            </CardReview >
                            <CardReview >
                                <p className={classes.reviewsTextSec}>
                                   “It will not show any advertisements and it will not         collect or profit from user data. ”
                                </p>
                                <img className={classes.rewNYT} src={reviewNYT} alt="NYT"/>
                            </CardReview >
                            <CardReview >
                                <p className={classes.reviewsText}>“Excellent results. For scientific queries, Neeva places legitimate science and medical results front and center.”</p>
                                <p className={classes.reviewsAuthor}>Mike T.</p>
                                <p className={classes.reviewsPos}>IT Project Manager</p>

                            </CardReview >
                            <CardReview >
                                <p className={classes.reviewsTextLast}>
                                  “Neeva users will pay...to get the search results they want rather than what advertisers want them to see.”
                                </p>  
                                <img className={classes.rewForbes} src={reviewForbes} alt="Forbes"/>
                            </CardReview >      
                        </ul>                         
                    </div>
                </section>
                <section className={classes.account}>
                    <div className={classes.accountContainer}>
                        <div className={classes.innerContainerDescription}>
                            <h2 className={classes.accountTitle}>Because you pay for Neeva, we're accountable to you (never advertisers).</h2>
                            <Btn />
                        </div>    
                        <div className={classes.innerContainerImg}>    
                            <img className={classes.accountImg} src={Last} alt ="account" />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className={classes.footerContainer}>
                    <img className={classes.footerFrame} src={frame} alt="frame" />
                    <div className={classes.commonContainer}>
                        <div className={classes.footerPageContainerLeft}>
                            <p className={classes.footerPage}>Home</p>
                            <p className={classes.footerPage}>Features</p>
                            <p className={classes.footerPage}>About</p>
                            <p className={classes.footerPage}>Blog</p>
                            <p className={classes.footerPage}>Press</p>
                            <p className={classes.footerPage}>Community</p>
                            <p className={classes.footerPage}>Learn</p>
                        </div>
                        <div className={classes.footerPageContainerRight}> 
                            <p className={classes.footerPage}>Contact</p>
                            <p className={classes.footerPage}>Careers</p>
                            <p className={classes.footerPage}>Terms</p>
                            <p className={classes.footerPage}>Privacy</p>
                            <p className={classes.footerPage}>Bill of Rights</p>
                            <p className={classes.footerPage}>DMCA</p>
                            <p className={classes.footerPage}>Neeva Web Crawler</p>
                        </div>
                        
                    </div>
                    <div className={classes.socialContainer}>
                        <ul className={classes.socialList}>
                            <li className={classes.iconItem}>
                                <img className={classes.iconImg} src={twitter} alt="twitter" />
                            </li>
                            <li className={classes.iconItem}>
                                <img className={classes.iconImg} src={fb} alt="facebook" />
                            </li>
                            <li className={classes.iconItem}>
                                <img className={classes.iconImg} src={instagram} alt="instagram" />
                            </li>
                            <li className={classes.iconItem}>
                                <img className={classes.iconImg} src={linkedin} alt="linkedin" />
                            </li>
                        </ul>
                        <p className={classes.rightsText}><span className={classes.copyright}>&#169; 2021 </span> Neeva Inc</p>
                    </div>
                </div>
                <div className={classes.stripeContainer}>
                        <img className={classes.footerStripe} src={stripe} alt="stripe" />
                </div>
            </footer>    
        </Container>
    )
}


