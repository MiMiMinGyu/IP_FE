import '../../styles/Page.css';

const ConvenienceInfo = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">편의시설 위치 및 운영 시간</h1>

      <div style={styles.gridContainer}>

        {facilities.map((facility, index) => (
          <div key={index}>
            <div style={styles.row}>
              <div style={styles.imageBox}>사진</div>
              <div style={styles.imageBox}>위치도</div>
              <div style={styles.textBox}>
                <p style={styles.storeName}>{facility.name}</p>
                <p>설명 : {facility.description}</p>
                <p>위치 : {facility.location}</p>
                <p>운영 시간 : {facility.hours}</p>
              </div>
            </div>
            <hr style={styles.divider} />
          </div>
        ))}

      </div>
    </div>
  );
};

const facilities = [
  { name: "CU", description: "명앞씨라고 불림", location: "명지대 정문 앞", hours: "24시간 운영" },
  { name: "편의점", description: "학생회관 1층", location: "학생회관 1층", hours: "08:00 ~ 24:00" },
  { name: "편의점", description: "명진당 지하 1층", location: "명진당 지하 1층", hours: "08:00 ~ 24:00" },
  { name: "편의점", description: "복지동 1층", location: "복지동 1층", hours: "08:00 ~ 24:00" },
  { name: "편의점", description: "명덕관 1층", location: "명덕관 1층", hours: "08:00 ~ 24:00" },
  { name: "편의점", description: "함박관 3층", location: "함박관 3층", hours: "08:00 ~ 24:00" },
  { name: "카페잉", description: "학생복지관 내 카페", location: "학생복지관 2층", hours: "08:00 ~ 17:00" },
  { name: "파리바게트", description: "창조예술관 내 제과점", location: "창조예술관 4층", hours: "08:00 ~ 17:00" },
  { name: "청년제빵소", description: "함박관 내 제빵소", location: "함박관 3층", hours: "10:00 ~ 17:00" },
  { name: "하나은행", description: "학생복지관 내 은행", location: "학생복지관 1층", hours: "09:00 ~ 16:00 (평일만)" },
  { name: "보건의료센터", description: "학생 건강관리 시설", location: "학생회관 1층", hours: "08:00 ~ 17:00 (평일만)" },
  { name: "우편취급국", description: "우편 서비스 제공", location: "학생회관 1층", hours: "09:00 ~ 17:00 (평일만)" },
  { name: "복사실", description: "문서 출력 및 복사", location: "명진당 4층", hours: "10:00 ~ 17:00" },
  { name: "헬스장", description: "학생 헬스 시설", location: "명덕관 1층", hours: "06:00 ~ 22:00" },
  { name: "빨래방", description: "세탁 시설", location: "복지동 지하 1층", hours: "24시간 운영" },
  { name: "당구장", description: "학생 휴식 공간", location: "복지동 2층", hours: "12:00 ~ 22:00" },
];

const styles = {
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '24px',
  },
  row: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  imageBox: {
    width: '200px',
    height: '120px',
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
    fontSize: '14px',
    lineHeight: '1.6',
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '8px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '16px 0',
  },
};

export default ConvenienceInfo;
