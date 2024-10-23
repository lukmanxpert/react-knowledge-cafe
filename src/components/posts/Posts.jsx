import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('posts.json')
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=> console.log(err, "error"))
    }, [])
    return (
        <div className="w-2/3">
            {
                posts.map((post)=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;