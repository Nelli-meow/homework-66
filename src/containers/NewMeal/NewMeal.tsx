import * as React from 'react';
import MealForm from '../../components/MealFrom/MealForm.tsx';
import { useNavigate } from 'react-router-dom';
import { IMeals } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const NewMeal = () => {
  const navigate = useNavigate();

  const submitForm = async (meal: IMeals) => {
    try {

      await axiosAPI.post(`/meals.json`, {...meal});
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      alert('Meal has been added');
    }
  }

  return (
    <>
      <MealForm submitForm={submitForm}/>
    </>
  );
};

export default NewMeal;