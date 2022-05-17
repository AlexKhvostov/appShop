
export default function List(props) {

    return (
        <tr >
            <td>{props.num}</td>

            <td className={props.status? "nameItem done" : "nameItem"}>{props.value}</td>
            <td>{props.status? "Завершена" : "В работе"}</td>
            <td className={"action"}>
                <button type="button" onClick={()=> props.done(props.num)} className={"btn btn-danger"} >Закончить</button>
                <button type="button" onClick={()=> props.del(props.num)} className="btn btn-success">Удалить</button>
            </td>

        </tr>
    )


}
