import * as React from 'react';
import { NavLink } from 'react-router-dom';

const AddButton: React.FC = () => {

  return (
    <NavLink to="/meals/new-meal" type='button' className="btn btn-outline-info">
      Add new meal
    </NavLink>
  );
};

export default AddButton;