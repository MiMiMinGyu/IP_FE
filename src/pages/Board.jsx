import { useEffect, useState, useCallback } from 'react';
import { fetchPosts, createPost } from '../api/BoardService';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../styles/Board.css';

const Board = ({ boardType = 'free', title = '자유 게시판' }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = useCallback(async () => {
    const data = await fetchPosts(boardType);
    setPosts(data);
  }, [boardType]);

  const handleNewPost = async (postData) => {
    const newPost = await createPost(postData);
    if (newPost) {
      setPosts((prev) => [newPost, ...prev]);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [boardType, loadPosts]);

  return (
    <div className="board-container">
      <h1>{title}</h1>
      <button className="post-button" onClick={() => alert('글쓰기 기능 준비 중입니다')}>글쓰기</button>
      <PostForm onSubmit={handleNewPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Board;
