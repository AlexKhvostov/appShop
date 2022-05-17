import {Fragment, useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderItem(props){

    const item = props.item

    
    
    return (
        <tr>
            <td>
                <img src={item.image} alt="image"/>
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button className = 'btn btn-primary btn-sm min'  onClick = {(e) => props.editCount(props.itemId,Number.parseFloat(props.item.count)-1)}> -1 </button>
                <input type={"number"} min={0} className="countInput" value={props.item.count}  disabled={true} ></input>
                <button className = 'btn btn-primary btn-sm max' onClick = {(e) => props.editCount(props.itemId,Number.parseFloat(props.item.count)+1)} > +1 </button>
            </td>
            <td>
                <button className = ' btn btn-danger btn-sm ' onClick={(e)=>props.delItem(props.itemId)}>x</button>
            </td>
            <td>{Number.parseFloat(props.item.count) * Number.parseFloat(item.price)}</td>
        </tr>
    )

}