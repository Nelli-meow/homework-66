import * as React from 'react';
import { useEffect, useState } from 'react';
import { IMeal } from '../../types';
import ButtonLoading from '../UI/ButtonLoading/ButtonLoading.tsx';

const initialForm = {
  category: '',
  description: '',
  kcal: 0,
}

interface Props {
  submitForm: (meal: IMeal) => void;
  mealToEdit?: IMeal;
  isLoading?: boolean;
}

const MealForm: React.FC<Props> = ({submitForm,mealToEdit,isLoading = false}) => {
  const [meal, setMeal] = useState<IMeal>({...initialForm});

  useEffect(() => {
    if(mealToEdit) {
      setMeal(prevState => ({
        ...prevState,
        ...mealToEdit,
      }));
    }

  },[mealToEdit])

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
        <h2>{mealToEdit ? 'Edit' : 'Add'} meal</h2>
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
              name="description"
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
          <button type="submit" className="btn btn-outline-info d-flex align-items-center">
            <span className="me-2">{mealToEdit ? 'Edit' : 'Save'}</span>
            {isLoading ? <ButtonLoading/> : null}
          </button>
        </form>
      </div>
  );
};

export default MealForm;