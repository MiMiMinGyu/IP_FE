import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/BoardService';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import WritePost from '../../components/WritePost';
import '../../styles/Board.css';

const QuestionBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const data = await fetchPosts('question'); // 질문 카테고리 기반 요청
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="board-container">
      <h2>질문게시판</h2>
      <button className="post-button" onClick={() => setShowModal(true)}>
        ❓ 글쓰기
      </button>

      {showModal && (
        <WritePost
          category="question"
          onClose={() => setShowModal(false)}
          onSuccess={loadPosts}
        />
      )}

      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-container">
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-summary">
                  {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                </p>
                <div className="post-meta">
                  <span>{format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm')}</span> ·{' '}
                  <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: ko })}</span> ·{' '}
                  <span className="post-author">{post.nickname}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>게시글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionBoard;
