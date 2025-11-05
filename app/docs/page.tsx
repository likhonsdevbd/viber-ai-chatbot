'use client';

import Link from 'next/link';
import { FileText, Code, Wrench, Book } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Quick start guide to get up and running',
      href: '/docs/getting-started',
      icon: Book
    },
    {
      title: 'Features',
      description: 'Explore all the powerful features',
      href: '/docs/features',
      icon: Code
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      href: '/docs/api-reference',
      icon: FileText
    },
    {
      title: 'Troubleshooting',
      description: 'Solutions to common problems',
      href: '/docs/troubleshooting',
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Viber AI Chatbot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need more help?
          </h3>
          <p className="text-gray-700 mb-4">
            Check out our community support page or join our Discord server for live assistance.
          </p>
          <div className="flex gap-4">
            <Link
              href="/community/support"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Support
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
