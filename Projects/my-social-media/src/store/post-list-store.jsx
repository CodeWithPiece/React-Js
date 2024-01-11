import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hello Friends, I am going to Mumbai for my vacataions. Hope to enjoy a lot. Peace out.",
    reaction: "2",
    userId: "user-007",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "My New Car",
    body: "Hello Friends, Today my parents gifted me a new car. Woohoo...!!",
    reaction: "5",
    userId: "user-1",
    tags: ["New Car", "Safe Drive", "Gift"],
  },
];

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = newPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...newPostList];
  }
  return newPostList;
};

const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const createPost = (
    userId,
    postTitle,
    postReaction,
    postTags,
    postContent
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reaction: postReaction,
        userId: userId,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider value={{ postList, createPost, deletePost }}>
      {props.children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
