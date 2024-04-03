import { ReactNode, useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import postHeaderImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dummyUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    async function fetchNow() {
      setLoading(true);
      try {
        const data = (await get(dummyUrl)) as RawDataBlogPost[];
        const processedData: BlogPost[] = data.map((item) => {
          return { id: item.id, title: item.title, text: item.body };
        });
        setData(processedData);
        setLoading(false);
      } catch (error) {
        const parsedError = error as Error;
        setLoading(false);
        setError(parsedError.message);
      }
    }
    fetchNow();
  }, []);

  let content: ReactNode;
  if (error) {
    content = <ErrorMessage text={error} />;
  }
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (data.length !== 0) {
    content = (
      <article>
        <BlogPosts posts={data} />
      </article>
    );
  }

  return (
    <main>
      <img src={postHeaderImg} alt="illustration of a computer" />
      {content}
    </main>
  );
}

export default App;
