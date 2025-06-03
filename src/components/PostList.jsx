const PostList = ({ posts }) => {
  if (!posts.length) return <p>게시글이 없습니다.</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>작성자: {post.author?.nickname}</small>
        </li>
      ))}
    </ul>
  );
};

export default PostList;