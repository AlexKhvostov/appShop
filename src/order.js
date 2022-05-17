import {Fragment, useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './shop.svg';
import OrderItem from "./orderItem";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {responsivePropType} from "react-bootstrap/createUtilityClasses";

// http://localhost:3001/products

export default function Order() {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();

            setOrders(data)
            console.log("orders-f")
            console.log(orders)
        }

        fetchData()

    }, [])

    const countUp = (id, newCount) => {

        console.log(id, newCount)
        if (newCount <= 0) {
            newCount = 0;
        }
        setOrders(orders.map((e, i) => {
            if (i == id) {

                return {...e, count: newCount}
            } else {
                return e
            }
        }))
        console.log("orders-s")
        console.log(orders)
    }

    const delItem = (idItem) => {
        console.log("idItem", idItem);
        setOrders(orders.filter((e, i) => i !== Number.parseInt(idItem)))

    }

    return (

        <Fragment>
            <div className="alert alert-primary" role="alert">
                <img src={img} alt="shop"/> Shopping Cart
            </div>
            <table>
                <thead>
                <tr>
                    <td>Фото:</td>
                    <td>Наименование:</td>
                    <td>Цена:</td>
                    <td>Количество:</td>
                    <td>del</td>
                    <td>Сумма:</td>
                </tr>
                </thead>
                <tbody>
                {orders.map((o, i) => <OrderItem key={i} itemId={i} item={o} delItem={delItem} count={o.count}
                                                 editCount={countUp}/>)}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="5">
                        Итого:
                    </td>
                    <td>
                        {orders.reduce((s, o) => s += Number.parseFloat(o.price) * Number.parseFloat(o.count), 0)}
                    </td>
                </tr>

                </tfoot>
            </table>


        </Fragment>)
}