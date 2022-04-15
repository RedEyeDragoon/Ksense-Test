import React, { useState } from "react";

import Table from './components/Table';
import Post from './components/Post';
import "./style.css";

export default function App() {
  const [id, setId] = useState('');

  const viewPost = (id) => {
    setId(id);
  }

  return (
    <div>
      <Table onView={viewPost}/>
      <Post id={id} />
    </div>
  );
}
