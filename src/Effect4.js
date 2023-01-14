import { useEffect, useState } from "react";

const Effect4 = () => {
  const [post, setPost] = useState({});
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchTodo = async () => {
      if (inputValue === "") {
        setPost({});
        return;
      }

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${inputValue}`,
        {
          signal: controller.signal,
        }
      );

      const json = await response.json();
      setPost(json);
    };

    fetchTodo();

    return () => {
      controller.abort();
    };
  }, [inputValue]);

  return (
    <>
      <label htmlFor="post_id">Post ID:</label>
      <input
        id="post_id"
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {Object.keys(post).length === 0 ? (
        <p>Type post ID to see the post</p>
      ) : (
        <>
          <h1>Id: {post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};

export default Effect4;
