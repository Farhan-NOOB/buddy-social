import React, { useEffect,useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const style={
        textAlign: 'center',
        backgroundColor:'black',
        color:'white'
    }
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data =>setPosts(data))
    },[])
    return (
        <div>
             <h1 style={style}>Social Buddy</h1>
            {
                posts.map(post =><Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;