import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // 클릭/드래그 가능하게 해줌
import '../../styles/Calendar.css'; // 별도 스타일 적용

const Calendar = () => {
  const [events, setEvents] = useState([]);

  // 백엔드에서 데이터 가져오기 (더미라도 구조는 실제처럼)
  useEffect(() => {
    // TODO: 나중에 이 부분을 fetch('/api/calendar') 등으로 교체
    const dummyData = [
      {
        title: '1차 수강신청',
        start: '2025-03-10T09:00:00',
        end: '2025-03-12T18:00:00'
      },
      {
        title: '2차 수강신청',
        start: '2025-03-17T09:00:00',
        end: '2025-03-19T18:00:00'
      },
      {
        title: '수강 정정 기간',
        start: '2025-03-24T10:00:00',
        end: '2025-03-26T17:00:00'
      }
    ];

    // fetch('/api/calendar/schedules')
    //   .then(res => res.json())
    //   .then(data => setEvents(data))
    //   .catch(err => console.error('Error fetching calendar data:', err));

    setEvents(dummyData);
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">수강 신청 일정</h1>
      <p className="page-description">수강신청 일정을 확인하세요.</p>

      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events} // 여기에 state로 받은 일정들 들어감
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          locale="ko"
          eventColor="#4e73df" // 이벤트 색상 지정
          eventTextColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default Calendar;