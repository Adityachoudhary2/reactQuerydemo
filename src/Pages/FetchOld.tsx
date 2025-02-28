import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";


interface Item {
  id: number;
  title: string;
  body: string;
}



const FetchOld: React.FC = () => {
  const [posts, setPosts] = useState<Item[]>([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      // console.log(res);
      return res.status === 200 ? setPosts(res.data) : [];

    } catch (error) {
      console.log(error)
      return [];
    }
  }


  useEffect(() => {
    getPostsData()

  }, [])



  return (
    <ul className="section-accordion">
      {posts ?.map(({ id, title, body }) => (
        <li key={id}>
          <p>{title}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchOld;
