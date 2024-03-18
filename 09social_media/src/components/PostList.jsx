import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage';
import { set } from 'mongoose';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);
    const navigate = useNavigate();
    const [fetching, setFetching] = useState(false);
    useEffect(()=>{
      setFetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
      fetch("https://dummyjson.com/posts", {signal}).
        then((response)=> response.json()).then(
            (data)=> {
                addInitialPosts(data.posts);
                setFetching(false);
            }
        );

        return ()=>{
          console.log("cleaning up useEffect");
          controller.abort();
        }
    }, []);

  return (
    <>
    {fetching && <LoadingSpinner />}
    {!fetching && postList.length === 0 && <WelcomeMessage />}
    {!fetching && postList.map((post) => <Post key={post.id} post={post}/>)}
    </>
  )
}

export default PostList
