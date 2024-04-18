import { icons } from "../icons";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-2 w-[90%] m-auto">
        <div className="flex items-center">
          <img
            src={icons.blogo.src}
            alt={icons.blogo.alt}
            className="w-11 h-11 object-cover"
          />
          <span className="font-germania text-2xl pointer-events-none">Blogo</span>
        </div>
        <div className="">
          <ul className="flex gap-4 items-center">
            <li>
              <img
                src={icons.home.src}
                alt={icons.home.alt}
                className="w-5 h-5 object-cover"
              />
            </li>
            <li>
              <img
                src={icons.search.src}
                alt={icons.search.alt}
                className="w-5 h-5 object-cover"
              />
            </li>
            <li>
              <img
                src={icons.login.src}
                alt={icons.login.alt}
                className="w-6 h-6 object-cover"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
