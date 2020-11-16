import React, { useState, useEffect } from "react";
import ThreadCard from "./threadCard";
import "../style.css";

export default function Hot(props) {
  const [data, setData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchData = () =>
    fetch("hot.json")
      .then(data => {
        return data.json();
      })
      .then(response => {
        setData(response.data.children);
        setFilteredPosts(response.data.children);
      })
      .catch(error => {
        return error;
      });

  const posts = filteredPosts.map(post => {
    const {
      title,
      url,
      score,
      author,
      thumbnail,
      id,
      num_comments
    } = post.data;
    return (
      <ThreadCard
        key={id}
        title={title}
        url={url}
        score={score}
        author={author}
        thumbnail={thumbnail}
        numcomments={num_comments}
        id={id}
      />
    );
  });

  const searchTitles = () => {
    setFilteredPosts(
      data.filter(thread =>
        thread.data.title.toLowerCase().includes(props.filter)
      )
    );
  };

  const postsViewClass = `postsContainer--${props.view}`;

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredPosts(
      data.filter(thread =>
        thread.data.title.toLowerCase().includes(props.filter)
      )
    );
  }, [props.filter, data]);

  return <div className={postsViewClass}>{posts}</div>;
}
