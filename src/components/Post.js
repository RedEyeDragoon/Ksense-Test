import React, { useEffect, useState } from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(data => {
      const userPost = data.filter(post => post.userId === props.id);
      return setPost(userPost);
    })
  }, [props.id])

  console.log(post);
  return (
    <div className={classes.main}>
      {post.map(post => {
        return(
          <div className={classes.post} key={post.id}>
            <h3>{post.title}</h3>
            <div className={classes.body}>
              {post.body}
            </div>    
          </div>
        )
      })}
    </div>
  )
};

export default Post;