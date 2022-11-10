import "../App.css";

// The Header

const Header = ({handleGetusers}) => {
  return (
    <header className="header">
      <h2 className="header__title">User Card Grid Layout </h2>
      <button className="btn" onClick={handleGetusers}>
          Fetch Users
      </button>
      
    </header>
  );
};

export default Header;
