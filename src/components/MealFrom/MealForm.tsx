import * as React from 'react';

const MealForm = () => {


  const category = [
    { title: 'Breakfast', id: 'Breakfast' },
    { title: 'Snack', id: 'Snack' },
    { title: 'Lunch', id: 'Lunch' },
    { title: 'Dinner', id: 'Dinner' },
  ];

  return (
    <div className="container mt-5">
      <h2>Add meal</h2>
      <form>
        <div className="my-3">
          <label tmlFor="text">Category</label>
          <select
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
          <label htmlFor="text">Meal description</label>
          <textarea
            name="text"
            className="form-select form-select-sm"
            aria-label="Small select example"></textarea>
        </div>
        <div className="my-3">
          <label htmlFor="text">Kcal</label>
          <input
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