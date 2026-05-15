import React from "react";
import blog from "./blog";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About about={blog.about} image={blog.image} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;