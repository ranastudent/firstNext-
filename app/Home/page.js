import React from 'react';

// A function to fetch posts on the server
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export default async function Home() {
  const posts = await fetchPosts(); // Fetch posts on the server

  return (
    <div>
      <div>
        <h2>All Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} className="mb-4">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
