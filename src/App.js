
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(resData => {
        setPosts(resData)
      }).catch(err => {
        console.log('API Error', err);
      })
  }, []);

  return (
    <div className="App">
      <h1 style={{ marginInlineStart: 24 }}>Article Titles</h1>
      <ul>
        {posts.map(post => {
          return <li>{post.title}</li>
        })}
      </ul>
    </div>
  );
}
export default App;
