import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-info-subtle">
      <div className="container py-4">
        <NavLink to="/" className="text-black fs-4 text-decoration-none">Calorie tracker</NavLink>
      </div>
    </header>
  );
};

export default Header;