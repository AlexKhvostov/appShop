import {useState, useEffect, Fragment,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";

export default function RepsInfo() {
    const [repsInfo,setRepsInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/AlexKhvostov/repos");
            const data = await response.json();
            setRepsInfo(data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("posts",repsInfo)
    },[repsInfo])


    return (<div> 3 </div> )

}
