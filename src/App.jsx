import { useState } from 'react';
import Post from './components/Post';
import BottomNav from './components/BottomNav';
import './App.css';

// Sample data
const initialPosts = [
  {
    id: 1,
    username: "user1",
    type: "photo",
    content: "https://via.placeholder.com/600x600",
    caption: "Beautiful sunset! 🌅",
    likes: 120,
    comments: ["Wow!", "Amazing view!"]
  },
  {
    id: 2,
    username: "user2",
    type: "video",
    content: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Check out my new vlog!",
    likes: 85,
    comments: ["Great video!", "Love this!"]
  }
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="nav-top fixed top-0 w-full bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold text-gray-800">Decon</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="ml-1">Profile</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-1">Settings</span>
          </a>
        </div>
      </nav>
      <div className="content pt-16 pb-20">
        <div className="space-y-4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default App
