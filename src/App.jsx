import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";


function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Home />
        }
      />
      <Route 
        path="/blogs"
        element={
          <Blogs />
        }
      />
      <Route 
        path="/blogs/:slug"
        element={
          <BlogDetail />
        }
      />
    </Routes>
  )
}

export default App
