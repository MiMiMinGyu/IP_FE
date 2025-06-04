import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../../styles/Calendar.css';

const AcademicSchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/schedule`);
        if (!res.ok) {
          throw new Error('Failed to fetch schedule');
        }

        const data = await res.json();

        const mapped = data.map((item) => ({
          title: item.title,
          start: item.startDate,
          end: item.endDate,
          color: item.color,
          allDay: true,
        }));

        setEvents(mapped);
      } catch (err) {
        console.error('학사 일정 불러오기 실패:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">학사 일정</h1>
      <p className="page-description">학사 일정을 확인하세요.</p>

      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          locale="ko"
          eventDisplay="block"
          eventDidMount={(info) => {
            info.el.setAttribute('title', info.event.title);
          }}
        />
      </div>
    </div>
  );
};

export default AcademicSchedule;
