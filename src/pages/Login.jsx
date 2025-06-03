import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/LoginService';
import styles from '../styles/Login.module.css';

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const result = await login(studentId.trim(), password);

    if (result.success) {
      const { accessToken, user } = result.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      console.log("로그인 응답: ", result.data);

      alert(`환영합니다, ${user.nickname}님!`);
      navigate('/'); 
    }
    else {
      alert(`로그인에 실패했습니다.\n${result.error}`);
    }
  };

  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-container"]}>
        <button onClick={handleBack} className={styles["back-button"]}> 🐾 돌아가기 </button>
        <h2 className={styles["login-title"]}>로그인</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="studentId" className={styles["label"]}>아이디</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              placeholder="아이디를 입력하세요"
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="password" className={styles["label"]}>비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <button type="submit" className={styles["login-button"]}>로그인</button>

          <div className={styles["extra-links"]}>
            <span onClick={() => navigate('/register')}>회원가입</span>
            <span> | </span>
            <span>아이디/비밀번호 찾기</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
