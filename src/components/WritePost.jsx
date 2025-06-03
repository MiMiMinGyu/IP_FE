import { useEffect, useState } from 'react';
import { createPost } from '../api/BoardService';
import '../styles/WritePost.css';

const WritePost = ({ onClose, onSuccess, category = 'free' }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userId = localStorage.getItem('userId') || '1';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const postData = { title, content, userId, category };

    try {
      await createPost(postData);
      alert('게시글이 작성되었습니다.');
      onSuccess?.();
      onClose?.();
    } catch (err) {
      console.error('게시글 작성 실패:', err);
      alert('작성 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="write-modal">
        <h3>✏️ 글쓰기</h3>
        <input
          className="write-title"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="write-content"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="write-buttons">
          <button onClick={handleSubmit}>📌 게시</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default WritePost;