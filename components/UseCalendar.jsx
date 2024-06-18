import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { exportContext } from "./useStateContext/StateContext";

export default function UseCalendar({
  toggleCalendar,
  setToggleCalendar,
  setSelectedDate,
  selectedDate,
}) {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null);

  const handleDateSelect = (date) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setSelectedDate(formattedDate);
  };

  const closeCalender = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setToggleCalendar(false);
    }
  };

  useEffect(() => {
    if (toggleCalendar) {
      document.addEventListener("click", closeCalender);
    }

    return () => document.removeEventListener("click", closeCalender);
  }, [toggleCalendar, closeCalender]);

  return (
    <div
      ref={calendarRef}
      className={`relative z-10 ${
        toggleCalendar ? "calendar-opened" : "calendar-closed"
      }`}
    >
      <div className="bg-oxfordBlue rounded-md text-white p-4 absolute -top-5 left-2">
        <Calendar value={date} onClickDay={handleDateSelect} />
      </div>
    </div>
  );
}
