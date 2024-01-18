import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-store";

const Post = ({ post, index }) => {
  const { deletePost } = useContext(PostContext);
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{post.postId}</td>
        <td>{post.postTitle}</td>
        <td>{post.postBody}</td>
        <td
          className="text-danger"
          onClick={() => {
            deletePost(post.postId);
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
