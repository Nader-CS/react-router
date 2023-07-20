import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./components/about/About";
import Posts from "./screens/posts/Posts";
import { loader as fetchPosts } from "./screens/posts/Posts";
import AddPost from "./screens/add-posts/AddPost";
import { action as SubmitData } from "./screens/add-posts/AddPost";
import PostDetail from "./screens/post-detail/PostDetail";
import { loader as fetchPostDetail } from "./screens/post-detail/PostDetail";
import EditPost from "./screens/edit-post/EditPost";
import { loader as editLoader } from "./screens/edit-post/EditPost";
import { action as updatePost } from "./screens/edit-post/EditPost";
import Error from "./screens/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { index: true, element: <About /> },
      {
        path: "posts",
        loader: fetchPosts,
        children: [
          { path: ":id", element: <PostDetail />, loader: fetchPostDetail },
          { index: true, element: <Posts />, loader: fetchPosts },
          {
            path: ":id/edit",
            element: <EditPost />,
            loader: editLoader,
            action: updatePost,
          },
        ],
      },
      { path: "add-post", element: <AddPost />, action: SubmitData },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
