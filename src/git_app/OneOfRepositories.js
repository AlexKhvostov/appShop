import {useState, useEffect, Fragment, React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";
import {useParams} from "react-router";

export default function OneOfRepositories() {
    const {name} = useParams();

    const [oneOfRepositories, setOneOfRepositories] = useState([])

    useEffect(() => {
        console.log(name);

        async function fetchData() {
            const response = await fetch("https://api.github.com/repos/AlexKhvostov/" + name);
            const data = await response.json();
            setOneOfRepositories(data)
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log("posts", oneOfRepositories)
    }, [oneOfRepositories])

    return (
        <Fragment>
            <div>
                <table className={"text-warning"}>
                    <tbody>
                    <tr>
                        <td>id репозитория:</td>
                        <td>{oneOfRepositories.id}</td>

                    </tr>
                    <tr>
                        <td>Имя репозитория:</td>
                        <td>{oneOfRepositories.name}</td>
                    </tr>
                    <tr>
                        <td>Полное имя:</td>
                        <td>{oneOfRepositories.full_name}</td>
                    </tr>
                    </tbody>
                </table>

                <a href={oneOfRepositories.html_url}> {oneOfRepositories.html_url}</a>
            </div>
        </Fragment>
    )
}
