import {useState, useEffect, Fragment,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";


export default function Posts() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://192.168.0.200:3000/posts");
            const data = await response.json();
            setPosts(data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("posts",posts)
    },[posts])


    return (

        posts.map((post,postId)=>{
            return(
                <div key={postId}  className={"OneOfPosts d-flex"}>
                    <div className={"postImage"}>
                        <img src={post.poster} alt="poster"/>
                    </div>
                    <div>
                        <Link className={"link"} to={"/post/"+post.id}>{post.id}</Link>
                        <div>{post.id}</div>
                        <div>{post.title}</div>
                        <div>{post.intro}</div>

                    </div>
                </div>
            )

        })
    )

}