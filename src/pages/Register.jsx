import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/registerService';
import styles from '../styles/register.module.css';

function Register() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const isEmpty = !studentId.trim() || !password.trim() || !confirmPassword.trim() || !name.trim() || !nickname.trim() || !email.trim();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const result = await register({
      studentId,
      password,
      name,
      nickname,
      email,
    });

    if (result.success) {
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } else {
      alert(`회원가입 실패: ${result.error}`);
    }
  };

  return (
    <div className={styles["register-page"]}>
      <div className={styles["register-container"]}>
        <button onClick={handleBack} className={styles["back-button"]}> 🐾 돌아가기 </button>
        <h2 className={styles["register-title"]}>회원가입</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="studentId" className={styles.label}>아이디</label>
            <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
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

          <div className={styles["input-group"]}>
            <label htmlFor="email" className={styles.label}>이메일</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <button type="submit" className={styles["register-button"]} disabled={isEmpty}>회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
