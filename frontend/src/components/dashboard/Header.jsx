const Header = () => {
  return (
    <header className="border-b border-solid border-darkAlt py-4">
      <div className="container">
        <div className="flex items-center justify-between gap-10">
          <h4>Welcome</h4>
          <button className="button button-primary">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
