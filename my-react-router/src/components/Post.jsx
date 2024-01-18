import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  return (
    <>
      <tr>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td
          className="text-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdDelete />
          Delete
        </td>
      </tr>
    </>
  );
};

export default Post;
