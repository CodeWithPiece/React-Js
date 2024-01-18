import { useState } from "react";
import AddPost from "./components/AddPost";
import Welcome from "./components/Welcome";
import PostList from "./components/PostList";

function App() {
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
    <div className="container">
      <div className="row justify-content-center">
        <Welcome />
        <AddPost addPost={addPost} />
        <PostList posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default App;
