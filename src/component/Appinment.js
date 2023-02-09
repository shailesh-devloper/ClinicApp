import AppoinmentHome from "./pages/AppoinmentHome";
import Navbar from "./pages/Navbar";

const Appoinment = () => {
  return (
    <div className="home-container">
      <div className="appoinment_container">
        <Navbar />
        <AppoinmentHome />
      </div>
    </div>
  );
};
export default Appoinment;
