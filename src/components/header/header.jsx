import siteLogo from "./site-logo.svg"
import { Link } from "react-router-dom";
import "./header.css"  


export const Header = () =>{
    const  hendelSubmit = (evt) =>{
        evt.preventDefault()
        const inputValue= evt.target.elements.input.value
        console.log(inputValue);
    }
    return(
        <>
        <div className="header-box">
            <div className="res-flex">
        <a href="/private"><img className="site-logo" src={siteLogo} alt="site logo" /></a>
          <button className="hamburger" type="button">&#9776;</button>
        </div>
        <ul className="header-naw">
            <li className="header-item"><Link to="/private" className="header-links" href="#">All</Link></li>
            <li className="header-item"><a className="header-links" href="#">Design Theory</a></li>
            <li className="header-item"><a className="header-links" href="#">UX</a></li>
            <li className="header-item"><a className="header-links" href="#">UI</a></li>
            <li className="header-item"><a className="header-links" href="#">Typography</a></li>
        </ul>
      
        <form onSubmit={hendelSubmit} className="header-form">
            <input id="input" className="header-input" type="text" placeholder="Search" />
            <button className="header-button"></button>
        </form>
        </div>
        </>
    );
};