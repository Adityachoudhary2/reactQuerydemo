import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

const FetchOld: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      if (res.status === 200) {
        setPosts(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getPostsData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <ul className="section-accordion">
      {posts?.map(({ id, title, body }) => (
        <li key={id}> 
          <p>{title}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchOld;
