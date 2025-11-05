'use client';

import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'Building an AI-Powered Chatbot with Firebase and MiniMax',
      excerpt: 'Discover how we built Viber AI Chatbot using cutting-edge technologies...',
      date: 'November 6, 2025',
      author: 'Viber Team',
      tags: ['AI', 'Development', 'Firebase'],
      href: '/blog/building-ai-chatbot'
    },
    {
      title: 'Introducing Live Code Preview: See Your Ideas Come to Life',
      excerpt: 'Learn about our new live preview feature that lets you execute code in real-time...',
      date: 'November 5, 2025',
      author: 'Viber Team',
      tags: ['Features', 'Updates'],
      href: '/blog/live-preview-feature'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Updates, tutorials, and insights from the Viber team
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.href}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <Link href={post.href}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={post.href}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More posts coming soon! Follow us for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
