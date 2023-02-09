const Appointment1 = ({ data }) => {
  console.log(data);
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

  for (let i = 0; i < days?.length - 1; i++) {
    console.log(days[i].week, days[i].date);
    for (let j = 0; j < time?.length - 1; j++) {
      if (days[i].date === time[j].date) {
        console.log(time[j].time);
      }
    }
  }

  return (
    <div className="main-table">
      <div className="date-div">
        {days?.map((value) => (
          <div>
            <p className="week">{value.week}</p>
            <p className="date">{value.date}</p>
            {time?.map((v) => {
              return v.date == value.date ? (
                <div>
                  <p className="time">{v.time}</p>
                </div>
              ) : null
            })}
          </div>
        ))}
      </div>
      <div className="time-div"></div>
    </div>
  );
};

export default Appointment1;
