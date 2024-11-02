import * as React from 'react';
import AddButton from '../../components/AddButton/AddButton.tsx';

const MainPage = () => {
  return (
    <>
      <div className="bg-info-subtle">
        <div className="container">
          <h3 className="py-4">Calorie tracker</h3>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-between mt-5">
        тут будут кк блюд
        <AddButton />
      </div>

    </>
  );
};

export default MainPage;