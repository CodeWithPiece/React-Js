import React from "react";
import Post from "./Post";

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="col-md-10 mt-4">
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Post Id</th>
                <th scope="col">Post Title</th>
                <th scope="col">Post Body</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                return (
                  <Post
                    key={index}
                    post={post}
                    index={index}
                    deletePost={deletePost}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostList;
