import React from 'react';
import Image from 'next/image';

// Sample data for posts
const posts = [
  {
    id: 1,
    title: '[FC24] How to Import Legendary Players into Your Career Mode',
    description: 'This is the description for the first post.',
    coverImage: '/logo.png',
  },
  // Add more posts as needed
];

const PostsPage: React.FC = () => {
  return (
    <div className="p-5 font-sans bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-center text-3xl font-bold mb-5">Articles</h1>
      <p className="text-center text-lg mb-5">
        Here are some articles that you might find interesting.
      </p>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <Image
              src={post.coverImage}
              width={150}
              height={150}
              alt={post.title}
              className="w-36 h-36 object-cover"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
