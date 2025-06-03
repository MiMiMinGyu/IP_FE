import { useEffect, useState, useCallback } from 'react';
import { fetchPosts, createPost } from '../api/BoardService';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../styles/Board.css';

const Board = ({ boardType = 'GENERAL', title = '자유 게시판' }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = useCallback(async () => {
    const data = await fetchPosts(boardType);
    setPosts(data);
  }, [boardType]);

  const handleNewPost = async (postData) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }

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
      <PostForm onSubmit={handleNewPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Board;
