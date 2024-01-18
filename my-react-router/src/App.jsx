import AddPost from "./components/AddPost";
import Welcome from "./components/Welcome";
import PostList from "./components/PostList";
import PostProvider from "./store/post-store";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <PostProvider>
          <Welcome />
          <AddPost />
          <PostList />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
