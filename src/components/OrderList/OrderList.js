import React from 'react';
import './OrderList.css'
const OrderList = (props) => {
    const { order } = props;

    // order reducing 
    // const countReducer = (previous, meal) => previous + meal.quantity;
    // const count = order.reduce(countReducer, 0);
    // another way
    // let count = 0;
    // for (const meal of order) {
    //     count = count + meal.quantity;
    // }
    //another way
    const count = order.reduce((previous, meal) => previous + meal.quantity, 0)

    console.log(order);
    return (
        <div className="order-list">
            <h2>Order List</h2>
            <h4>Items Ordered: {count}</h4>

        </div>
    );
};

export default OrderList;