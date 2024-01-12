import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loader from "./Loader";

const PostList = () => {
  const { postList, createMultiplePost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        createMultiplePost(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning useEffect");
      controller.abort();
    };
  }, []);

  // [] run at initial render
  // ..nothing..run at inital render and run at every paint cycle
  // [data, data1, data2] run at inital render and whenever these datas changes

  return (
    <>
      {fetching && <Loader />}
      {!fetching && postList.length === 0 && <Welcome />}
      <div className="d-flex flex-wrap">
        {!fetching &&
          postList.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </div>
    </>
  );
};

export default PostList;
