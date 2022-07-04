import { renderHook } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./feedback.css"
import time from "./time.svg"

export const Feedback = () => {

  const [posts, setPosts] = useState(null);
  const [page, setPAge] = useState({
    page: 0,
    total: 10
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(page.page, page.total)))
      .catch(error => console.log(error.length + 'error length'))
  },[page])

  let handelpagination = (event) => {
    switch (event.target.id) {
      case '1':
        setPAge({
          page:0,
          total:10
        })
        break;
      case '2':
        setPAge({
          page:11,
          total:20
        })
        break;
      case '3':
        setPAge({
          page:21,
          total:30
        })
      case '4':
        setPAge({
          page:31,
          total:40
        })
        break;
      case '5':
        setPAge({
          page:41,
          total:50
        })
        break;

    }
  }
  const handelClik = () => {
    renderHook()
  }





  // console.log(post);
  return (
    <>
      {posts && posts.map(post => {
        return (
          <li className="main-item" key={post.id}>

            <div className="feedback-box">
              <div className="main-flex">
                <span className="main-post">Recent Posts</span>
                <span className="main-theory">Design theory</span>
              </div>
              <h3 className="main-tite"><Link onClick={handelClik} to={`/feedback/${post.id}`} className="text__item">{post.title}</Link></h3>
              <img src={time} alt="phota clock" />
              <span className="main-span">3 minutes read</span>
              <hr />
            </div>
          </li>
        )
      })}
      <div className="pagination-box" onClick={handelpagination}>
        <button className="button-feedbac"  type="checked" id="1">1</button>
        <button className="button-feedbac"  type="button" id="2">2</button>
        <button  className="button-feedbac" type="button" id="3">3</button>
        <button  className="button-feedbac" type="button" id="4">4</button>
        <button  className="button-feedbac" type="button" id="5">5</button>
      </div>

    </>
  );
}
