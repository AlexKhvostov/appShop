import {useState, useEffect, Fragment} from "react";
import List from "./List"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ToDo() {
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addItem = (itemName) => {

        setToDoList([...toDoList, {
            itemName: itemName,
            status: false
        }])
    }

    const finishTask = (id) => {
        console.log("завершить", id)

        setToDoList(
            toDoList.map((e, i) => {
                if (i == id) {
                    e.status = true;
                }
                return e;

            })
        )


    }

    const delTask = (id) => {
        console.log(" удлить  ", id)
        setToDoList(
            toDoList.filter((e, i) => i != id)
        )
    }

    return (
        <Fragment>
            <h1 className="text-center"> To Do </h1>
            <div className="d-flex inputNewTask">

                <input className="text form-control" value={newTask} onChange={(event) => {
                    setNewTask(event.target.value)
                }}/>
                <button className={"btn btn-primary"} onClick={() => addItem(newTask)}>Добавить</button>

            </div>

            <table>
                <thead>
                <tr>
                    <td>No</td>
                    <td>To Do Item</td>
                    <td> Status</td>
                    <td> Action</td>
                </tr>
                </thead>

                <tbody>
                {toDoList.map((t, i) =>
                    <List key={i} num={i} status={t.status} value={t.itemName} done={finishTask} del={delTask}/>
                )}
                </tbody>

            </table>


        </Fragment>
    )
}