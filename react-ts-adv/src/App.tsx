import { useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import postHeaderImg from "./assets/data-fetching.png";

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

  const dummyUrl = "https://jsonplaceholder.typicode.com/posts/5";
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

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <img src={postHeaderImg} alt="illustration of a thing" />
          {error && <p>{`Sorry, there was an error. Please try again`}</p>}
          <BlogPosts posts={data} />
        </article>
      )}
    </main>
  );
}

export default App;
