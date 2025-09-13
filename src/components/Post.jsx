import { useState } from 'react';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => setLikes(likes + 1);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post-card mb-4">
      <div className="p-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">{post.username}</h3>
      </div>
      {post.type === "photo" ? (
        <img src={post.content} alt="Post" className="w-full" />
      ) : (
        <video controls className="w-full">
          <source src={post.content} type="video/mp4" />
        </video>
      )}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <button onClick={handleLike} className="text-gray-900 hover:text-red-500 flex items-center">
            <svg className="w-6 h-6" fill={likes > post.likes ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="ml-1">{likes}</span>
          </button>
          <span className="text-gray-600">{comments.length} comments</span>
        </div>
        <p className="text-gray-800 mb-2">{post.caption}</p>
        <div className="mb-2">
          {comments.map((c, index) => (
            <p key={index} className="text-sm text-gray-600">{c}</p>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border border-gray-300 rounded mb-2 text-gray-800 placeholder-gray-500"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;