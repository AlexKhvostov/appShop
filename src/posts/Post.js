import {useState, useEffect, Fragment, React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {Link} from "react-router-dom";
import {useParams} from "react-router";


export default function Post() {
    const {postId} = useParams();
    const [post, setPost] = useState()


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://192.168.0.200:3000/posts/${postId}`);
            const data = await response.json();
            setPost(data)
        }

        fetchData()
    }, [postId])


    return (

        <div className={"post"}>
            <button>
                <Link className={"link"} to="/">Back</Link>
            </button>
            <div> {post?.id} </div>
            <div> {post?.title} </div>
            <div className={"arrImage"}>

                <img className="postImgBig"  src={post?.poster} alt=""/>
                <br />
                {post?.images.map((postImg, ind) => {
                    return (
                        <img className="postImg" key={ind} src={postImg} alt=""/>
                    )

                })}
            </div>


            <div className={"intro"}> {post?.intro} </div>

            <div className={"arrBody"}>
                {post?.body.map((postLine, ind) => {
                    return (
                        <p key={ind} >{postLine} </p>
                    )

                })}
            </div>

        </div>
    )

}