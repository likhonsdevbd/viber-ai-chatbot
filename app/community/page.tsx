'use client';

import Link from 'next/link';
import { Users, MessageCircle, Award, Heart } from 'lucide-react';

export default function CommunityPage() {
  const sections = [
    {
      title: 'Contributors',
      description: 'Meet the amazing people building Viber',
      href: '/community/contributors',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Support & FAQ',
      description: 'Get help and find answers',
      href: '/community/support',
      icon: MessageCircle,
      color: 'green'
    },
    {
      title: 'User Showcase',
      description: 'See what the community has built',
      href: '/community/showcase',
      icon: Award,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers, creators, and enthusiasts using Viber AI Chatbot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => {
            const Icon = section.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600'
            };
            
            return (
              <Link
                key={section.href}
                href={section.href}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Users</span>
                <span className="font-semibold text-gray-900">50,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Built</span>
                <span className="font-semibold text-gray-900">1,200+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Countries</span>
                <span className="font-semibold text-gray-900">75+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Rating</span>
                <span className="font-semibold text-gray-900">4.8/5</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-sm p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
            <p className="mb-6 opacity-90">
              Connect with other Viber users, share your projects, and get help from the community.
            </p>
            <div className="space-y-3">
              <a
                href="https://github.com/your-username/viber-ai-chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white text-blue-600 rounded-lg text-center hover:bg-gray-100 transition-colors font-medium"
              >
                GitHub Repository
              </a>
              <a
                href="https://discord.gg/viber"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white/20 backdrop-blur text-white border border-white/30 rounded-lg text-center hover:bg-white/30 transition-colors font-medium"
              >
                Discord Server
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want to contribute?
          </h3>
          <p className="text-gray-700 mb-4">
            We welcome contributions of all kinds! Check out our contributing guide to get started.
          </p>
          <Link
            href="/community/contributors"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Learn How to Contribute
          </Link>
        </div>
      </div>
    </div>
  );
}
