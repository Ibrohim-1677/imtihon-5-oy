import { useEffect, useState, } from "react";
import {  Link, useParams , Navigate } from "react-router-dom"
import hand from "./hand.svg"
import time from "./time.svg"
import line from "./Vector.svg"
import bigImg from "./Img.png"
import "./feedbackid.css"
import { renderHook } from "@testing-library/react";
import { Footer } from "../../../components/foooter/footer";
import { Header } from "../../../components/header/header";

const FeedbackId = () => {
    const [ posts, setPost ] = useState(null);
    const [ postr, setPosts ] = useState(null);

    const { id } = useParams();
    const handelClik =()=> {
      renderHook()
     }


   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data.slice(11,14)))
        .catch((error) => console.error(error))
    }, []);

    let post = posts?.find(post => post.id === +id)
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts") 
      .then(res => res.json())
      .then(data=> setPost(data))
    }, []);
    console.log(posts);
    // if (posts.id > 100) {
    //   return <Navigate to="/private/*" />
    // }else{ }
    if(!post){
      return null
    }
    
    return (
      <>
      <div className="container">
      <Header />
      <div className="big-box">
      <div className="box-box">
        <div className="ikon-center">
          </div>
          <img src={hand} alt="hands" />
          <p>125</p>
          <img src={line} alt="line" />
          <p>70</p>
      </div>
      <div className="min-box">
      <div className="main-item" key={post?.id}>
      <div className="feedback-box">
      <div className="main-flex">
        <span className="main-post">Recent Posts</span>

      </div>
      <h3 className="main-tite">{post?.title}</h3>

      <div className="span">
      <span className="main-theory">October 24, 2020</span>
      <span className="vertikal"></span>
      <img src={time} className="time" alt="phota clock" />
      <span className="main-span">3 minutes read</span>
      </div>
      </div>
      </div>
      <img className="big-img" width={736} src={bigImg} alt="" />
      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        <br /><br /><strong className="text-stile">Information overload</strong><br /><br />
        
      </p>
      <p className="text">{post?.body}</p>
      <div className="span line-text">
      <span className="line-vertikale"></span>
      <p className="text add">
      Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin <a className="color-bluu">elit.uz</a> nulla, viverra id suscipit quis, tristique a dolor.<br /> <br /><br /> <i className="i">'Designing For Sustainability, Tim Frick, 2014'</i>
      </p>
      </div>
      <div className="responsive-width">
       <span className="feedbacid-tile-add">Lessons Learnt: Best Practice</span>
       <div className="span">
       <span className="rule"></span>
       <p className="left-text" >Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</p>
       </div>
       <div className="span">
       <span className="rule"></span>
       <p className="left-text" >Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</p> 

        </div>
        </div>
        <div>
          <h3 className="title-main">More like this</h3>
          <ol className="feedback-list">
          { postr && postr.map(posts => (
             <li className="main-item" key={posts.id}>
            
             <div className="feedback-box">
             <div className="main-flex">
               <span className="main-post">Recent Posts</span>
               <span className="main-theory">Design theory</span>
             </div>
             <h4 className="main-tite"><Link onClick={handelClik} to={`/feedback/${posts.id}`} className="text__item">{posts.title}</Link></h4>
             <img src={time} alt="phota clock" />
             <span className="main-span">3 minutes read</span>
             <hr />
             </div>
           </li>
          ))}
          </ol>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
    );
  }
export default FeedbackId;