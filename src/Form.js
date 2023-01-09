import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = () => {
    setErrorMessage("");

    if (title === "") {
      setErrorMessage("Title is required");
      return false;
    }

    if (body === "") {
      setErrorMessage("Body is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = isFormValid();

    if (!isValid) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: 1,
          title,
          body,
        }
      );

      alert(`Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error: ${JSON.stringify(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />

      <label htmlFor="body">Body:</label>
      <input
        id="body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />

      <br />

      {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}

      <button type="submit">Submit</button>

      {isLoading && <p>Loading...</p>}
    </form>
  );
};

export default Form;
