import { useRef, useState } from "react";
import { Feedback } from "../../../components/feedback/feedback";
import "./main.css"

export const Main = () => {
const [setPosts]= useState()


    return(
        <>
        <div className="main">
        <h2 className="mian-title">Recent Posts</h2>
        <ul className="feedback-list">
          <Feedback />
        </ul>        

        </div>
        </>
    );
}