import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);
    const handlePostsClick = () => {
        let newPostList;
        fetch("https://dummyjson.com/posts").
        then((response)=> response.json()).then(
            (data)=> {
                addInitialPosts(data.posts);
            }
        )
        return newPostList;
    }

  return (
    <>
    {postList.length === 0 && <WelcomeMessage onGetPostsClick={handlePostsClick}/>}
    {postList.map((post) => <Post key={post.id} post={post}/>)}
    </>
  )
}

export default PostList
