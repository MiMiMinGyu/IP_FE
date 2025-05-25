import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignUp.module.css';

function SignUp() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const isEmpty = !id.trim() || !password.trim() || !confirmPassword.trim() || !name.trim() || !nickname.trim();

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 회원가입 요청 로직 추가
    alert('회원가입이 완료되었습니다!');
    navigate('/login');
  };

  return (
    <div className={styles["signup-page"]}>
      <div className={styles["signup-container"]}>
        <button onClick={handleBack} className={styles["back-button"]}> 🐾 돌아가기 </button>
        <h2 className={styles["signup-title"]}>회원가입</h2>
        <form onSubmit={handleSignUpSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="id" className={styles.label}>아이디</label>
            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="password" className={styles.label}>비밀번호</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="confirmPassword" className={styles.label}>비밀번호 확인</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="name" className={styles.label}>이름</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="nickname" className={styles.label}>닉네임</label>
            <input type="text" id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
          </div>

          <button type="submit" className={styles["signup-button"]} disabled={isEmpty}>회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
