import { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../../api/BoardService';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import WritePost from '../../components/WritePost';
import '../../styles/Board.css';

const SuggestionBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const CATEGORY = 'SUGGESTION';

  const loadPosts = async () => {
    const data = await fetchPosts(CATEGORY);
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleOpenWrite = () => {
    const token = localStorage.getItem('accessToken');
    if (!token || token === 'null' || token === 'undefined') {
      alert('로그인이 필요한 기능입니다.');
      return;
    }
    setShowModal(true);
  };

  const handleDelete = async (postId) => {
    const confirmed = window.confirm('정말 이 게시글을 삭제하시겠습니까?');
    if (!confirmed) return;

    const result = await deletePost(postId);
    if (result) {
      alert('게시글이 삭제되었습니다!');
      await loadPosts();
    }
  };

  return (
    <div className="board-container">
      <h2>건의게시판</h2>
      <button className="post-button" onClick={handleOpenWrite}>
        💡 글쓰기
      </button>

      {showModal && (
        <WritePost
          category={CATEGORY}
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

              <button className="post-delete-button" onClick={() => handleDelete(post.id)}>
                ❌ 삭제
              </button>
              
            </div>
          ))
        ) : (
          <p>게시글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestionBoard;
