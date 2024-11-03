import * as React from 'react';
import AddButton from '../../components/AddButton/AddButton.tsx';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IMealsApi } from '../../types';
import MealItem from '../../components/MealItem/MealItem.tsx';

const MainPage = () => {
  const [meal, setMeal] = useState([]);


  const fetchData = useCallback( async () => {
    try {
      const response = await axiosAPI.get<IMealsApi>('meals.json');

      if(response.data) {
        const mealsFromApi = Object.keys(response.data).map(mealKey  => ({
          id: mealKey,
          ...response.data[mealKey],
        }));
        setMeal(mealsFromApi);
      }
    } catch (e) {
      console.error(e);
    } finally {

    }
  }, []);

  useEffect(() => {
    void fetchData();
  },[fetchData])


  return (
    <>
      <div className="container d-flex align-items-center justify-content-between mt-5">
        тут будут кк блюд
        <AddButton/>
      </div>
      <div className="container mt-5">
        {meal.length === 0 ? (<p className="text-center m-5">No meals :(</p>
        ) : (
          <>
            {
              meal.map((meal) => (
                <div key={meal.id} className="mb-3">
                  <MealItem meal={meal}/>
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