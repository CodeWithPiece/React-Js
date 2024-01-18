import { createContext, useEffect, useReducer, useState } from "react";
import React from "react";

export const PostContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const postReducer = (currentPosts, action) => {
  let newPosts = currentPosts;
  if (action.type === "ADD_POST") {
    newPosts = [action.payload, ...newPosts];
  } else if (action.type === "ADD_POSTS") {
    newPosts = action.payload;
  } else if (action.type === "DELETE_POST") {
    newPosts = newPosts.filter((post) => post.id != action.payload);
  }
  return newPosts;
};

const PostProvider = ({ children }) => {
  const [posts, postDispatch] = useReducer(postReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    postDispatch({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    postDispatch({
      type: "DELETE_POST",
      payload: postId,
    });
  };

  const addInitialPost = (posts) => {
    postDispatch({
      type: "ADD_POSTS",
      payload: posts,
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      setFetching(false);
      controller.abort();
    };
  }, []);

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, fetching }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
