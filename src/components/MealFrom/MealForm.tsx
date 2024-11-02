import * as React from 'react';
import { useEffect, useState } from 'react';
import { IMeal } from '../../types';

const initialForm = {
  category: '',
  description: '',
  kcal: 0,
}

interface Props {
  submitForm: (meal: IMeal) => void;
}

const MealForm: React.FC<Props> = ({submitForm}) => {
  const [meal, setMeal] = useState<IMeal>({...initialForm});

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setMeal(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!meal.category || !meal.description || !meal.kcal) {
      alert('Don\'t leave fields blank');
    } else {
      setMeal({...initialForm});
      submitForm({...meal})
      console.log(meal);
    }

  }

  const category = [
    { title: 'Breakfast', id: 'Breakfast' },
    { title: 'Snack', id: 'Snack' },
    { title: 'Lunch', id: 'Lunch' },
    { title: 'Dinner', id: 'Dinner' },
  ];

  return (
    <div className="container mt-5">
      <h2>Add meal</h2>
      <form onSubmit={onSubmitForm}>
        <div className="my-3">
          <label htmlFor="category">Category</label>
          <select
            value={meal.category}
            onChange={onChangeField}
            name="category"
            className="form-select form-select-sm"
            aria-label="Small select example">
            <option value="" disabled>Select category</option>
            {category.map(category => (
              <option
                key={category.id}
                value={category.id}
              >{category.title}</option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label htmlFor="description">Meal description</label>
          <textarea
            value={meal.description}
            onChange={onChangeField}
            name="description" // Исправление
            className="form-control"
            aria-label="Meal description"></textarea>
        </div>
        <div className="my-3">
          <label htmlFor="kcal">Kcal</label>
          <input
            value={meal.kcal}
            onChange={onChangeField}
            type="number"
            name="kcal"
            min={1}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-outline-info mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default MealForm;