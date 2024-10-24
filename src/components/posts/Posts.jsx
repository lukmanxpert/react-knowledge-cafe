import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
const Posts = ({handleBookmarkBtn}) => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('posts.json')
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=> console.log(err, "error"))
    }, [])
    return (
        <div className="md:w-2/3 md:float-left">
            {
                posts.map((post)=><Post handleBookmarkBtn={handleBookmarkBtn} key={post.id} post={post}></Post>)
            }
        </div>
    );
};
Posts.propTypes = {
    handleBookmarkBtn: PropTypes.func
}
export default Posts;