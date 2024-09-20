import { useState } from 'react';

import FoodForm from './FoodForm';

const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [editingFood, setEditingFood] = useState(null);

    const addFood = (food) => {
        setFoods([...foods, food]);
    };

    const editFood = (food) => {
        setEditingFood(food);
    };

    const updateFood = (updatedFood) => {
        setFoods(foods.map(food => food.id === updatedFood.id ? updatedFood : food));
        setEditingFood(null);
    };

    const deleteFood = (id) => {
        setFoods(foods.filter(food => food.id !== id));
    };

    return (
        <div>
            <h1>Food List</h1>
            {editingFood ? (
                <FoodForm food={editingFood} onSubmit={updateFood} />
            ) : (
                <FoodForm onSubmit={addFood} />
            )}
            <ul>
                {foods.map(food => (
                    <li key={food.id}>
                        {food.name}
                        <button onClick={() => editFood(food)} style={{backgroundColor: 'blueviolet'}}>Edit</button>
                        <button onClick={() => deleteFood(food.id)} style={{backgroundColor:'red'}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
