import React, { useState, useEffect } from "react";
import "../style.css";

const SingleThread = ({ match, location }) => {
  const {
    params: { threadId }
  } = match;

  const [data, setData] = useState([]);

  const fetchData = () =>
    fetch("all.json")
      .then(data => {
        return data.json();
      })
      .then(response => {
        setData(
          response.data.children.filter(thread =>
            thread.data.id.toLowerCase().includes(threadId)
          )
        );
      })
      .catch(error => {
        return error;
      });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  return data.map(thread => {
    return (
      <>
        <h2>{thread.data.title}</h2>
      </>
    );
  });
};

export default SingleThread;
