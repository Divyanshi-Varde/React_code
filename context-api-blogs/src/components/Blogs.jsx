import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
const Blogs = () => {
  // consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="blogs">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Data found!</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id} className="blog-card">
              <p className="title">{post.title}</p>
              <p className="sec-con">
                By <span>{post.author}</span> on{" "}
                <span className="post-cat">{post.category}</span>
              </p>
              <p className="post-date">Posted on {post.date}</p>
              <p className="post-content">{post.content}</p>
              <div>
                {post.tags.map((tag, index) => {
                  return (
                    <span key={index} className="post-tag">{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Blogs;

// import React, { useContext } from "react";
// import AppContext from "../context/AppContext";
// import Spinner from "./Spinner";
// const Blogs = () => {
//   const { posts, loading } = useContext(AppContext);
//   console.log(posts);
//   return (
//     <div>
//       {loading ? (
//         <Spinner />
//       ) : posts.length === 0 ? (
//         <div>
//           <p>No Data Found!</p>
//         </div>
//       ) : (
//         posts.map((post) => {
//           return (
//             <div key={post.id}>
//               <p>{post.title}</p>
//               <p>
//                 By <span>{post.author}</span> on <span>{post.category}</span>
//               </p>
//               <p>Posted on {post.date}</p>
//               <p>{post.content}</p>
//               <div>
//                 {post.tags.map((tag, index) => {
//                   return <span key={index}>{`${tag}`}</span>;
//                 })}
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Blogs;
