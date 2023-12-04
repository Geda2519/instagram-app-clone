import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([

    {
      user: "estifanos aschalew",
      postImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjkkW5lyTFckPlAjqv0YhePdTi8qsig4EEurKygtc7wM-4ZL_s",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Danny",
      postImage:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQB7HQbwetYYOjpqzVyJ2M-gPIgKnE4Pl335uCx0-KtlxqDmWy8",
      likes: 240,
      timestamp: "1d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Manchester United",
      postImage:
        "https://steemitimages.com/0x0/https://media.giphy.com/media/cYkgTk9GK6cT3UCCjp/giphy.gif",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "Maramawit Abata",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pdn4_HBcj0FgEAhaXRltlQceqy9_aKh0fQ&usqp=CAU",
      likes: 500,
      timestamp: "1d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://miro.medium.com/v2/resize:fit:2000/0*mfUNFSHyrXnH7ZKf",
      likes: 14,
      timestamp: "2d",

    },
    {
      user: "Joseph omotade",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SOoWyobMKHldCj2xi99ENw5_mQB_v02fmQ&usqp=CAU",
      likes: 14,
      timestamp: "2d",

    },

  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
