import React from "react";

// HERO ARTICLE
import Partie2_lire_article_blog from "../components/articles/Partie2_lire_article_blog";

// CONTENU ARTICLE (TEXTE + IMAGE)
import Partie2_lire_article_blog2 from "../components/articles/Partie2_lire_article_blog2";

// CONTENU ARTICLE (EXAMENS + DÉROULEMENT)
import Partie2_lire_article_blog3 from "../components/articles/Partie2_lire_article_blog3";

// CONCLUSION + MOTS-CLÉS + PARTAGE
import Partie2_lire_article_blog4 from "../components/articles/Partie2_lire_article_blog4";

// ARTICLES SIMILAIRES
import Partie2_lire_article_blog5 from "../components/articles/Partie2_lire_article_blog5";

// CTA FINAL
import Partie2_lire_article_blog6 from "../components/articles/Partie2_lire_article_blog6";

const LireArticle: React.FC = () => {
  return (
    <main
      className="
        min-h-screen
        bg-white
        pt-[100px]
        overflow-x-hidden
      "
    >
      {/* HERO */}
      <Partie2_lire_article_blog />

      {/* CONTENU 1 */}
      <Partie2_lire_article_blog2 />

      {/* CONTENU 2 */}
      <Partie2_lire_article_blog3 />

      {/* CONCLUSION + PARTAGE */}
      <Partie2_lire_article_blog4 />

      {/* ARTICLES SIMILAIRES */}
      <Partie2_lire_article_blog5 />

      {/* CTA FINAL */}
      <Partie2_lire_article_blog6 />
    </main>
  );
};

export default LireArticle;