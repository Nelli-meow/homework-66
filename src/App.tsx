import './App.css'
import MainPage from './containers/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <MainPage/>
      <Routes>
        <Route path="*" exact component={<p className="text-center m-5">Page is not found :(</p>} />
      </Routes>
    </>
  )
};

export default App
