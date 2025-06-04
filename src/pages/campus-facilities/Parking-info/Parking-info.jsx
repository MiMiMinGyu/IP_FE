import '../../styles/Page.css';

const ParkingInfo = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">흡연 구역 안내</h1>

      <div style={styles.container}>
        {/* 흡연장 A */}
        <div style={styles.row}>
          <div style={styles.imageBox}>흡연장 사진</div>
          <div style={styles.imageBox}>흡연장 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.name}>흡연장 A</p>
            <p>설명 : 5공학관이나 2공학관을 쓰는 학우들이 가기 편리</p>
            <p>위치 : 5공학관 1층 뒷편</p>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* 명진당 흡연장 */}
        <div style={styles.row}>
          <div style={styles.imageBox}>흡연장 사진</div>
          <div style={styles.imageBox}>흡연장 위치 사진</div>
          <div style={styles.textBox}>
            <p style={styles.name}>명진당 흡연장</p>
            <p>설명 : 도서관 사용하는 학우들이 가기에 편리함</p>
            <p>위치 : 명진당(도서관) 바로 앞 계단 밑에 위치</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
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
  name: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '16px 0',
  },
};

export default ParkingInfo;
