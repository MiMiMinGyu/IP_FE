import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/Calendar.css';

const AcademicSchedule = () => {
  const [events, setEvents] = useState([]);

  // 학사 일정 더미 데이터
  useEffect(() => {
    const dummyData = [
      {
        title: '1학기 개강일',
        start: '2025-03-03',
        end: '2025-03-03',
        color: '#4e73df' // 파란색 - 학사일정
      },
      {
        title: '수강신청 1차',
        start: '2025-02-24T09:00:00',
        end: '2025-02-26T18:00:00',
        color: '#1cc88a' // 녹색 - 수강신청
      },
      {
        title: '수강신청 2차',
        start: '2025-03-03T09:00:00',
        end: '2025-03-05T18:00:00',
        color: '#1cc88a'
      },
      {
        title: '중간고사',
        start: '2025-04-14',
        end: '2025-04-18',
        color: '#f6c23e' // 노란색 - 시험
      },
      {
        title: '기말고사',
        start: '2025-06-09',
        end: '2025-06-13',
        color: '#f6c23e'
      },
      {
        title: '성적 입력 마감',
        start: '2025-06-20',
        end: '2025-06-20',
        color: '#e74a3b' // 빨간색 - 성적
      },
      {
        title: '여름방학 시작',
        start: '2025-06-23',
        end: '2025-06-23',
        color: '#858796' // 회색 - 방학
      }
    ];

    setEvents(dummyData);
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
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          locale="ko"
        />
      </div>
    </div>
  );
};

export default AcademicSchedule;