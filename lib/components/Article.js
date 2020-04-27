import React from "react";
import PropTypes from "prop-types";

import StoreProvider from "./StoreProvider";

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.85em",
    color: "#888S",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};

const formatDate = (date) => new Date(date).toDateString();

const Article = (props) => {
  const { article } = props;
  const author = props.store.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{formatDate(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default StoreProvider(Article);
