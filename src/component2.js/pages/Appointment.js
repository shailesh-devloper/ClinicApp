const Appointment = ({ data, date }) => {
  return (
    <div className="main-table">
      {data?.data
        ?.filter((value) => value.appointmentDate === date)
        .map((data) => (
          <div key={data.appointmentSettingID}>
            <div className="week">
              <b>{data.appointmentDayOfWeek}</b>
            </div>
            <div className="date">
              <p>{data.appointmentDate}</p>
            </div>
            <div className="time">
              <p>
                {data.appointmentstartime} - {data.appointmentendtime}
              </p>
            </div>
          </div>
        ))}
      {/* {data?.data
        ?.filter((value) => value.appointmentDate === date)
        .map((data) => (
          <div className="time">
            <p>
              {data.appointmentstartime} - {data.appointmentendtime}
            </p>
          </div>
        ))} */}
    </div>
  );
};

export default Appointment;
