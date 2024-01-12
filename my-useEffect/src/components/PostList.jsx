import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, createMultiplePost } = useContext(PostListContext);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => createMultiplePost(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <Welcome onGetPostClick={handleGetPostsClick} />
      )}
      <div className="d-flex flex-wrap">
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default PostList;
