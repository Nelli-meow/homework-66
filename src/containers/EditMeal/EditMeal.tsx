import * as React from 'react';
import MealForm from '../../components/MealFrom/MealForm.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IMeal, IMeals } from '../../types';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosAPI.ts';
import axiosAPI from '../../axiosAPI.ts';

const EditMeal = () => {
  const [meal, setMeals] = useState<IMeal>();
  const params = useParams<{idMeal: string}>();

  const fetchOneMeal = useCallback(async (id: string) => {
    try {
      const response = await axiosAPI<IMeal>(`/meals/${id}.json`);

      if(response.data) {
        setMeals(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {

    }

  },[])

  const submitForm = async (meal: IMeals) => {
    try {
      if(params.idMeal) {
        console.log(params.idMeal);
        await axiosApi.put(`meals/${params.idMeal}.json`, {...meal});
      }

    } catch (e) {
      console.error(e);
    } finally {

    }
  }

  useEffect(() => {
    if(params.idMeal) {
      void fetchOneMeal(params.idMeal);
    }
  },[params.idMeal, fetchOneMeal]);

  return (
    <div>
      {meal ?
      <>
        <MealForm submitForm={submitForm} mealToEdit={meal}/>
      </>
        :
        <p className="text-center m-5">Meal is not found :(</p>
      }
    </div>
  );
};

export default EditMeal;