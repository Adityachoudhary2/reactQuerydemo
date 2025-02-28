import React from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

interface Item {
  id: number;
  title: string;
  body: string;
}

const FetchRQ: React.FC = () => {
 
  const { data, isLoading, isError, error} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p> Error:{ ( error as Error).message ||  "Something went wrong"}</p>;

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

