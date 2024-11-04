import * as React from 'react';
import MealForm from '../../components/MealFrom/MealForm.tsx';
import { useNavigate } from 'react-router-dom';
import { IMeals } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';

const NewMeal = () => {
  const navigate = useNavigate();
  const [addLoading, setAddLoading] = useState<boolean>(false);

  const submitForm = async (meal: IMeals) => {
    try {
      setAddLoading(true);
      await axiosAPI.post(`/meals.json`, {...meal});
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setAddLoading(false);
    }
  }

  return (
    <>
      <MealForm submitForm={submitForm} isLoading={addLoading}/>
    </>
  );
};

export default NewMeal;