import { Footer } from "./components/foooter/footer";
import { Header } from "./components/header/header";
import { MainHero } from "./module/private/main-hero/main-hero";
import { Main } from "./module/private/main/main";
import "./private.css"

const Private = () =>{
    return(
        <>
            <div className="container">
            <Header />
            <div className="main-box">
            <MainHero />
            <Main />
            </div>
            </div>
            <Footer />
        </>
    )
}
export default Private;