import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  createPost: () => {},
  createMultiplePost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hello Friends, I am going to Mumbai for my vacataions. Hope to enjoy a lot. Peace out.",
    reactions: "2",
    userId: "user-007",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "My New Car",
    body: "Hello Friends, Today my parents gifted me a new car. Woohoo...!!",
    reactions: "5",
    userId: "user-1",
    tags: ["New Car", "Safe Drive", "Gift"],
  },
  {
    id: "3",
    title: "React Practise",
    body: "Hello Friends, I am enhancing my skill in frontend using React Js. Peace out.",
    reactions: "100",
    userId: "user-2",
    tags: ["React", "Frontend", "Developer"],
  },
  {
    id: "4",
    title: "Feeling Sad",
    body: "Hello Friends, Today I had a dream about my ex-girl friend, woh din vhi kya din thae.",
    reactions: "200",
    userId: "user-5",
    tags: ["Sad", "Lonely", "Bored"],
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
  } else if (action.type === "ADD_MULTIPLE_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
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
        reactions: postReaction,
        userId: userId,
        tags: postTags,
      },
    });
  };

  const createMultiplePost = (posts) => {
    dispatchPostList({
      type: "ADD_MULTIPLE_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider
      value={{ postList, createPost, createMultiplePost, deletePost }}
    >
      {props.children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
