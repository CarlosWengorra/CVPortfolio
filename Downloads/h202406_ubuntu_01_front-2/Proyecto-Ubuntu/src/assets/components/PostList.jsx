import React, { useState, useEffect } from "react";
import axios from "axios"; // Importar axios
import "../css/PostList.css";
import NavBar from './NavBar';
import PublicationsList from './PublicationsList';

const PostList = ({ posts: initialPosts = [] }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const axiosInstance = axios.create({ // Crear una instancia de axios
    baseURL: "https://tu-dominio.com/api" // Cambia por la URL base de tu API
  });

  useEffect(() => {
    if (!initialPosts.length) {
      axiosInstance.get("/posts")
       .then(response => {
          setPosts(response.data);
        })
       .catch(error => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [initialPosts]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="postlist-container">
      <NavBar />
      <div className="container mt-3">
        <div className="publicaciones-header">
          <input
            type="text"
            placeholder="Buscar Microemprendimientos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-3 search w-100 rounded-5 py-4 my-3"
          />
          <br />
          <h2>Publicaciones</h2>
          <h1>Explorando finanzas de impacto</h1>
          <p>Conoce cómo decisiones financieras pueden impactar positivamente en la sociedad y el medio ambiente</p>
        </div>
        <br />
        <PublicationsList posts={filteredPosts} />
      </div>
    </div>
  );
};

export default PostList;