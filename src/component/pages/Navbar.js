import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdApartment } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="heading">
          <div>Doctor Details</div>
          <div>Doctor Schedule</div>
        </div>
        <nav className="a_nav">
          <ul>
            <li>
              <AiFillHome className="icon" />
              Clinic
            </li>
            <li>
              <FaUserCircle className="icon" />
              Online
            </li>

            <li>
              <MdApartment className="icon" />
              Physical Visit
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
