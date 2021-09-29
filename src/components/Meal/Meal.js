import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    const { handleAddToOrder, meal } = props;
    return (
        <div>
            <div className="meal">
                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <button onClick={() => handleAddToOrder(meal)}>Add This Food</button>
            </div>
        </div>
    );
};

export default Meal;