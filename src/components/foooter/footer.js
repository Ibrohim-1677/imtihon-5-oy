import siteLogoFooter from"./footer-logo.svg" 
import "./footer.css"

export const Footer = () => {
    return(
        <>
        <section className="footer">
            <div className="container">
            {/* <div className="footer-join"> */}
            <div className="footer-mine">
            <a className="footer-logo" href="/private"><img src={siteLogoFooter} alt="" /></a>
           
            <div className="box box1">
            <span className="footer-title">FIGHT WITH ME ON:</span>
            <ul className="footer-lists">
                <li className="footer-item"><a className="footer-link" href="#">Twitter</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Instagram</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Telegram</a></li>
                <li className="footer-item"><a className="footer-link" href="#">YouTube</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Figma</a></li>
            </ul>
            </div>
            <div className="box box2">
            <span className="footer-title">WHAT I HAVE DONE:</span>
            <ul className="footer-lists">
                <li className="footer-item"><a className="footer-link" href="#">Xalq Kutubxonasi</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Websitee</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Website</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Play Market</a></li>
                <li className="footer-item"><a className="footer-link" href="#">App Store</a></li>
            </ul>
            </div>
            <div className="box box3">
            <p className="textt">Contact</p>
            <ul className="footer-lists">
                <li className="footer-item"><a className="footer-link" href="#">Blog</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Dribbble</a></li>
                <li className="footer-item"><a className="footer-link" href="#">Behance</a></li>
            </ul>
            </div> 
            </div>
            {/* </div> */}
            </div>
        </section>
        </>
    );
}