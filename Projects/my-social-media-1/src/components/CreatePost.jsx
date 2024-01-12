import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { createPost } = useContext(PostListContext);
  const userIdElem = useRef();
  const titleElem = useRef();
  const reactionElem = useRef();
  const tagElem = useRef();
  const contentElem = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElem.current.value;
    const postTitle = titleElem.current.value;
    const postReaction = reactionElem.current.value;
    const postTags = tagElem.current.value.split(" ");
    const postContent = contentElem.current.value;
    createPost(userId, postTitle, postReaction, postTags, postContent);
    userIdElem.current.value = "";
    titleElem.current.value = "";
    reactionElem.current.value = "";
    tagElem.current.value = "";
    contentElem.current.value = "";
  };

  return (
    <div>
      <form
        className="mx-4 my-4"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id
          </label>
          <input
            ref={userIdElem}
            type="number"
            className="form-control"
            id="userId"
            placeholder="Your User id."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={titleElem}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reaction
          </label>
          <input
            ref={reactionElem}
            type="number"
            className="form-control"
            id="reaction"
            placeholder="How many people reacted to this post."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags
          </label>
          <input
            ref={tagElem}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            ref={contentElem}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
