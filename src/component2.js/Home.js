import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn, MdTimer } from "react-icons/md";
import useFetch from "../hooks/usefetch";
import axios from "./apis";
import Appointment1 from "./pages/Appointment1";
const Home = () => {
  const [data] = useFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/",
    requestConfig: {
      ServiceProviderId: "eb9ce487-8c86-49ef-aff9-17dd2f49d459",
      AppointmentType: "Clinic",
    },
  });

  return (
    <>
      <div className="container">
        <div className="clinic">
          <div className="clinic_info">
            {data?.cliniclist?.map((data) => {
              return (
                <div key={data.clinicId}>
                  <h3>
                    <AiFillHome className="home-icon" /> {data.clinicname}
                  </h3>
                  <div className="location">
                    <MdLocationOn className="location-icon" /> <b>Location</b>
                    <p>{data.cliniccurrentaddress}</p>
                  </div>
                  <div className="appoinment">
                    <MdTimer className="clock-icon" />
                    <b>Appointment</b>
                    <p>
                      <span className="end">
                        {data.appointmentStartingDate}
                      </span>
                      -
                      <span className="start">
                        {data.appointmentEndingDate}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="clinic_calander">
            <Appointment1 data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
