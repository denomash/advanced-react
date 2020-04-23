import React from "react";

import Article from "./Article";

const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map((article) => {

        return <Article
          key={article.id}
          article={article}
          author={props.authors[article.authorId]}
        />;
      })}

      yooo
    </div>
  );
};

export default ArticleList;
