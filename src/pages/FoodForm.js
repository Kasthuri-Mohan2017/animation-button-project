

import { useState } from 'react';

const FoodForm = ({ food = {}, onSubmit }) => {
    const [name, setName] = useState(food.name || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const foodData = {
            id: food.id || Date.now(),
            name,
        };
        onSubmit(foodData);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Food Name"
                required
            />
            <button type="submit">{food.id ? 'Update Food' : 'Add Food'}</button>
        </form>
    );
};

export default FoodForm;
