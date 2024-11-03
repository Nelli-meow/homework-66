import * as React from 'react';
import AddButton from '../../components/AddButton/AddButton.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IMeals, IMealsApi } from '../../types';
import MealItem from '../../components/MealItem/MealItem.tsx';
import axiosApi from '../../axiosAPI.ts';

const MainPage = () => {
  const [meal, setMeal] = useState([]);
  const [calories, setCalories] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosApi.get<IMealsApi>('meals.json');
      const mealsResponse = response.data;

      if (mealsResponse) {
        const mealsFromApi = Object.keys(mealsResponse).map(mealKey => {
          const meals = { ...mealsResponse[mealKey] };

          return {
            id: mealKey,
            ...meals,
          };
        });

        setMeal(mealsFromApi);

        const totalCalories = mealsFromApi.reduce((acc , mealItem: IMeals) => {
          return acc + Number(mealItem.kcal);
        }, 0);

        setCalories(totalCalories);
      }

    } catch (e) {
      console.error(e);
    }
  }, []);


  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const deleteMeal = async (id: string) => {
    try {
      await axiosApi.delete(`meals/${id}.json`);
      void fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-between mt-5">
        Total Calories: {calories}
        <AddButton/>
      </div>
      <div className="container mt-5">
        {meal.length === 0 ? (
          <p className="text-center m-5">No meals :(</p>
        ) : (
          <>
            {
              meal.map((m) => (
                <div key={m.id} className="mb-3">
                  <MealItem meal={m} onDelete={deleteMeal} />
                </div>
              ))
            }
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
