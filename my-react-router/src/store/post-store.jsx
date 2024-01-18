import { createContext, useState } from "react";

export const PostContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

import React from "react";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { postId: 1, postTitle: "Hello", postBody: "This is post body" },
    { postId: 2, postTitle: "Hello", postBody: "This is post body" },
    { postId: 3, postTitle: "Hello", postBody: "This is post body" },
    { postId: 4, postTitle: "Hello", postBody: "This is post body" },
    { postId: 5, postTitle: "Hello", postBody: "This is post body" },
    { postId: 6, postTitle: "Hello", postBody: "This is post body" },
  ]);

  const addPost = (post) => {
    setPosts((currentPost) => {
      return [...currentPost, post];
    });
  };

  const deletePost = (postId) => {
    setPosts((currentPost) => {
      return currentPost.filter((post) => post.postId != postId);
    });
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
