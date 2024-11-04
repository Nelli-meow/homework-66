import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IMeals } from '../../types';
import ButtonLoading from '../UI/ButtonLoading/ButtonLoading.tsx';

interface Props {
  meal: IMeals,
  onDelete: (id: string) => void,
  isLoading?: boolean,
}

const MealItem: React.FC<Props> = ({meal, onDelete, isLoading = false}) => {
  return (
    <div className="border border-3 rounded p-3">
      <div className="d-flex align-items-center justify-content-sm-between">
        <div>
          <h4 className="text-body-tertiary">{meal.category}</h4>
          <h3>{meal.description}</h3>
        </div>
        <div>
          <p><strong>{meal.kcal} kcal</strong></p>
        </div>
        <div className="d-flex flex-column">
          <NavLink to={`/meals/${meal.id}/edit`} className="btn btn-outline-primary mb-3">
            <span className="me-2">Edit</span>
          </NavLink>
          <button disabled={isLoading} type="button" className="btn btn-outline-danger"
                  onClick={() => onDelete(meal.id)}>
            <span className="me-2">Delete</span>
            {isLoading ? <ButtonLoading/> : null}
              </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;