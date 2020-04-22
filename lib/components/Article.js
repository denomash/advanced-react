import React from "react";

const Article = (props) => {
  const { articles, author } = props;
  return (
    <div>
      <div>{articles.title}</div>
      <div>{articles.data}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{articles.body}</div>
    </div>
  );
};

export default Article;
