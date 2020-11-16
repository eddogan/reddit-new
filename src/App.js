import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = () =>
    fetch("3Dprinting.json")
      .then(data => {
        return data.json();
      })
      .then(response => {
        setData(response.data.children);
      })
      .catch(error => {
        return error;
      });

  const posts = data.map(post => {
    const { selftext, url } = post.data;
    return (
      <div>
        <a href={selftext}>{url}</a>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [data]);

  return <>{posts}</>;
}
