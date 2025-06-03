import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${postId}`).then((res) => {
      setPost(res.data.data);
    });
  }, []);

  return (
    <>
      <h1>Post detail</h1>
      <img src={`http://localhost:3000${post.image}`} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <ul>
        {post.tags?.map((tag, i) => (
          <li key={i}>{`# ${tag}`}</li>
        ))}
      </ul>
    </>
  );
}
