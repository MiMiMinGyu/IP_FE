import { useEffect, useState } from 'react';
import '../styles/MyPageModal.css';

const MyPageModal = ({ onClose }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getAuthHeaders = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json'
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, postsRes, likesRes, commentsRes] = await Promise.all([
          fetch(`${BASE_URL}/mypage`, getAuthHeaders()),
          fetch(`${BASE_URL}/mypage/posts`, getAuthHeaders()),
          fetch(`${BASE_URL}/mypage/likes`, getAuthHeaders()),
          fetch(`${BASE_URL}/mypage/comments`, getAuthHeaders())
        ]);

        if (!userRes.ok || !postsRes.ok || !likesRes.ok || !commentsRes.ok) {
          throw new Error('하나 이상의 API 응답이 실패했습니다.');
        }

        const [user, posts, likes, comments] = await Promise.all([
          userRes.json(),
          postsRes.json(),
          likesRes.json(),
          commentsRes.json()
        ]);

        setUserInfo(user);
        setPosts(posts);
        setLikes(likes);
        setComments(comments);
        setLoading(false);
      } catch (err) {
        console.error('데이터 로딩 실패:', err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL]);

  if (loading) return <div className="modal-overlay">로딩 중...</div>;

  if (!userInfo) return <div className="modal-overlay">사용자 정보를 불러올 수 없습니다.</div>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>My Page</h2>

        <section>
          <h3>내 정보</h3>
          <ul>
            <li><strong>학번:</strong> {userInfo.studentId}</li>
            <li><strong>이름:</strong> {userInfo.name}</li>
            <li><strong>닉네임:</strong> {userInfo.nickname}</li>
            <li><strong>이메일:</strong> {userInfo.email}</li>
          </ul>
        </section>

        <section>
          <h3>내가 작성한 글</h3>
          <ul>
            {posts.map((post, idx) => (
              <li key={idx}>{post.title}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>내가 좋아요한 글</h3>
          <ul>
            {likes.map((like, idx) => (
              <li key={idx}>{like.title}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>내 댓글</h3>
          <ul>
            {comments.map((comment, idx) => (
              <li key={idx}>{comment.content}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MyPageModal;
