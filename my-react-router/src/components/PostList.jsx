import React, { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-store";
import Loader from "./Loader";

const PostList = () => {
  const { posts, fetching } = useContext(PostContext);
  return (
    <div className="col-md-10">
      {fetching && <Loader />}
      {!fetching && (
        <div className="card  mt-4">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Post Id</th>
                  <th scope="col">Post Title</th>
                  <th scope="col">Post Body</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => {
                  return <Post key={index} post={post} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
