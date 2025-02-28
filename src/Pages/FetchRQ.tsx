import React from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

interface Item {
  id: number;
  title: string;
  body: string;
}

const FetchRQ: React.FC = () => {
 
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <ul className="section-accordion">
      {data?.map(({ id, title, body }: Item) => (
        <li key={id}>
          <p>{title}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchRQ;

