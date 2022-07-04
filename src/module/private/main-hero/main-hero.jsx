import rightButton from "./strelka.svg";
import fecebook from "./facebook.svg";
import githab from "./githab.svg";
import twitter from "./twitter.svg";
import inIng from "./in-img.svg";
import "./main-hero.css"

export const MainHero = () =>{
    return (
    <>
    <div className="main-hero">
        <h1 className="visually-hidden">Bobur Blog</h1>
        <div className="main-hero-box">
            <h2 className="main-hero-title">What I do!</h2>
            <p className="main-hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
            <span className="main-hero-span">EXPLORE ME</span>
            <a className="main-hero-link" href="#"><img className="main-hero-img" width ="6px" src={rightButton} alt="strelka right" /></a>
             <ul className="main-logo-list">
                <li className="main-hero-item"><a href="#"><img src={fecebook} alt="fecebook image" /></a></li>
                <li className="main-hero-item"><a href="#"><img src={githab} alt="githab image" /></a></li>
                <li className="main-hero-item"><a href="#"><img src={twitter} alt="twitter image" /></a></li>
                <li className="main-hero-item"><a href="#"><img src={inIng} alt="in word photo" /></a></li>
             </ul>
        </div>
    </div>
    </>
    );
} 