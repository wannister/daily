'use client';
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import "./CustomCalendar.css";

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

  const [calendarEvents, setCalendarEvents] = useState([]);

  // Function to customize event rendering
  const eventContent = (arg) => {
    return (
      <div>
        <p>{arg.event.title}</p>
      </div>
    );
  };

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let id = eventEl.dataset.id;
        let title = eventEl.getAttribute("title");
        console.log(title)
        return {
          title: title,
        };
      }
    });
  });

  // const eventContent = (info) => {
  //   const { timeText, event } = info;

  //   // Customize the event rendering to display only the title
  //   return (
  //     <div>
  //       <div>{event.title}</div>
  //     </div>
  //   );
  // };

  const handleEventReceive = (eventInfo) => {
    console.log(eventInfo)
    const { event, draggedEl, view } = eventInfo;

    // const { start, end } = view.computeDateRange(
    //   draggedEl.getAttribute('data-date')
    // );
    // event.setDates(start, end);
    // console.log({ start, end })
    // const newEvent = {
    //   id: eventInfo.draggedEl.getAttribute("data-id"),
    //   title: eventInfo.draggedEl.getAttribute("title"),
    // };

    setCalendarEvents(calendarEvents.concat(event))
  };

  console.log(calendarEvents)


  return (
    <div>
      <div id="external-events">
        <div
          className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
          title={'title'}
          data-id={'id'}
          key={'key'}
          style={{
            cursor: "pointer"
          }}
        >
          Test Dish 1</div>
      </div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridMonth",
        }}
        events={calendarEvents}
        droppable={true}
        eventReceive={handleEventReceive}
        // style={{ maxWidth: 500, maxHeight: 500 }}
        slotDuration="08:00:00" // Set the duration to 1 hour
        slotLabelContent={(slotInfo) => {
          const slotHour = slotInfo.date.getHours();
          if (slotHour >= 0 && slotHour < 8) {
            return 'Morning';
          } else if (slotHour >= 8 && slotHour < 16) {
            return 'Afternoon';
          } else if (slotHour >= 16 && slotHour <= 23) {
            return 'Evening';
          }
          return '';
        }}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
        eventContent={eventContent}
        allDaySlot={false}
      />
    </div>
  );
};

export default CustomCalendar;
