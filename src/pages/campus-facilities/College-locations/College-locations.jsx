import '../../../styles/Page.css';

const CollegeLocations = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">단과대별 위치 안내</h1>

      <div style={styles.gridContainer}>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} style={styles.cardRow}>
            <div style={styles.imageBox}>단과대 건물 사진</div>
            <div style={styles.imageBox}>단과대 건물 위치 사진</div>
            <div style={styles.textBox}>
              <p style={styles.collegeName}>단과대 이름</p>
              <p>설명</p>
              <p>위치</p>
              <p>지도 url</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '24px',
  },
  cardRow: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    paddingBottom: '24px',
    borderBottom: '1px solid #ccc',
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
  collegeName: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
};

export default CollegeLocations;
