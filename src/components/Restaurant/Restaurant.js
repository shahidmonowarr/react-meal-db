import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../localstorage/localstorage';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    useEffect(() => {
        console.log('call localstorage');
        if (meals.length) {
            const savedDb = getDb();
            const savedOrder = [];
            for (const mealId in savedDb) {
                const meal = meals.find(ml => ml.idMeal === mealId);
                const quantity = savedDb[mealId];
                meal.quantity = quantity;
                savedOrder.push(meal);
            }
            setOrder(savedOrder);
        }
    }, [meals])
    const handleAddToOrder = meal => {
        meal.quantity = 1;
        const newOrder = [...order, meal];
        setOrder(newOrder);
        addToDb(meal.idMeal);
    }
    return (
        <div className="restaurant-menu">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToOrder={handleAddToOrder}
                    ></Meal>)
                }
            </div>
            <div className="order-list">
                <OrderList order={order}></OrderList>
            </div>
        </div>

    );
};

export default Restaurant;