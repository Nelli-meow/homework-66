import './App.css'
import MainPage from './containers/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import NewMeal from './containers/NewMeal/NewMeal.tsx';
import Header from './components/Header/Header.tsx';
import EditMeal from './containers/EditMeal/EditMeal.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/meals/new-meal" element={<NewMeal/>}/>
        <Route path="/meals/:idMeal/edit" element={<EditMeal/>}/>
        <Route path="*" element={<p className="text-center m-5">Page is not found :(</p>} />
      </Routes>
    </>
  )
};

export default App
