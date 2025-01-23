import React from 'react';
import Link from 'next/link';

// Function to fetch posts from the API on the server
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json(); // Return the list of posts
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts(); // Fetch posts directly on the server

  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
