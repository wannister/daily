// components/CustomCalendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CustomCalendar = () => {
  const generateEvents = () => {
    const events = [];

    // Get today's date
    const startDate = new Date();

    // Loop to generate events for each day indefinitely
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      // Event 1
      events.push({
        title: `Breakfast`,
        start: `${date.toISOString().split("T")[0]}T08:00:00`,
        end: `${date.toISOString().split("T")[0]}T10:00:00`,
      });

      // Event 2
      events.push({
        title: `Lunch`,
        start: `${date.toISOString().split("T")[0]}T12:00:00`,
        end: `${date.toISOString().split("T")[0]}T14:00:00`,
      });

      // Event 3
      events.push({
        title: `Dinner`,
        start: `${date.toISOString().split("T")[0]}T16:00:00`,
        end: `${date.toISOString().split("T")[0]}T18:00:00`,
      });
    }

    return events;
  };

  const events = generateEvents();

  // Function to customize event rendering
  const eventContent = (arg) => {
    return (
      <div>
        <p>{arg.event.title}</p>
      </div>
    );
  };
  
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      //   views={customViews}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "threePeriods,timeGridWeek,timeGridMonth",
      }}
      events={events}
      eventContent={eventContent}
    />
  );
};

export default CustomCalendar;
