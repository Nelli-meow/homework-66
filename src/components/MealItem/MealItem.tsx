import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IMeals } from '../../types';

interface Props {
  meal: IMeals;
}

const MealItem: React.FC<Props> = ({meal}) => {
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
          <NavLink to="/" className="btn btn-outline-primary mb-3">Edit</NavLink>
          <NavLink to="/" className="btn btn-outline-danger">Delete</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MealItem;