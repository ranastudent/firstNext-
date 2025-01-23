// app/blog/[id]/page.js
import React from 'react';

// Function to fetch the specific post based on id
async function fetchPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch the post');
  }
  return response.json(); // Return the post data
}

export default async function BlogDetails({ params }) {
  const { id } = params; // Get the id from the URL parameters
  const post = await fetchPost(id); // Fetch the post based on the id

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
