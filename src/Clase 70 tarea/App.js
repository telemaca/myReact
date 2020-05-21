import React from "react";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import NavItem from "./components/NavItem";
import UserControl from "./components/UserControl";
import BlogArticle from "./components/BlogArticle";
import BlogImage from "./components/BlogImage";
import BlogTitle from "./components/BlogTitle";
import BlogContent from "./components/BlogContent";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

const comments = [
  {
    user: "Grace Hopper",
    comment: "Genial artículo!",
  },
  {
    user: "Hedy Lamarr",
    comment: "Muy bueno! Gracias por compartir",
  },
];

function App() {
  return (
    <div className="App">
      <Header>
        <NavMenu>
          <NavItem path="/home">Home</NavItem>
          <NavItem path="/about-us">Sobre mí</NavItem>
          <NavItem path="/contact">Artículos</NavItem>
        </NavMenu>
        <UserControl user="Ada" />
      </Header>
      <BlogArticle>
        <BlogImage img="imagen.jpg" />
        <BlogTitle>Cómo hacer un proyecto en React</BlogTitle>
        <BlogContent>Lorem ipsum...</BlogContent>
      </BlogArticle>
      <Comments comments={comments} />
      <Footer>® 2020 - All rights reserved</Footer>
    </div>
  );
}

export default App;
