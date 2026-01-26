import React from "react";
import Partie1_blog from "../components/blogs/Partie1_blog";
import Partie2_blog from "../components/blogs/Partie2_blog";
import Partie3_blog from "../components/blogs/Partie3_blog";
import Partie4_blog from "../components/blogs/Partie4_blog";

const Blog: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-[100px]">
      <Partie1_blog />
      <Partie2_blog />
      <Partie3_blog />
      <Partie4_blog />
    </main>
  );
};

export default Blog; // ✅ OBLIGATOIRE