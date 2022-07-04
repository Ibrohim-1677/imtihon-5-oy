import {  Route , Routes } from "react-router-dom";
import FeedbackId from "./module/private/feedback/feedbackId";
import SignIN from "./module/public/sign-in/sign-in";
import NotFound from "./pages/not-found/not-found";
import NotFoundFed from "./pages/not-found/not-found-feed";
import Private from "./private";

const Public = () =>{
    return(
        <div>
               <Routes>
                   <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<SignIN />}></Route>
                  <Route path="/private" element={<Private />}></Route>
                  <Route path="/feedback/:id" element={<FeedbackId />} />
                  <Route path="/private/*" element={<NotFoundFed />} />
               </Routes>
        </div>
    )
}
export default Public;