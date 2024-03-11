import { createContext, useReducer } from "react";

// const [state, dispatch] = useReducer(reducer, initialArg)
// if we provide something inside createContext, that will be the default value
// and we will start to get auto-suggestions

export const PostList = createContext({
  postList: [],
  addPost: (post) => {},
  addInitialPosts: () => {},
  deletePost: (postId) => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post)=> post.id !== action.payload.postId);
    }
    else if (action.type === "ADD_INITIAL_POST"){
        newPostList = action.payload.posts;
    }
    else if (action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList];
    }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  // we are going to have two actions, one for adding posts and other for deleting posts
  const addInitialPosts = (posts) => {
    dispatchPostList({
        type: "ADD_INITIAL_POST",
        payload: {
            posts
        }
    });
  };

  const addPosts = (posts)=>{
    dispatchPostList();
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  return (
    <PostList.Provider value={{ postList, addPosts, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};


const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "hi friendss, i'm going yo mumbai for my vacations. hope to enjoy. peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["mumbai", "vacations", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gye bhai",
    body: "char sal ke masti ke bad v ho gye pass...hard to believe",
    reactions: 15,
    userId: "user-12",
    tags: ["graduating", "unbelievable"],
  },
];

export default PostListProvider;
