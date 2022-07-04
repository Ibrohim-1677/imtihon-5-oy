import { Link } from "react-router-dom";
import notFound from "./Vector.svg"
import rightButton from "./strelka.svg";
import "./not-found.css"
import { Header } from "../../components/header/header";


const NotFoundFed = () => {
    return (
        <>
        <div className="container">
        <Header />
        <div className="text-center">
        <img src={notFound} alt="" />
      <h2>Page not found - 404</h2>
      This page not found (deleted or never exists). <br />Try a phrase in search box or back to home and start again.
      <div className="box-found"><Link className="link-color" to="/private">TAKE ME HOME!<img className="main-hero-img" width ="6px" src={rightButton} alt="strelka right" /></Link></div>
      </div>
      </div>
      </>
    );
  }
  
  export default NotFoundFed;