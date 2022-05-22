import {useState, useEffect, Fragment, React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";
import moment from "moment"


export default function UserInfo() {
    const [userInfo, setUserInfo] = useState([])
    const [repsInfo, setRepsInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/AlexKhvostov");
            const data = await response.json();
            setUserInfo(data)
        }

        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.github.com/users/AlexKhvostov/repos");
            const data = await response.json();
            setRepsInfo(data)
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log("posts", userInfo)
    }, [userInfo])

    useEffect(() => {
        console.log("posts", repsInfo)
    }, [repsInfo])


    return (<div>
        <div>{userInfo.name}</div>
        <div>{userInfo.type}</div>
        <div>{userInfo.created_at}</div>
        <table>
            <thead>
            <tr>
                <td>Ссылка:</td>
                <td>Дата создания:</td>
                <td>Время обновления:</td>
            </tr>
            </thead>
            <tbody>
            {repsInfo.map((rep, ind) => {
                    return (
                        <tr key={ind}>
                            <td key={ind + "link"}><Link to={`/AlexKhvostov/${rep.name}`}>{rep.name}</Link></td>
                            <td key={ind + "create"}>{rep.created_at}</td>
                            <td key={ind + "time"}>{rep.updated_at}</td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>

    </div>)

}

