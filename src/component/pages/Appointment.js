const Appointment = ({ data }) => {
  let time = data?.data?.map((d) => {
    return {
      date: d.appointmentDate,
      time: `${d.appointmentstartime} - ${d.appointmentendtime}`,
    };
  });
  let days = data?.appointmentdatedata?.map((d) => {
    return {
      week: d.appointmentDayOfWeek,
      date: d.appointmentDate,
    };
  });
return (
    <div className="main-table">
      <div className="date-div">
        {days?.map((value) => (
          <div key={value.date}>
            <p className="week">{value.week}</p>
            <p className="date">{value.date}</p>
            {time?.map((v) => {
              return v.date === value.date ? (<p className="time">{v.time}</p> ) : null
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
