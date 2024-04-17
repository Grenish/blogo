const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-2 w-[90%] m-auto">
        <div className="">Blogo</div>
        <div className="">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Search</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
