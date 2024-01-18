import { createContext, useReducer, useState } from "react";
import React from "react";

export const PostContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  { postId: 1, postTitle: "Hello", postBody: "This is post body" },
  { postId: 2, postTitle: "Hello", postBody: "This is post body" },
  { postId: 3, postTitle: "Hello", postBody: "This is post body" },
  { postId: 4, postTitle: "Hello", postBody: "This is post body" },
  { postId: 5, postTitle: "Hello", postBody: "This is post body" },
  { postId: 6, postTitle: "Hello", postBody: "This is post body" },
];

const postReducer = (currentPosts, action) => {
  let newPosts = currentPosts;
  if (action.type === "ADD_POST") {
    newPosts = [action.payload, ...newPosts];
    return newPosts;
  } else if (action.type === "DELETE_POST") {
    newPosts = newPosts.filter((post) => post.postId != action.payload);
  }
  return newPosts;
};

const PostProvider = ({ children }) => {
  // const [posts, setPosts] = useState(DEFAULT_POST_LIST);
  const [posts, postDispatch] = useReducer(postReducer, DEFAULT_POST_LIST);

  const addPost = (post) => {
    postDispatch({
      type: "ADD_POST",
      payload: post,
    });
    // setPosts((currentPost) => {
    //   return [...currentPost, post];
    // });
  };

  const deletePost = (postId) => {
    postDispatch({
      type: "DELETE_POST",
      payload: postId,
    });
    // setPosts((currentPost) => {
    //   return currentPost.filter((post) => post.postId != postId);
    // });
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
