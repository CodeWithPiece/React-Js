import React, { useContext, useRef } from "react";
import { PostContext } from "../store/post-store";

const AddPost = () => {
  const { addPost, setFetching } = useContext(PostContext);
  const postId = useRef();
  const postTitle = useRef();
  const postBody = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFetching(true);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle.current.value,
        body: postBody.current.value,
        userId: postId.current.value,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        setFetching(false);
      });

    postId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
  };

  return (
    <div className="col-md-10">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-2">
            <input
              ref={postId}
              type="number"
              className="form-control"
              placeholder="Post Id"
            />
          </div>
          <div className="col-md-2">
            <input
              ref={postTitle}
              type="text"
              className="form-control"
              placeholder="Post Title"
            />
          </div>
          <div className="col-md-4">
            <input
              ref={postBody}
              type="text"
              className="form-control"
              placeholder="Post Body"
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Add Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
