import axios from "axios";
import { useEffect, useState } from "react";

// Import card component
import PostCard from "../../components/PostCard";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <>
      <h1>Lista dei post</h1>

      <div className="row row-cols-2 g-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
